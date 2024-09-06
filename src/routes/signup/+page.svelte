<script>
    import Header from "$components/Header.svelte";
    import IO from "$components/IO.svelte";
    import ButtonLarge from "$components/btn/ButtonLarge.svelte";
    import axios from 'axios';

    let name = '';
    let password = '';
    let email = '';

    async function handleSignUp() {
        if (name && password && email) {
            try {
                const res = await axios.post('http://localhost:5000/users/register', {
                    name,
                    password,
                    email
                });

                if (res.status === 201) {
                    alert('Sign Up successful!');
                } else {
                    alert('Potential error during Sign Up.');
                }
            } catch (err) {
                console.error('Error:', err);
                alert('Sign Up failed.');
            }
        } else {
            alert('Please fill out all fields.');
        }
    }
</script>

<div class="signup-container">
    <Header headerText="Sign Up" />
    <div class="signup">
        <div class="signup__io">
            <IO io="createName" ioLabel="First &amp; Last Name" bind:ioValue={name} />
        </div>
        <div class="signup__io signup__io-2">
            <IO io="createPassword" ioLabel="Create Password" bind:ioValue={password} />
        </div>
        <div class="signup__io">
            <IO io="enterYourEmail" ioLabel="Enter Your Email" bind:ioValue={email} />
        </div>
    </div>
    <div class="signup__button">
        <ButtonLarge btnText="Sign Up" onClick={handleSignUp} />
    </div>
</div>

<style lang="sass">
  .signup
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
