<script>
    export let contactInfoImage;
    export let contactInfoName;
    export let contactInfoID;
    export let contactInfoRelationship;
</script>

<div class="contact-info">
    {#if contactInfoImage}
        <img src={contactInfoImage} alt="" class="contact-info__img">
    {:else}
        <div class="contact-info__default-image"></div>
    {/if}
    <p class="contact-info__name">{contactInfoName}</p>
    <p class="contact-info__id">ID: {contactInfoID}</p>
    <p class="contact-info__relationship">{contactInfoRelationship}</p>
</div>

<style lang="sass">
  .contact-info
    display: flex
    align-items: center
    flex-direction: column
    &__img
      width: 128px
      height: 128px
      border-radius: 50%
      margin: 32px auto
    &__default-image
        width: 128px
        height: 128px
        border-radius: 50%
        margin: 32px auto
        background-color: #D9D9D9
    &__name
      font-size: 20px
    &__id
      margin-top: 8px
      font-size: 14px
    &__relationship
      margin-top: 8px
      font-size: 14px
</style>