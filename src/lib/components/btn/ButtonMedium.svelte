<script>
    export let btnLink;
    export let btnText;
</script>

<button class="btn">
    <a href={btnLink} class="btn__text">{btnText}</a>
</button>

<style lang="sass">
  .btn
    border: none
    box-shadow: 1px 1px 1px #ccc
    border-radius: 9px
    height: 48px
    width: 96px
    display: inline-block
    text-align: center
    text-decoration: none
    font-size: 16px
    font-weight: 600
    transition: all 0.1s
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