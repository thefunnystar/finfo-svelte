<script>
    export let contactInfoImage;
    export let contactInfoName;
    export let contactInfoID;
    export let contactInfoRelationship;
</script>

<div class="contact-info">
    <img src={contactInfoImage} alt="" class="contact-info__img">
    <p class="contact-info__name">{contactInfoName}</p>
    <p class="contact-info__id">{contactInfoID}</p>
    <p class="contact-info__relationship">{contactInfoRelationship}</p>
</div>

<style lang="sass">
  .contact-info
    display: flex
    align-items: center
    flex-direction: column
    .contact-info__img
      width: 128px
      height: 128px
      border-radius: 50%
      margin: 32px auto
    .contact-info__name
      font-size: 20px
    .contact-info__id
      margin-top: 8px
      font-size: 14px
    .contact-info__relationship
      margin-top: 8px
      font-size: 14px
</style>