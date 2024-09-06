import { writable } from 'svelte/store';

// Initial state: no user logged in
export const user = writable({
    isLoggedIn: false,
    email: '',
    name: ''
});

// Function to log in a user
export function loginUser(userInfo) {
    user.set({
        isLoggedIn: true,
        email: userInfo.email,
        name: userInfo.name
    });
}

// Function to log out a user
export function logoutUser() {
    user.set({
        isLoggedIn: false,
        email: '',
        name: ''
    });
}
