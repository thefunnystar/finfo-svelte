<script>
    import { user, logoutUser } from "$stores/user.js";
    import ButtonMedium from "$components/btn/ButtonMedium.svelte";
    import { onMount } from "svelte";
    import Footer from "$components/Footer.svelte";
    import axios from "axios";
    import ButtonLarge from "$components/btn/ButtonLarge.svelte";

    let accountSettingsName = '';
    let profilePhoto = '';

    onMount(() => {
        if (!$user.isLoggedIn) {
            window.location.href = '/logged-out';
        }

        const unsubscribe = user.subscribe(value => {
            accountSettingsName = value.name || 'Unknown User';
        });

        return () => unsubscribe();
    });

    async function changeName() {
        let email;
        user.subscribe(value => {
            email = value.email || '';
        })();

        const newName = prompt("Enter your new name:", accountSettingsName);
        if (newName && newName !== accountSettingsName) {
            try {
                const response = await axios.put("http://localhost:5000/users/updateName", { email, newName });
                if (response.status === 200) {
                    user.update((currentUser) => {
                        currentUser.name = newName;
                        localStorage.setItem("user", JSON.stringify(currentUser));
                        return currentUser;
                    });
                    alert("Name changed successfully!");
                } else {
                    alert("Failed to update name.");
                }
            } catch (error) {
                console.error("Error updating name:", error);
                alert("An error occurred while updating your name.");
            }
        } else {
            alert("Name not changed.");
        }
    }

    async function changePassword() {
        let email;
        user.subscribe(value => {
            email = value.email || '';
        })();

        const newPassword = prompt("Enter your new password:");
        if (newPassword) {
            try {
                const response = await axios.put("http://localhost:5000/users/updatePassword", { email, newPassword });
                if (response.status === 200) {
                    alert("Password changed successfully!");
                } else {
                    alert("Failed to update password.");
                }
            } catch (error) {
                console.error("Error updating password:", error);
                alert("An error occurred while updating your password.");
            }
        } else {
            alert("Password not changed.");
        }
    }

    function changePhoto() {
        alert("This function is not available yet. (Change Photo)");
    }

    function handleLogout() {
        logoutUser();
        window.location.href = '/logged-out';
    }
</script>

<div class="account-settings-container">
    <div class="account-settings">
        {#if profilePhoto}
            <img src={profilePhoto} alt="" class="account-settings__img">
        {:else}
            <div class="account-settings__default-image"></div>
        {/if}
        <p class="account-settings__name">{accountSettingsName}</p>
        <p class="account-settings__add-photo" on:click={changePhoto}>add/change photo</p>
        <div class="account-settings__buttons">
            <div class="account-settings__buttons--btn" on:click={changeName}>
                <ButtonMedium btnText="Change Your Name" />
            </div>
            <div class="account-settings__buttons--btn" on:click={changePassword}>
                <ButtonMedium btnText="Update Password" />
            </div>
        </div>
        <div class="account-settings__logout" on:click={handleLogout}>
            <ButtonLarge btnText="Logout" />
        </div>
    </div>
    <div class="account-settings-footer">
        <Footer />
    </div>
</div>

<style lang="sass">
  .account-settings-container
    height: 800px
    display: flex
    flex-direction: column
  .account-settings
    display: flex
    flex-direction: column
    align-items: center
    margin-top: 32px
    &__img
      width: 128px
      height: 128px
      border-radius: 50%
      object-fit: cover
      background-color: #D9D9D9
      margin-bottom: 16px
    &__default-image
      width: 128px
      height: 128px
      border-radius: 50%
      background-color: #D9D9D9
      margin-bottom: 16px
    &__add-photo
      cursor: pointer
      font-size: 16px
      margin-bottom: 32px
    &__name
      font-size: 20px
      margin-bottom: 32px
    &__buttons
      display: flex
      flex-direction: row
      margin-bottom: 32px
      &--btn:first-of-type
        margin-right: 16px
  .account-settings-footer
    margin-top: auto
</style>