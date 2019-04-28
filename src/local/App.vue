<template>
    <div class="jdm-module">
        <active-job-description-page></active-job-description-page>
    </div>
</template>

<script>
    import ActiveJobs from '../modules/jdm/page/ActiveJobs.vue'

    export default {
        name: 'main-content',
        components: {
            ActiveJobs
        },
        data() {
            return {}
        }
    }
</script>

<style lang="scss">
</style>
