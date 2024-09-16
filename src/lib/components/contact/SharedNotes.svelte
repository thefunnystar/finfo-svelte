<script>
    import {user} from "$stores/user.js";
    import axios from "axios";
    import {writable} from "svelte/store";
    import {onMount} from "svelte";

    export let sharedNotesLink0;
    export let sharedNotesLink1;
    export let sharedNotesLink2;
    export let sharedNotesNote0 = '';
    export let sharedNotesNote1 = '';
    export let sharedNotesNote2 = '';
    export let contactId;
</script>

<div class="shared-notes">
    <p class="shared-notes__title">Shared Notes - <a href={`/contact/${contactId}/add-note`} class="shared-notes__title--add">Add Note</a></p>
    <div class="shared-notes__notes">
        {#if sharedNotesNote0}
            <a href={`/note/${sharedNotesLink0}`} class="shared-notes__notes--note">
                {#if sharedNotesNote0.length > 30}
                    <p class="shared-notes__notes--note-n">{sharedNotesNote0.substring(0, 30) + '...'}</p>
                {:else}
                    <p class="shared-notes__notes--note-n">{sharedNotesNote0}</p>
                {/if}
            </a>
        {:else}
            <a href={`/contact/${contactId}/add-note`} class="shared-notes__notes--note"></a>
        {/if}
        {#if sharedNotesNote1}
            <a href={`/note/${sharedNotesLink1}`} class="shared-notes__notes--note">
                {#if sharedNotesNote1.length > 30}
                    <p class="shared-notes__notes--note-n">{sharedNotesNote1.substring(0, 30) + '...'}</p>
                {:else}
                    <p class="shared-notes__notes--note-n">{sharedNotesNote1}</p>
                {/if}
            </a>
        {:else}
            <a href={`/contact/add-note`} class="shared-notes__notes--note"></a>
        {/if}
        {#if sharedNotesNote2}
            <a href={`/note/${sharedNotesLink2}`} class="shared-notes__notes--note">
                {#if sharedNotesNote2.length > 30}
                    <p class="shared-notes__notes--note-n">{sharedNotesNote2.substring(0, 30) + '...'}</p>
                {:else}
                    <p class="shared-notes__notes--note-n">{sharedNotesNote2}</p>
                {/if}
            </a>
        {:else}
            <a href={`/contact/${contactId}/add-note`} class="shared-notes__notes--note"></a>
        {/if}
        <a href={`/contact/${contactId}/shared-notes`} class="shared-notes__notes--more"></a>
    </div>
</div>

<style lang="sass">
  .shared-notes
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
      height: 136px
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