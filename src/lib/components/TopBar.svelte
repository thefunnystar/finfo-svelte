<script>
    function backspace() {
        window.history.back();
    }
</script>

<div class="top-bar">
    <svg class="top-bar__icon" on:click={backspace} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
    <p class="top-bar__title">Finfo</p>
    <i class="top-bar__hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
    </i>
<!--    Add 3 dots here    -->
</div>

<style lang="sass">
  .top-bar
    display: flex
    align-items: center
    background-color: #9C27B0
    height: 38px
    width: 100%
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1)
    &__icon
      height: 20px
      margin: 0 auto 0 10px
      cursor: pointer
    &__title
      font-size: 20px
      margin: 0 auto
    &__hidden
      visibility: hidden
      margin: 0 10px 0 auto
</style>