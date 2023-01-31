<template>
    <div>
        <v-row justify="center">
            <v-col cols="12" md="2">
                <v-img 
                    width="200"
                    src="./../../public/qrcode.png">

                </v-img>
            </v-col>
        </v-row>
        <v-row justify="center">
            <v-col cols="12" md="4">
                <div  class="rounded-lg green" >
                    <v-list-item link two-line>
                        <v-list-item-avatar class="text-center">
                            <v-icon large right>mdi-account-hard-hat-outline</v-icon>
                        </v-list-item-avatar>
                        <v-list-item-content class="text-center">
                            <v-list-item-title class="text-start">Check In</v-list-item-title>
                            <v-list-item-subtitle class="text-start">Start, Continue Work</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </div>
            </v-col>
            <v-col cols="12" md="4">
                <div  class="rounded-lg orange" >
                    <v-list-item link two-line>
                        <v-list-item-avatar class="text-center">
                            <v-icon large right>mdi-bed</v-icon>
                        </v-list-item-avatar>
                        <v-list-item-content class="text-center">
                            <v-list-item-title class="text-start">Check Out</v-list-item-title>
                            <v-list-item-subtitle class="text-start">Stop Work</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </div>
            </v-col>
        </v-row>
        <v-row justify="center">
            <v-col cols="12" md="8" >
                <v-card>
                    <v-card-title class="secondary white--text justify-center display-2 font-weight-light ">
                        {{timer}}
                    </v-card-title>
                    <v-card-text>
                        <div class="mt-2">
                            <v-btn block @click="start">start</v-btn>
                        </div>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    data() {
        return {
            timer: "00:00:00:00",
            send: {
                job: null,
                worker: null,
                startAt : null
            }
        }
    },
    methods: {
        start() {
            // let now = new Date()
        }
    },
    mounted() {
        this.time = new Date()
    }
}
</script>

<style>

</style>