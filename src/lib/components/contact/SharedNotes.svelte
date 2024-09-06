<script>
    export let sharedNotesLink0;
    export let sharedNotesLink1;
    export let sharedNotesLink2;
    export let sharedNotesNote0;
    export let sharedNotesNote1;
    export let sharedNotesNote2;
</script>

<div class="shared-notes">
    <p class="shared-notes__title">Shared Notes</p>
    <div class="shared-notes__notes">
        <a href={sharedNotesLink0} class="shared-notes__notes--note">{sharedNotesNote0}</a>
        <a href={sharedNotesLink1} class="shared-notes__notes--note">{sharedNotesNote1}</a>
        <a href={sharedNotesLink2} class="shared-notes__notes--note">{sharedNotesNote2}</a>
    </div>
</div>

<style lang="sass">
  .shared-notes
    margin: 0 auto
    &__title
      font-size: 16px
      margin-bottom: 16px
    &__notes
      display: flex
      justify-content: space-between
      flex-direction: column
      height: 112px
      &--note
        width: 312px
        height: 32px
        border-radius: 3px
</style>