<script>
    export let privateNotesLink0;
    export let privateNotesLink1;
    export let privateNotesNote0;
    export let privateNotesNote1;
</script>

<div class="private-notes">
    <p class="private-notes__title">private Notes</p>
    <div class="private-notes__notes">
        <a href={privateNotesLink0} class="private-notes__notes--note">{privateNotesNote0}</a>
        <a href={privateNotesLink1} class="private-notes__notes--note">{privateNotesNote1}</a>
    </div>
</div>

<style lang="sass">
  .private-notes
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