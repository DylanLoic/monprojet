<template>
    <v-btn
        :block="block"
        :outline="outline"
        :dark="dark"
        :color="color"
        @click="routeTo()">
    <slot></slot>
    </v-btn>
</template>

<script>
export default {
    props: {
        block: {
            type: Boolean,
            default: false
        },
        outline: {
            type: Boolean,
            default: false
        },
        dark: {
            type: Boolean,
            default: false
        },
        color: {
            type: String,
            default: 'indigo'
        },
        to: {
            type: String,
            required: true
        }
    },
    methods: {
        routeTo () {
            this.$router.push({ name: this.to });
        }
    }
};
</script>