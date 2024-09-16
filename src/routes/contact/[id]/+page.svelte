<script>
    import TopBar from "$components/TopBar.svelte";
    import { user } from '$stores/user.js';
    import { onMount } from 'svelte';
    import axios from 'axios';
    import ContactInfo from "$components/contact/ContactInfo.svelte";
    import SavedPhotos from "$components/contact/SavedPhotos.svelte";
    import SharedNotes from "$components/contact/SharedNotes.svelte";
    import PrivateNotes from "$components/contact/PrivateNotes.svelte";
    import { get } from 'svelte/store';

    let contact;
    let contactId;

    let sharedNotes = [];
    let privateNotes = [];

    let sharedNotesId = [];
    let privateNotesId = [];
    let sharedNotesContent = [];
    let privateNotesContent = [];

    let userEmail = '';

    onMount(async () => {
        userEmail = get(user).email;

        fetchContact();
        fetchNotes();
    });

    async function fetchContact() {
        try {
            contactId = window.location.href.split('/').pop();
            console.log("Contact ID:", contactId);
            const response = await axios.get(`http://localhost:5000/contact/${contactId}`);
            contact = response.data;
            console.log(contact);
        } catch (err) {
            console.error('Error fetching contact:', err);
        }
    }

    async function fetchSavedPhotos() {
        try {
            const response = await fetch(`http://localhost:5000/savedPhotos`, {
                params: {
                    userEmail: userEmail,
                    contact_id: contactId
                }
            });
            if (response.ok) {
                const savedPhotos = await response.json();
                return savedPhotos;
            } else {
                console.error('Failed to fetch saved photos');
            }
        } catch (error) {
            console.error('Error fetching photos:', error);
        }
    }

    async function uploadAndSavePhoto(file, userEmail, contactId, order) {
        if (!file) return;

        try {
            const response = await fetch("http://localhost:5000/s3Url");
            const result = await response.json();
            const url = result.url;

            const uploadResponse = await fetch(url, {
                method: "PUT",
                headers: {
                    "Content-Type": file.type,
                },
                body: file,
            });

            if (uploadResponse.ok) {
                const imageUrl = url.split('?')[0];

                const payload = {
                    userEmail,
                    contact_id: contactId,
                    photo: imageUrl,
                    order
                };

                const saveResponse = await fetch('http://localhost:5000/photos/savePhoto', {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(payload)
                });

                if (saveResponse.ok) {
                    console.log('Photo saved successfully');
                } else {
                    console.error('Failed to save photo');
                }
            } else {
                console.error('Failed to upload image');
            }
        } catch (error) {
            console.error('Error uploading and saving photo:', error);
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
            privateNotes = allNotes.filter(note => note.isPrivate);

            sharedNotes.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
            privateNotes.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

            sharedNotesId = sharedNotes.map(note => note._id);
            privateNotesId = privateNotes.map(note => note._id);
            sharedNotesContent = sharedNotes.map(note => note.content);
            privateNotesContent = privateNotes.map(note => note.content);

            console.log("Shared notes content:", sharedNotesContent);
            console.log("Shared notes Id:", sharedNotesId);

        } catch (err) {
            console.error('Error fetching notes:', err);
        }
    }
</script>

<TopBar />
<div class="contact">
    {#if contact}
        <div class="contact__info">
            <ContactInfo
                    contactInfoImage={contact.contactPhoto || ''}
                    contactInfoName={contact.contactName}
                    contactInfoID={contact._id}
                    contactInfoRelationship={contact.relationship}
            />
        </div>
        <div class="contact__saved-photos">
            <SavedPhotos savedPhotosImage0="" savedPhotosImage1="" savedPhotosImage2="" />
        </div>
        <div class="contact__shared-notes">
            <SharedNotes
                    contactId={contactId}
                    sharedNotesLink0={sharedNotesId[0]}
                    sharedNotesLink1={sharedNotesId[1]}
                    sharedNotesLink2={sharedNotesId[2]}
                    sharedNotesNote0={sharedNotesContent[0] || ''}
                    sharedNotesNote1={sharedNotesContent[1] || ''}
                    sharedNotesNote2={sharedNotesContent[2] || ''}
            />
        </div>
        <div class="contact__private-notes">
            <PrivateNotes
                    contactId={contactId}
                    privateNotesLink0={privateNotesId[0]}
                    privateNotesLink1={privateNotesId[1]}
                    privateNotesNote0={privateNotesContent[0] || ''}
                    privateNotesNote1={privateNotesContent[1] || ''}
            />
        </div>
    {:else}
        <p>Loading contact...</p>
    {/if}
</div>

<style lang="sass">
    .contact
      &__info
        margin-bottom: 24px
      &__saved-photos
        margin-bottom: 24px
      &__shared-notes
        margin-bottom: 24px
</style>
