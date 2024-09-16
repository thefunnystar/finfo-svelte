<script>
    import TopBar from "$components/TopBar.svelte";
    import AddNotes from "$components/AddNotes.svelte";
    import ButtonLarge from "$components/btn/ButtonLarge.svelte";
    import axios from 'axios';
    import { onMount } from 'svelte';
    import { user } from '$stores/user.js'; // Import the user store
    import { get } from 'svelte/store';
    import { page } from '$app/stores';

    let contactId = '';
    let note = '';

    export let isPrivate = false;
    let userEmail = '';

    onMount(() => {
        contactId = window.location.href.split('/').reverse()[1];
        userEmail = get(user).email;

        const queryParams = new URLSearchParams(get(page).url.search);
        if (queryParams.get('isPrivate') === 'true') {
            isPrivate = true;
        }
    });

    async function addNote() {
        try {
            const newNote = {
                userEmail: userEmail,
                contact_id: contactId,
                content: note,
                isPrivate: isPrivate
            };

            const response = await axios.post('http://localhost:5000/notes', newNote);
            note = '';
        } catch (err) {
            console.error('Error adding note:', err);
        }
    }
</script>

<TopBar />
<div class="add-note">
    <div class="add-note__context">
        <AddNotes io="note" ioLabel="New Note" bind:ioValue={note} />
    </div>
    <div class="add-note__checkbox">
        <input type="checkbox" id="private" name="private" bind:checked={isPrivate} />
        <label for="private">Private</label>
    </div>
    <div class="add-note__button">
        <ButtonLarge btnText="Add Note" onClick={addNote} />
    </div>
</div>

<style lang="sass">
  .add-note
    display: flex
    flex-direction: column
    &__context
      margin: 64px auto
    &__checkbox
      margin-left: 32px
    &__button
      margin: 32px auto
</style>
