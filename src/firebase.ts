import { initializeApp } from 'firebase/app';
import { getAuth, signInAnonymously } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc, updateDoc, serverTimestamp, collection, query, where, getDocs, orderBy, limit, addDoc } from 'firebase/firestore';
import firebaseConfig from '../firebase-applet-config.json';

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app, firebaseConfig.firestoreDatabaseId);

// Error handling helper
export enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

export interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId: string | undefined;
    email: string | null | undefined;
    emailVerified: boolean | undefined;
    isAnonymous: boolean | undefined;
    tenantId: string | null | undefined;
    providerInfo: {
      providerId: string;
      displayName: string | null;
      email: string | null;
      photoUrl: string | null;
    }[];
  }
}

export function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null) {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: auth.currentUser?.uid,
      email: auth.currentUser?.email,
      emailVerified: auth.currentUser?.emailVerified,
      isAnonymous: auth.currentUser?.isAnonymous,
      tenantId: auth.currentUser?.tenantId,
      providerInfo: auth.currentUser?.providerData.map(provider => ({
        providerId: provider.providerId,
        displayName: provider.displayName,
        email: provider.email,
        photoUrl: provider.photoURL
      })) || []
    },
    operationType,
    path
  }
  console.error('Firestore Error: ', JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}

// Token validation and registration logic
export async function registerWithToken(name: string, token: string) {
  try {
    // 1. Sign in anonymously if not already signed in
    if (!auth.currentUser) {
      await signInAnonymously(auth);
    }
    const uid = auth.currentUser!.uid;

    // 2. Check if token exists and is not used
    const tokenRef = doc(db, 'tokens', token.toUpperCase());
    const tokenSnap = await getDoc(tokenRef);

    if (!tokenSnap.exists()) {
      throw new Error('Token tidak valid. Silakan hubungi admin.');
    }

    const tokenData = tokenSnap.data();
    if (tokenData.used) {
      throw new Error('Token sudah digunakan oleh pengguna lain.');
    }

    // 3. Create user record
    const userRef = doc(db, 'users', uid);
    await setDoc(userRef, {
      uid,
      name,
      token: token.toUpperCase(),
      bestScore: 0,
      createdAt: serverTimestamp()
    });

    // 4. Mark token as used
    await updateDoc(tokenRef, {
      used: true,
      usedBy: uid
    });

    return { uid, name, token: token.toUpperCase() };
  } catch (error) {
    if (error instanceof Error && error.message.includes('Token')) {
        throw error;
    }
    handleFirestoreError(error, OperationType.WRITE, 'users/tokens');
    throw error;
  }
}

export async function checkUserRegistration(uid: string) {
    try {
        const userRef = doc(db, 'users', uid);
        const userSnap = await getDoc(userRef);
        if (userSnap.exists()) {
            return userSnap.data();
        }
        return null;
    } catch (error) {
        handleFirestoreError(error, OperationType.GET, `users/${uid}`);
        throw error;
    }
}

export async function saveUserScore(score: number, subject: string, packageNum: number) {
    try {
        if (!auth.currentUser) return;
        const uid = auth.currentUser.uid;
        
        // Get user name
        const userRef = doc(db, 'users', uid);
        const userSnap = await getDoc(userRef);
        const userName = userSnap.exists() ? userSnap.data().name : 'Anonymous';

        // 1. Add to scores collection
        await addDoc(collection(db, 'scores'), {
            userId: uid,
            userName: userName,
            score: score,
            subject: subject,
            package: packageNum,
            timestamp: serverTimestamp()
        });

        // 2. Update best score in user profile if higher
        if (userSnap.exists()) {
            const currentBest = userSnap.data().bestScore || 0;
            if (score > currentBest) {
                await updateDoc(userRef, {
                    bestScore: score
                });
            }
        }
    } catch (error) {
        handleFirestoreError(error, OperationType.WRITE, 'scores');
        throw error;
    }
}

export async function getGlobalLeaderboard(limitCount: number = 10) {
    try {
        const scoresRef = collection(db, 'users');
        const q = query(scoresRef, orderBy('bestScore', 'desc'), limit(limitCount));
        const querySnapshot = await getDocs(q);
        return querySnapshot.docs.map(doc => doc.data());
    } catch (error) {
        handleFirestoreError(error, OperationType.LIST, 'users/leaderboard');
        throw error;
    }
}

// Admin helper to generate tokens (for testing/admin use)
export async function generateToken(token: string) {
    try {
        const tokenRef = doc(db, 'tokens', token.toUpperCase());
        await setDoc(tokenRef, {
            id: token.toUpperCase(),
            used: false,
            createdAt: serverTimestamp()
        });
    } catch (error) {
        handleFirestoreError(error, OperationType.CREATE, `tokens/${token}`);
        throw error;
    }
}
