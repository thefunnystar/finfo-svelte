<script>
    import TopBar from "$components/TopBar.svelte";
    import { user } from '$stores/user.js';
    import { onMount } from 'svelte';
    import axios from 'axios';
    import SharedNotes from "$components/contact/SharedNotes.svelte";
    import { get } from 'svelte/store';

    let contact;
    let contactId;

    let sharedNotes = [];
    let sharedNotesId = [];
    let sharedNotesContent = [];

    let userEmail = '';

    onMount(async () => {
        userEmail = get(user).email;

        fetchContact();
        fetchNotes();
    });

    async function fetchContact() {
        try {
            contactId = window.location.href.split('/').reverse()[1];
            console.log("Contact ID:", contactId);
            const response = await axios.get(`http://localhost:5000/contact/${contactId}`);
            contact = response.data;
            console.log(contact);
        } catch (err) {
            console.error('Error fetching contact:', err);
        }
    }

    async function fetchNotes() {
        try {
            const response = await axios.get(`http://localhost:5000/notes/${contactId}`, {
                params: {
                    userEmail: userEmail
                }
            });

            const allNotes = response.data;

            sharedNotes = allNotes.filter(note => !note.isPrivate);
            sharedNotes.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
            sharedNotesId = sharedNotes.map(note => note._id);
            sharedNotesContent = sharedNotes.map(note => note.content);

        } catch (err) {
            console.error('Error fetching notes:', err);
        }
    }
</script>

<p>Shared Notes</p>