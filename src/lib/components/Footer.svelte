<script>
    import { onMount } from 'svelte';

    let activePage = '';

    onMount(() => {
        activePage = window.location.pathname.split('/')[1];
    });
</script>

<div class="footer">
    <div class="footer__text">
        <a href="/contacts" class="{activePage === 'contacts' ? 'footer__text--link active' : 'footer__text--link'}">Contacts</a>
        <p class="footer__text-separator"> | </p>
        <a href="/account-settings" class="{activePage === 'account-settings' ? 'footer__text--link active' : 'footer__text--link'}">Account Settings</a>
    </div>
</div>

<style lang="sass">
  .active
    font-weight: bold
  .footer
    background-color: #D9D9D9
    width: 100%
    height: 32px
    display: flex
    flex-direction: row
    justify-content: center
    align-items: center
    .footer__text
      font-size: 16px
      display: flex
      flex-direction: row
      &--link
        color: black
        text-decoration: none
        padding: 0 10px
      &--separator
        margin: 0 10px
</style>