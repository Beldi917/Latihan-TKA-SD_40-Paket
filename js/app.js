import { unlockPremiumWithToken, checkPremiumStatus, saveUserScore, auth } from '../src/firebase.ts';
import { signInAnonymously } from 'firebase/auth';

// Core App Logic
const App = {
    async init() {
        this.checkAuth();
        this.initTheme();
        
        // Pre-sign in anonymously to avoid network errors later
        if (!auth.currentUser) {
            try {
                await signInAnonymously(auth);
                console.log("Signed in anonymously.");
            } catch (e) {
                console.error("Initial anonymous sign-in failed:", e);
            }
        }
    },

    initTheme() {
        document.documentElement.classList.add('dark');
    },

    checkAuth() {
        const user = this.getUser();
        const path = window.location.pathname;
        const isPublicPage = ['/', '/index.html', '/login.html'].some(p => path.endsWith(p));
        
        if (!user && !isPublicPage) {
            window.location.href = 'login.html';
        } else if (user && path.endsWith('login.html')) {
            window.location.href = 'dashboard.html';
        }
    },

    getUser() {
        const user = localStorage.getItem('tka_user');
        return user ? JSON.parse(user) : null;
    },

    saveUser(userData) {
        localStorage.setItem('tka_user', JSON.stringify(userData));
    },

    logout() {
        localStorage.removeItem('tka_user');
        window.location.href = 'index.html';
    },

    getLeaderboard() {
        const allUsers = [];
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key.startsWith('tka_user_score_')) {
                const data = JSON.parse(localStorage.getItem(key));
                allUsers.push(data);
            }
        }
        return allUsers.sort((a, b) => b.score - a.score);
    },

    async saveScore(username, score, subject, packageNum) {
        const key = `tka_user_score_${username}`;
        const existing = JSON.parse(localStorage.getItem(key)) || { username, score: 0 };
        if (score > existing.score) {
            existing.score = score;
            localStorage.setItem(key, JSON.stringify(existing));
        }

        // Also save to Firebase
        try {
            await saveUserScore(score, subject, packageNum);
        } catch (e) {
            console.error('Failed to save score to Firebase:', e);
        }
    },

    getBadge(score) {
        if (score >= 250) return { name: 'Master TKA', class: 'badge-master' };
        if (score >= 150) return { name: 'Pejuang Soal', class: 'badge-warrior' };
        return { name: 'Pemula', class: 'badge-beginner' };
    },

    async unlockPremium(username, token) {
        try {
            const result = await unlockPremiumWithToken(username, token);
            if (result.success) {
                const user = this.getUser();
                if (user) {
                    user.premium = true;
                    this.saveUser(user);
                }
                return { success: true, message: result.message };
            }
            return { success: false, message: 'Gagal membuka paket.' };
        } catch (error) {
            return { success: false, message: error.message };
        }
    },

    async checkPremium(username) {
        try {
            const isPremium = await checkPremiumStatus(username);
            const user = this.getUser();
            if (user && user.premium !== isPremium) {
                user.premium = isPremium;
                this.saveUser(user);
            }
            return isPremium;
        } catch (error) {
            console.error('Failed to check premium status:', error);
            return false;
        }
    }
};

window.App = App;
App.init();
