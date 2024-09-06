<script>
    export let headerText;
</script>

<div class="header">
    <div class="header__text">{headerText}</div>
    <div class="header__line"></div>
</div>

<style lang="sass">
  .header
    width: 100%
    &__text
      font-size: 32px
      margin: 32px 0
      text-align: center
    &__line
      width: 100%
      height: 1px
      background-color: black
      content: ''
</style>