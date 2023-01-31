<template>
        <div align="center" justify="center" >
            <v-row>
                <v-col cols="12" md="4">
                    <div  class="rounded-lg white" >
                        <v-list-item link two-line>
                            <v-list-item-avatar class="text-center">
                                <v-icon large right>mdi-google-street-view</v-icon>
                            </v-list-item-avatar>
                            <v-list-item-content class="text-center">
                                <v-list-item-title class="text-start">Worker</v-list-item-title>
                                <v-list-item-subtitle class="text-start">Information about Worker</v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                    </div>
                </v-col>
                <v-col cols="12" md="4">
                    <div  class="rounded-lg white" >
                        <v-list-item link two-line @click="navgateToJob">    
                            <v-list-item-avatar class="text-end">
                                <v-icon large right>mdi-briefcase</v-icon>
                            </v-list-item-avatar>
                            <v-list-item-content >
                                <v-list-item-title class="">Job</v-list-item-title>
                                <v-list-item-subtitle class="">Define worker in Job</v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                    </div>
                </v-col>
                <v-col cols="12" md="4">
                    <div  class="rounded-lg white" >
                        <v-list-item link two-line :disabled="true">
                            <v-list-item-avatar class="text-center">
                                <v-icon large right>mdi-account-multiple-plus-outline</v-icon>
                            </v-list-item-avatar>
                            <v-list-item-content class="text-center">
                                <v-list-item-title class="text-start">Assgient Worker To Job
                                </v-list-item-title>
                                <v-list-item-subtitle class="text-start">Add Worker</v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                    </div>
                </v-col>
                
            </v-row>
            <v-row >
                    <v-col cols="12" md="4">
                        <v-text-field 
                            outlined
                            label="Job"
                            hide-details="auto"
                        ></v-text-field>
                    </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" md="4">
                    <v-autocomplete
                        outlined
                        label="worker"

                    ></v-autocomplete>
                </v-col>
            </v-row>
            
            <v-row>
                <v-col cols="12" md="4" >
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
                <v-col>
                    <StreamBarcodeReader
                        @decode="onDecode"
                        @loaded="onLoaded"
                    ></StreamBarcodeReader>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" md="4" >
                    <v-card>
                        <v-card-title class="secondary white--text justify-center display-2 font-weight-light ">
                            {{this.d}}
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
import { StreamBarcodeReader } from "vue-barcode-reader";
export default {
    components:{
        StreamBarcodeReader
    },
    data() {
        return {
            timer: "00:00:00:00",
            currentTimer: 0,
           
        }
    },
    methods: {
        start() {
            this.tick();
        },
        tick() {
            this.ticker = setInterval(() => {
                this.currentTimer++;
                this.timer = this.formatTime(this.currentTimer);
            }, 1000 )
        },
        formatTime(seconds) {
            console.log(seconds)
            let measuredTime = new Date(null);
            measuredTime.setSeconds(seconds);
            // let MMSTime = measuredTime.toISOString().substr(11, 8);
            // return MMSTime;
        },
        onDecode(text) {
            console.log(`Decode text from QR code is ${text}`)
        },onLoaded() {
        console.log(`Ready to start scanning barcodes`)
        },
        navgateToJob() {
            this.$router.push({name: "Job"})
        }
    }
}
</script>

<style>

</style>