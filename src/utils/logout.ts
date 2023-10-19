
export function logoutUser() {
    // Clear the access token from localStorage
    localStorage.removeItem('accessToken');
    window.location.href = '/login'; // Replace '/login' with your actual login page URL
}