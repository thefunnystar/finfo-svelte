<script>
    import { user, logoutUser } from "$stores/user.js";
    import ButtonMedium from "$components/btn/ButtonMedium.svelte";
    import { onMount } from "svelte";
    import Footer from "$components/Footer.svelte";
    import axios from "axios";
    import ButtonLarge from "$components/btn/ButtonLarge.svelte";

    let accountSettingsName = '';

    onMount(() => {
        if (!$user.isLoggedIn) {
            window.location.href = '/logged-out';
        }

        const unsubscribe = user.subscribe(value => {
            accountSettingsName = value.name || 'Unknown User'; // Default if name is missing
        });

        return () => unsubscribe(); // Cleanup on destroy
    });

    async function changeName() {
        let email;
        user.subscribe(value => {
            email = value.email || ''; // Get email from user object in the store
        })();

        const newName = prompt("Enter your new name:", accountSettingsName);
        if (newName && newName !== accountSettingsName) {
            try {
                // Send request to backend to update the name
                const response = await axios.put("http://localhost:5000/users/updateName", { email, newName });
                if (response.status === 200) {
                    // Update name in local storage only after the backend confirms success
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

    //logout and then try 'pass'
    async function changePassword() {
        let email;
        user.subscribe(value => {
            email = value.email || ''; // Get email from user object in the store
        })();

        const newPassword = prompt("Enter your new password:");
        if (newPassword) {
            try {
                // Send email and newPassword to the backend
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
        <img src="" alt="" class="account-settings__img">
        <p class="account-settings__add-photo" on:click={changePhoto}>add/change photo</p>
        <p class="account-settings__name">{accountSettingsName}</p>
        <div class="account-settings__buttons">
            <!-- Correctly bind the click event to the button element -->
            <button class="account-settings__buttons--btn" on:click={changeName}>
                <ButtonMedium btnText="Change Your Name" />
            </button>
            <button class="account-settings__buttons--btn" on:click={changePassword}>
                <ButtonMedium btnText="Change Your Password" />
            </button>
        </div>
        <button class="account-settings__logout" on:click={handleLogout}>
            <ButtonLarge btnText="Logout" />
        </button>
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
      background-color: #D9D9D9
      margin-bottom: 16px
    &__add-photo
      font-size: 12px
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