
const authStore = {
    isLoggedIn() {
        return localStorage.getItem("user_token") ? true : false;
    },
    login(token) {
        localStorage.setItem('user_token', token)
    },
    logout() {
        localStorage.removeItem('user_token')
    }
}

export default authStore;