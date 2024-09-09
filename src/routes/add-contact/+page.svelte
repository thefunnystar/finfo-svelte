<script>
    import TopBar from "$components/TopBar.svelte";
    import IO from "$components/IO.svelte";
    import ButtonLarge from "$components/btn/ButtonLarge.svelte";
    import Header from "$components/Header.svelte";
    import axios from 'axios';
    import { user } from "$stores/user.js"; // Assume user store contains the logged-in user's details

    let contactName = "";
    let relationship = "";

    async function handleAdd() {
        let userEmail;

        // Get the email from the user store
        user.subscribe(value => {
            userEmail = value.email; // Get the user's email from the store
        })();

        if (userEmail) {
            const payload = {
                userEmail,  // Include the email in the payload instead of userId
                contactName, // Assuming contactName is defined elsewhere
                relationship // Assuming relationship is defined elsewhere
            };

            console.log(payload);  // Check if userEmail is properly fetched

            try {
                const response = await axios.post('http://localhost:5000/contacts/add', payload);

                if (response.status === 201) {
                    alert('Contact added successfully');
                    window.location.href = '/contacts';  // Redirect or refresh the page
                }
            } catch (err) {
                console.error('Error adding contact:', err);
                alert('Failed to add contact');
            }
        } else {
            alert('User email is missing.');
        }
    }


</script>

<div class="add-container">
    <TopBar />
    <Header headerText="Add Contact" />
    <div class="add">
        <div class="add__io add__io-2">
            <IO io="enterContactName" ioLabel="Contact Name" bind:ioValue={contactName} />
        </div>
        <div class="add__io">
            <IO io="enterRelationship" ioLabel="Relationship" bind:ioValue={relationship} />
        </div>
    </div>
    <div class="add__button" on:click={handleAdd}>
        <ButtonLarge btnText="Add" />
    </div>
</div>


<style lang="sass">
  .add
    display: flex
    flex-direction: column
    margin: 64px 0
    &__io
      margin: 0 auto
      &-2
        margin: 48px auto
    &__button
      display: flex
      justify-content: center
</style>
