<script>
    import TopBar from "$components/TopBar.svelte";
    import IO from "$components/IO.svelte";
    import AddImage from "$components/AddImage.svelte";
    import ButtonLarge from "$components/btn/ButtonLarge.svelte";
    import Header from "$components/Header.svelte";
    import axios from 'axios';
    import { user } from "$stores/user.js";

    let contactName = "";
    let relationship = "";
    let contactId = "";
    let contactPhoto = "";

    async function handleAdd() {
        let userEmail;

        user.subscribe(value => {
            userEmail = value.email;
        })();

        if (userEmail) {
            const payload = {
                userEmail,
                contactName,
                relationship,
                contactId,
                contactPhoto
            };

            console.log(payload);

            try {
                const response = await axios.post('http://localhost:5000/contacts/add', payload);

                if (response.status === 201) {
                    alert('Contact added successfully');
                    window.location.href = '/contacts';
                }
            } catch (err) {
                console.error('Error adding contact:', err);
                alert('Failed to add contact');
            }
        } else {
            alert('User email is missing.');
        }
    }

    function handleImageUpload(imageUrl) {
        contactPhoto = imageUrl;
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
        <div class="add__io add__io-2">
            <IO io="enterContactId" ioLabel="Contact Id (optional)" bind:ioValue={contactId} />
        </div>
        <div class="add__image">
            <AddImage onUploadComplete={handleImageUpload} />
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
    margin: 0
    &__io
      margin: 0 auto
      &-2
        margin: 48px auto
    &__button
      display: flex
      justify-content: center
</style>
