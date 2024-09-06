<script>
    export let btnText;
    export let onClick;
</script>

<button class="btn" on:click={onClick}>
    {btnText}
</button>

<style lang="sass">
  .btn
    background-color: blue
    border: 1px solid deepskyblue
    border-radius: 5px
    width: 154px
    height: 57px
    display: inline-block
    text-align: center
    text-decoration: none
    color: white
    font-size: 16px
    font-weight: 600
    transition: all 0.3s
    &:hover
      background-color: black
      color: white
      border-color: black
      cursor: pointer
    &__text
      text-decoration: none
      color: inherit
      font-size: inherit
      font-weight: inherit
      transition: inherit
</style>