<script>
    import {onMount} from "svelte";

    export let privateNotesLink0;
    export let privateNotesLink1;
    export let privateNotesNote0 = '';
    export let privateNotesNote1 = '';
    export let contactId;
</script>

<div class="private-notes">
    <p class="private-notes__title">Private Notes - <a href={`/contact/${contactId}/add-note?isPrivate=true`} class="private-notes__title--add">Add Note</a></p>
    <div class="private-notes__notes">
        {#if privateNotesNote0}
            <a href={`/note/${privateNotesLink0}?isPrivate=true`} class="private-notes__notes--note">
                {#if privateNotesNote0.length > 30}
                    <p class="private-notes__notes--note-n">{privateNotesNote0.substring(0, 30) + '...'}</p>
                {:else}
                    <p class="private-notes__notes--note-n">{privateNotesNote0}</p>
                {/if}
            </a>
        {:else}
            <a href={`/contact/${contactId}/add-note?isPrivate=true`} class="private-notes__notes--note"></a>
        {/if}
        {#if privateNotesNote1}
            <a href={`/note/${privateNotesLink1}?isPrivate=true`} class="private-notes__notes--note">
                {#if privateNotesNote1.length > 30}
                    <p class="private-notes__notes--note-n">{privateNotesNote1.substring(0, 30) + '...'}</p>
                {:else}
                    <p class="private-notes__notes--note-n">{privateNotesNote1}</p>
                {/if}
            </a>
        {:else}
            <a href={`/contact/${contactId}/add-note?isPrivate=true`} class="private-notes__notes--note"></a>
        {/if}
        <a href={`/contact/${contactId}/private-notes`} class="private-notes__notes--more"></a>
    </div>
</div>

<style lang="sass">
  .private-notes
    margin: 0 auto
    width: 312px
    &__title
      font-size: 16px
      margin-bottom: 16px
      &--add
        color: blue
        text-decoration: none
    &__notes
      display: flex
      justify-content: space-between
      flex-direction: column
      height: 96px
      &--note
        width: 100%
        height: 32px
        border-radius: 3px
        background-color: #D9D9D9
        color: black
        text-decoration: none
        display: flex
        &-n
          align-content: center
          margin-left: 16px
      &--more
        width: 100%
        height: 16px
        border-radius: 3px
        background-color: #D9D9D9
</style>