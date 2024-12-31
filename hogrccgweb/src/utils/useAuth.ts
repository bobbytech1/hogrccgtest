export const useAuth = () => {
    //getting token from local storage
    const admin = localStorage.getItem('loggedIn')
    //checking whether token is preset or not
    if (admin) {
        return true;
    } else {
        return false
    }
};