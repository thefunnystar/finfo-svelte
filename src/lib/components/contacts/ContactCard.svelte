<script>
    export let contactCardImage;
    export let contactCardName;
</script>

<div class="contact-card">
    <img src={contactCardImage} alt="" class="contact-card__img">
    <p class="contact-card__name">{contactCardName}</p>
</div>

<style lang="sass">
  .contact-card
    display: flex
    flex-direction: column
    align-items: center
    .contact-card__img
      width: 48px
      height: 48px
      border-radius: 50%
      margin-right: 24px
    .contact-card__name
      font-size: 20px
</style>