<script>
    export let savedPhotosImage0 = '';
    export let savedPhotosImage1 = '';
    export let savedPhotosImage2 = '';
</script>

<div class="saved-photos">
    <p class="saved-photos__title">Saved Photos</p>
    <div class="saved-photos__images">
        {#if savedPhotosImage0}
            <img src={savedPhotosImage0} alt="" class="saved-photos__images--img">
        {:else}
            <div class="saved-photos__images--default-image">
                <p class="plus">+</p>
            </div>
        {/if}
        {#if savedPhotosImage1}
            <img src={savedPhotosImage1} alt="" class="saved-photos__images--img">
        {:else}
            <div class="saved-photos__images--default-image">
                <p class="plus">+</p>
            </div>
        {/if}
        {#if savedPhotosImage2}
            <img src={savedPhotosImage2} alt="" class="saved-photos__images--img">
        {:else}
            <div class="saved-photos__images--default-image">
                <p class="plus">+</p>
            </div>
        {/if}
    </div>
</div>

<style lang="sass">
  .plus
    margin: auto
    font-size: 48px

  .saved-photos
    margin: 0 auto
    width: 312px
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
      &--default-image
        width: 88px
        height: 88px
        background-color: #D9D9D9
        border-radius: 5px
        display: flex
        cursor: pointer
</style>