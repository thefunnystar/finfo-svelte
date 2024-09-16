<script>
    import TopBar from "$components/TopBar.svelte";
    import { user } from '$stores/user.js';
    import { onMount } from 'svelte';
    import axios from 'axios';
    import { get } from 'svelte/store';
    import AddNotes from "$components/AddNotes.svelte";
    import ButtonLarge from "$components/btn/ButtonLarge.svelte";

    let note;
    const noteId = window.location.href.split('/').pop();

    let userEmail = '';
    let isPrivate = false;

    onMount(async () => {
        const urlParams = new URLSearchParams(window.location.search);
        isPrivate = urlParams.get('isPrivate') === 'true';
        fetchNotes();
    });

    async function fetchNotes() {
        try {
            const response = await axios.get(`http://localhost:5000/note/${noteId}`, {
                params: {
                    noteId: noteId
                }
            });

            note = response.data.content;
        } catch (err) {
            console.error('Error fetching notes:', err);
        }
    }

    async function updateNote() {
        try {
            const updatedNote = {
                content: note,
                isPrivate: isPrivate
            };

            const response = await axios.put(`http://localhost:5000/note/${noteId}`, updatedNote);

            alert("Note Updated!");
            console.log('Updated Note:', response.data);
        } catch (err) {
            console.error('Error updating note:', err);
            alert('Failed to update the note.');
        }
    }

    async function handleDelete() {
        try {
            confirm('Are you sure you want to delete this note?');
            const response = await axios.delete(`http://localhost:5000/note/${noteId}`);
            alert("Note Deleted!");
        } catch (err) {
            console.error('Error deleting note:', err);
            alert('Failed to delete the note.');
        }
    }
</script>

<TopBar />
<div class="edit-note">
    <div class="edit-note__context">
        <AddNotes io="note" ioLabel="Note" bind:ioValue={note} />
    </div>
    <div class="edit-note__checkbox">
        <input type="checkbox" id="private" name="private" bind:checked={isPrivate} />
        <label for="private">Private</label>
    </div>
    <div class="edit-note__button">
        <ButtonLarge btnText="Update Note" onClick={updateNote} />
    </div>
    <p class="edit-note__delete" on:click={handleDelete}>Delete Note</p>
</div>

<style lang="sass">
  .edit-note
    display: flex
    flex-direction: column
    &__context
      margin: 64px auto
    &__checkbox
      margin-left: 32px
    &__button
      margin: 32px auto
    &__delete
        margin: 0 auto
        color: red
        cursor: pointer
</style>
