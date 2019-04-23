<template>
    <div class="profile">
        <img src="../../images/link.jpg" alt="">
        <h1>Link's Journal: {{ this.test }}</h1>
        <counter></counter>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                test: 'TEST FOLDER! JDM!!!'
            }
        }
    }
</script>

<style>

</style>
