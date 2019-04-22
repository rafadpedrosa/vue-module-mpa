<template>
    <div>
        <p>Counter: {{ this.counter }}</p>
        <input type="button" value="add" @click="add">
        <input type="button" value="remove" @click="remove">
    </div>
</template>

<script>
    export default {
        name: "counter",
        data() {
            return {
                counter: 0
            }
        },
        methods: {
            add() {
                this.counter++
            },
            remove() {
                if (this.counter > 0)
                    this.counter--
                else
                    alert("you can't remove to negative")

            }
        }

    }
</script>

<style scoped>

</style>