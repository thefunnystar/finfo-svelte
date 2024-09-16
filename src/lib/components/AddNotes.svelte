<script>
    export let io;
    export let ioLabel;
    export let ioValue;
</script>

<div class="io">
    <label for={io} class="io__label">{ioLabel}</label>
    <textarea
            id={io}
            name={io}
            class="io__input"
            bind:value={ioValue}
    />
</div>

<style lang="sass">
  .io
    width: 296px
    height: 296px
    &__label
      font-size: 20px
    &__input
      margin-top: 16px
      width: 100%
      height: 100%
      padding: 8px
      font-size: 16px
      border: 1px solid #ccc
      border-radius: 4px
      box-sizing: border-box
      &:focus
        outline: none
        border-color: #333
        box-shadow: 0 0 0 1px #333
</style>
