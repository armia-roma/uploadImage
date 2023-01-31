<template>
    <div>
        <v-row>
            <v-col>
                <h4 class="text-h4 brown--text  ">Job Details</h4>
            </v-col>
        </v-row>      
        <v-row>
            <v-col cols="11" md="4" >
               <v-text-field 
                dense 
                outlined
                    hide-details="auto"
                ></v-text-field> 
            </v-col>
            <v-col cols>
                <v-btn icon>
                    <v-icon >
                        mdi-location-enter
                    </v-icon>
                </v-btn>
            </v-col>
        </v-row>  
        <v-row>
            <v-col>
                <v-simple-table>
                    <thead>
                        <tr>
                            <th>job</th>
                            <td>70451</td>

                        </tr>
                        <tr>
                            <th>Duration</th>
                            <td>7 houres</td>       
                        </tr>
                    </thead>
                </v-simple-table>
            </v-col>
        </v-row>
        <v-row>
                <v-col cols="12" md="4" >
                    <v-card>
                        <v-card-title class="secondary white--text justify-center display-2 font-weight-light text-center ">
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
        <v-row>
            <v-col>
                <v-simple-table>
                    <thead>
                        <tr>
                            <th>
                                <v-btn icon @click="handleAddWorker">
                                    <v-icon>mdi-account-plus</v-icon>
                                </v-btn>
                            </th>
                        </tr>
                        <tr>
                            <th>Worker</th>
                            <th>Join At</th>
                            <th>Stop Duration</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Abo Homad</td>
                            <td>12:52:14</td>
                            <td>00:20:02</td>
                        </tr>
                    </tbody>
                </v-simple-table>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    data() {
        return {
            d: "00:00:00:00"
        }
    },
    methods: {
        handleAddWorker() {
            this.$router.push({name: "Worker"})
        }
    }
}
</script>

<style>

</style>