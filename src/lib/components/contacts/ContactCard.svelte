<script>
    export let contactCardImage;
    export let contactCardName;
</script>

<div class="contact-card">
    {#if contactCardImage}
        <img src={contactCardImage} alt="" class="contact-card__img">
    {:else}
        <div class="contact-card__default-image"></div>
    {/if}
    <p class="contact-card__name">{contactCardName}</p>
</div>

<style lang="sass">
  .contact-card
    display: flex
    flex-direction: row
    align-items: center
    &__img
      width: 48px
      height: 48px
      border-radius: 50%
      margin-right: 24px
    &__name
      font-size: 20px
    &__default-image
      width: 48px
      height: 48px
      border-radius: 50%
      background-color: #D9D9D9
      margin-right: 24px
</style>