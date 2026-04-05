// Core App Logic
const App = {
    init() {
        this.checkAuth();
        this.initTheme();
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

    saveScore(username, score) {
        const key = `tka_user_score_${username}`;
        const existing = JSON.parse(localStorage.getItem(key)) || { username, score: 0 };
        if (score > existing.score) {
            existing.score = score;
            localStorage.setItem(key, JSON.stringify(existing));
        }
    },

    getBadge(score) {
        if (score >= 250) return { name: 'Master TKA', class: 'badge-master' };
        if (score >= 150) return { name: 'Pejuang Soal', class: 'badge-warrior' };
        return { name: 'Pemula', class: 'badge-beginner' };
    }
};

window.App = App;
App.init();
