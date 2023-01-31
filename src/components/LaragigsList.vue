<template>
    <v-sheet>
        <LaragigsListCard class="ma-2" v-for="(list, index) in list" :key="index" :item="list" @felterByTag="handlefelterByTag" ></LaragigsListCard>

    </v-sheet>
</template>

<script>
import LaragigsListCard from "./LaragigsListCard.vue"
export default {
    name: "LaragigsList",
    props: {
        list :Array
    },
    components: {
        LaragigsListCard
    },
    methods: {
        handlefelterByTag(tag) {
            this.$emit("felterByTag", tag)
        }
    }
    // computed: {
    //     exsitList() {
    //         return !!this.list.length
    //     }
    }
</script>

<style>

</style>