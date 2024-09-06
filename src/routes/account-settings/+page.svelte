<script>
    import ButtonMedium from "$lib/components/btn/ButtonMedium.svelte";

    export let accountSettingsName;

    function changeName() {
        alert("This function is not available yet. (Change Name)");
    }

    function changePassword() {
        alert("This function is not available yet. (Change Password)");
    }
</script>

<div class="account-settings">
    <img src="" alt="" class="account-settings__img">
    <p class="account-settings__name">{accountSettingsName}</p>
    <div class="account-settings__buttons">
        <button class="account-settings__buttons--btn">
            <ButtonMedium btnText="Change Your Name" on:click={changeName} />
        </button>
        <button class="account-settings__buttons--btn">
            <ButtonMedium btnText="Change Your Password" on:click={changePassword} />
        </button>
    </div>
</div>

<style lang="sass">
  .account-settings
    display: flex
    flex-direction: column
    align-items: center
    margin-top: 32px
    &__img
      width: 128px
      height: 128px
      border-radius: 50%
      background-color: #D9D9D9
      margin-bottom: 32px
    &__name
      font-size: 20px
      margin-bottom: 32px
    &__buttons
      display: flex
      flex-direction: row
      &--btn:first-of-type
        margin-right: 16px
</style>