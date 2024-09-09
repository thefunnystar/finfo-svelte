<script>
    import ButtonMedium from "$components/btn/ButtonMedium.svelte";
    import { onMount } from 'svelte';
    import { user } from '$stores/user';

    onMount(() => {
        if ($user.isLoggedIn) {
            window.location.href = '/contacts';
        }
    });
</script>

<div class="logged-out">
    <p class="logged-out__title">Finfo</p>
    <div class="logged-out__buttons">
        <div class="logged-out__buttons--btn">
            <ButtonMedium btnLink="/signup" btnText="Sign Up" />
        </div>
        <div class="logged-out__buttons--btn">
            <ButtonMedium btnLink="/login" btnText="Login" />
        </div>
    </div>
</div>

<style lang="sass">
  .logged-out
    display: flex
    flex-direction: column
    align-items: center
    justify-content: center
    margin-top: 75%
    .logged-out__title
      font-size: 48px
      margin-bottom: 64px
    .logged-out__buttons
      display: flex
      flex-direction: row
      .logged-out__buttons--btn:first-child
        margin-right: 32px
</style>