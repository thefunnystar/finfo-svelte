<script>
    export let onUploadComplete;
    let file;
    let imageUrl;

    async function handleFileChange(event) {
        file = event.target.files[0];
        if (!file) return;

        try {
            const response = await fetch("http://localhost:5000/s3Url");
            const result = await response.json();
            console.log('Response:', result);

            if (result.url) {
                const url = result.url;
                console.log(url);

                const uploadResponse = await fetch(url, {
                    method: "PUT",
                    headers: {
                        "Content-Type": file.type,
                    },
                    body: file,
                });

                if (uploadResponse.ok) {
                    imageUrl = url.split('?')[0];
                    console.log(imageUrl);

                    if (onUploadComplete) {
                        onUploadComplete(imageUrl);
                    }
                } else {
                    console.error("Failed to upload image.");
                }
            } else {
                console.error("Failed to retrieve S3 URL.");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    }
</script>

<form class="add-image">
    <p class="add-image__title">Upload Contact Image</p>
    <input class="add-image__input" type="file" accept="image/*" on:change={handleFileChange} />
    {#if imageUrl}
        <img class="add-image__img" src={imageUrl} alt="Uploaded Image">
    {/if}
</form>

<style lang="sass">
  form
    display: flex
    flex-direction: column
    width: 264px
    margin: auto
    margin-bottom: 48px

  .add-image
    &__title
      font-size: 20px
      margin-bottom: 16px
    &__img
      width: 75px
      height: 50px
</style>
