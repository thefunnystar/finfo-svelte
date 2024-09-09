import { writable } from 'svelte/store';

// Prevent localStorage running on server-side
const storedUser = (typeof window !== 'undefined' && JSON.parse(localStorage.getItem('user'))) || {
    isLoggedIn: false,
    email: '',
    name: '',
    id: '' // Add userId here
};

export const user = writable(storedUser);

user.subscribe(value => {
    if (typeof window !== 'undefined') {
        localStorage.setItem('user', JSON.stringify(value));
    }
});

export function loginUser(userInfo) {
    user.set({
        isLoggedIn: true,
        email: userInfo.email,
        name: userInfo.name,
        id: userInfo.id // Ensure you store the userId here
    });
}

export function logoutUser() {
    user.set({
        isLoggedIn: false,
        email: '',
        name: '',
        id: '' // Reset the userId on logout
    });
    if (typeof window !== 'undefined') {
        localStorage.removeItem('user');
    }
}
