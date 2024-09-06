<div class="saved-photos">
    <p class="saved-photos__title">Saved Photos</p>
    <div class="saved-photos__images">
        <img src={savedPhotosImage0} alt="" class="saved-photos__images--img">
        <img src={savedPhotosImage1} alt="" class="saved-photos__images--img">
        <img src={savedPhotosImage2} alt="" class="saved-photos__images--img">
    </div>
</div>

<style lang="sass">
  .saved-photos
    margin: 0 auto
    &__title
      font-size: 16px
      margin-bottom: 16px
    &__images
      display: flex
      justify-content: space-between
      &--img
        width: 88px
        height: 88px
        object-fit: cover
        border-radius: 5px
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1)
</style>