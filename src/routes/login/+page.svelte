<script>
    import Header from "$components/Header.svelte";
    import IO from "$components/IO.svelte";
    import ButtonLarge from "$components/btn/ButtonLarge.svelte";
    import axios from 'axios';
    import TopBar from "$components/TopBar.svelte";
    import { onMount } from 'svelte';
    import { user, loginUser } from '$stores/user';

    let email = '';
    let password = '';

    onMount(() => {
        if ($user.isLoggedIn) {
            window.location.href = '/contacts';
        }
    });

    async function handleLogin() {
        if (email && password) {
            try {
                const res = await axios.post('http://localhost:5000/users/login', {
                    email,
                    password
                });

                if (res.status === 200) {
                    alert('Login successful!');
                    loginUser({ email, name: res.data.name });
                    window.location.href = '/contacts';
                } else {
                    alert('Invalid credentials.');
                }
            } catch (err) {
                console.error('Error:', err);
                alert('Login failed.');
            }
        } else {
            alert('Please enter both email and password.');
        }
    }
</script>

<div class="login-container">
    <TopBar />
    <Header headerText="Login" />
    <div class="login">
        <div class="login__io">
            <IO io="enterEmail" ioLabel="Email" bind:ioValue={email} />
        </div>
        <div class="login__io login__io-2">
            <IO io="enterPassword" ioLabel="Password" bind:ioValue={password} />
        </div>
    </div>
    <div class="login__button">
        <ButtonLarge btnText="Login" onClick={handleLogin} />
    </div>
</div>


<style lang="sass">
  .login
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
