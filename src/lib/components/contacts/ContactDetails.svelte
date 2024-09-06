<script>
    import { page } from '$app/stores';
    import {writable} from "svelte/store";
    import {onMount} from "svelte";
    import axios from "axios";

    const contactId = $page.params.contactId;

    async function fetchContactDetails() {
        try {
            const response = await axios.get(`/api/contacts/${contactId}`);
            contactDetails.set(response.data);
        } catch (err) {
            console.error("Error fetching contact details:", err);
        }
    }

    const contactDetails = writable();

    //not sure if this is the correct way to write onMount function
    onMount(fetchContactDetails);
</script>

<div class="contact-details">
    {#if $contactDetails}
        <img src={contactDetails.contactImage} alt="" class="contact-details__image">
        <p class="contact-details__name">{contactDetails.contactName}</p>
    {/if}
</div>
#incorrect, create the final page instead