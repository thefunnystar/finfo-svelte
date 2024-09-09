<script>
    import ContactCard from "$components/contacts/ContactCard.svelte";
    import { writable } from "svelte/store";
    import axios from "axios";
    import { onMount } from "svelte";
    import { user } from "$stores/user.js";
    import Header from "$components/Header.svelte";
    import Footer from "$components/Footer.svelte";
    import ButtonRound from "$components/btn/ButtonRound.svelte";

    const contacts = writable([]);

    // Fetch contacts on mount
    onMount(() => {
        if (!$user.isLoggedIn) {
            window.location.href = '/logged-out';
        } else {
            fetchContacts();
        }
    });

    // Function to fetch contacts based on user email
    async function fetchContacts() {
        let userEmail;

        user.subscribe(value => {
            userEmail = value.email;  // Get the user's email from the store
        })();

        if (userEmail) {
            try {
                // Fetch contacts by email
                const response = await axios.get(`http://localhost:5000/contacts/${userEmail}`);
                contacts.set(response.data);
                console.log('Contacts fetched:', response.data);
            } catch (err) {
                console.error('Error fetching contacts:', err);
            }
        } else {
            console.error('User email is missing.');
        }
    }

    // Redirect to add contact page
    function handleAdd() {
        window.location.href = '/add-contact';
    }
</script>

<div class="contacts-container">
    <Header headerText="Contacts" />
    <div class="contacts">
        {#each $contacts as contact}
            <a href={`/contacts/${contact.id}`} class="contacts__contact">
                <ContactCard contactCardImage={contact.contactPhoto || ''} contactCardName={contact.contactName} />
            </a>
        {/each}
    </div>
    <div class="contacts-add"></div>
    <div class="contacts-footer">
        <div class="contacts-footer__button-container">
            <div on:click={handleAdd}>
                <ButtonRound buttonIcon="+" />
            </div>
        </div>
        <Footer />
    </div>
</div>

<style lang="sass">
  .contacts-container
    height: 800px
    display: flex
    flex-direction: column
  .contacts-footer
    margin-top: auto
    &__button-container
      display: flex
      flex-direction: row
      justify-content: end
      margin-right: 16px
      align-items: center
      height: 96px
  .contacts
    margin-left: 24px
    margin-top: 32px
    display: flex
    flex-direction: column
    &__contact
      margin-bottom: 24px
      text-decoration: none
      color: black
</style>