<template>
    <v-sheet outlined class="pa-5" >
        
        <v-row v-if="item">
            <v-col md="2">
                <v-img
                    width="200"
                    src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
                >
                </v-img>
            </v-col>
            <v-col>
                <v-row>
                    <v-col>
                        <p class="text-h5" v-ripple @click="openDetails">{{obj.title}}</p>
                        <p>{{obj.company}}</p>    
                    </v-col>
                </v-row>
                <v-row>
                    <v-col v-if="obj" >
                        <v-chip dark class="mr-1" v-for="(tag, key) in tags" :key="key" @click="filterByTag(tag)">
                            {{tag}}
                        </v-chip >
                    </v-col>
                </v-row>
                <v-row >
                    <v-col>
                        <v-btn
                            plain
                            :ripple="false"
                            depressed
                            right
                        >
                            <v-icon>
                                mdi-map-marker
                            </v-icon>
                            {{obj.location}}
                        </v-btn>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
       
    </v-sheet>
</template>

<script>
export default {
    name: "LaragigsListCard",
    props: {
        item: Object
    },
    data() {
        return {
            obj: {}
        }
    },
    methods: {
        openDetails() {
            console.log("hi")
        },
        filterByTag(tag) {
            this.$emit("felterByTag", tag)
        },
    },
    computed: {
        tags(){
            console.log(this.obj)
            return this.obj.tags.split(",")
        }
    },
    mounted() {
        if(this.item) {
            this.obj = {...this.item}
        }
    }
}
</script>

<style>

</style>