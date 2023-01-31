<template>
    <v-row >
        <v-col>
        <v-row 
            align="center"
                justify="center"
                no-gutters
                style="height: 100px;">
            <v-col md="6" >
                <template>
                    <v-stepper v-model="el" >
                        <v-stepper-header>
                            <v-stepper-step
                                :complete="e1 > 1"
                                step="1"
                                @click="el=1"
                            >
                               Vehicle
                            </v-stepper-step>

                            <v-divider></v-divider>

                            <v-stepper-step
                                :complete="el > 2"
                                step="2"
                                @click="el=2"
                            >
                                Customer
                            </v-stepper-step>

                            <v-divider></v-divider>

                            <v-stepper-step step="3" @click="el=3">
                                Battery
                            </v-stepper-step>
                        </v-stepper-header>

                        <v-stepper-items>
                        <v-stepper-content step="1">
                            <v-row align="center" justify="center" class="pa-1">
                                <v-col align-self="center">
                                    <v-row  align="center" justify="center">
                                        <v-col md="6">
                                            <v-text-field
                                                    label="Plate Number"
                                                    dense
                                                    hide-details="auto"
                                                    outlined
                                                >

                                            </v-text-field>
                                        </v-col>
                                    </v-row>
                                     <v-row align="center" justify="center">
                                        <v-col md="6">
                                            <v-autocomplete
                                                outlined
                                                label="Manufacturer"
                                                dense
                                                hide-details="auto"
                                                :items="models"
                                                item-value="id"
                                                item-text="name"
                                                
                                                >
                                                <template v-slot:[`no-data`]>
                                                    <v-list-item link >
                                                        <v-icon left>mdi-plus-circle</v-icon>
                                                        <span>sadas</span>
                                                    </v-list-item>
                                                </template>
                                            </v-autocomplete>    
                                        </v-col>
                                    </v-row>                  
                                    <v-row align="center" justify="center">
                                        <v-col md="6">
                                            <v-autocomplete
                                                outlined
                                                label="Model"
                                                dense
                                                hide-details="auto"
                                                :items="cars"
                                                item-value="id"
                                                item-text="name"
                                                
                                                >
                                                <template v-slot:[`no-data`]>
                                                    <v-list-item link >
                                                        <v-icon left>mdi-plus-circle</v-icon>
                                                        <span>sadas</span>
                                                    </v-list-item>
                                                </template>
                                            </v-autocomplete>    
                                        </v-col>
                                    </v-row>      
                                    <v-row align="center" justify="center">

                                        <v-col md="6">
                                            <v-select
                                                label="Year Of Make"
                                                outlined
                                                hide-details="auto"
                                                :items="years"
                                                item-value="id"
                                                item-text="name"
                                                dense
                                            />

                                        </v-col>
                                    </v-row>
                                    <v-row justify="center">
                                        <v-col md="6">
                                            <v-text-field
                                                dense
                                                outlined
                                                label="Current odometer (KM)"
                                            >

                                            </v-text-field>
                                        </v-col>
                                    </v-row>
                                    <v-row justify="center">
                                        <v-col md="3">
                                            <v-checkbox
                                                dense
                                                label="Desial"
                                            >

                                            </v-checkbox>
                                        </v-col>
                                        <v-col  md="3">
                                            <v-checkbox
                                                dense
                                                label="Petrol"
                                            >

                                            </v-checkbox>
                                        </v-col>
                                    </v-row>
                                    <v-row  align="center" justify="center">
                                        <v-col md="6">
                                            <v-btn
                                            color="primary"
                                            @click="el = 2"
                                            >
                                            Continue
                                            </v-btn>

                                            <v-btn text>
                                            Cancel
                                            </v-btn>
                                        </v-col>
                                    </v-row>
                                </v-col>
                                </v-row>
                            </v-stepper-content>

                                <v-stepper-content step="2">
                                    <v-row align-content="center" justify="center" class="pa-1">
                                        <v-col md="6">
                                            <v-text-field
                                                label="Customer Name"
                                                dense
                                                hide-details="auto"
                                                outlined
                                            >

                                            </v-text-field>
                                        </v-col>
                                    </v-row>
                                    <v-row align="center" justify="center"> 
                                        <v-col md="6">
                                            <v-text-field
                                                label="Phone Number"
                                                dense
                                                hide-details="auto"
                                                outlined
                                            >

                                            </v-text-field>
                                        </v-col>
                                    </v-row>
                                    <v-row align="center" justify="center">
                                        <v-col md="6">
                                            <v-btn
                                                color="primary"
                                                @click="el = 3"
                                            >
                                                Continue
                                            </v-btn>
                                            <v-btn text>
                                                Cancel
                                            </v-btn>
                                        </v-col>
                                    </v-row>

                                </v-stepper-content>

                                <v-stepper-content step="3">
                                    <v-row justify="center" class="pa-1"    >
                                        <v-col md="6">
                                            <PDate
                                                label="Date of Sold"
                                                dense
                                                outlined
                                                v-model="date_of_sold"
                                                hide
                                            />
                                        </v-col>
                                    </v-row>  
                                     <v-row justify="center">
                                        <v-col md="6">
                                            <v-text-field
                                                prepend-inner-icon=""
                                                outlined
                                                hide-details="auto"
                                                dense
                                                label="Battery Brand"
                                            >

                                            </v-text-field>
                                        </v-col>
                                    </v-row >  
                                    <v-row justify="center">
                                        <v-col md="6">
                                            <v-text-field
                                                prepend-inner-icon=""
                                                outlined
                                                hide-details="auto"
                                                dense
                                                label="Battery Number"
                                            >

                                            </v-text-field>
                                        </v-col>
                                    </v-row >
                                    <v-row justify="center">
                                        <v-col md="6">
                                            <v-select
                                                label="size"
                                                outlined
                                                hide-details="auto"
                                                dense
                                                :items="sizes"
                                                item-text="name"
                                                item-value="id"
                                            >

                                            </v-select>  
                                        </v-col>
                                    </v-row>
                                    <v-row justify="center">
                                        <v-col md="6">
                                            <v-text-field
                                                outlined
                                                hide-details="auto"
                                                dense
                                                label="Serial Number"
                                            >

                                            </v-text-field>             
                                        </v-col>
                                    </v-row> 
                                    <v-row justify="center">
                                        <v-col md="6">
                                            <v-btn
                                                color="primary"
                                                @click="e1 = 1"
                                            >
                                                Continue
                                            </v-btn>

                                            <v-btn text>
                                                Cancel
                                            </v-btn>
                                        </v-col>
                                    </v-row>
                                </v-stepper-content>
                            </v-stepper-items>
                        </v-stepper>
                    </template>
                </v-col>
            </v-row>
           
        </v-col>
    </v-row>
</template>

<script>
import PDate from '@/components/PDate'
export default {
    name: "SlideBatteryView",
    components: {
        PDate
    },
    
    data() {
        return {
            el: 1,
            cars: [
                { name: "i10", id: 1},
                { name: "morning", id: 2 }
            ],
            years: [ 
                { name: "2009", id: 1}
            ],
            sizes: [
                { name: "50", id: 1 },
                { name: "60", id: 2 },
                { name: "70", id: 3 },
                { name: "100", id: 2 },
                { name: "200", id: 2 },

            ],
            date_of_sold: "",
                models: [
                    { name: "Kia", id: 1},
                    { name: "Hyundai", id: 2},
                    { name: "Mercedes", id: 3}
                ]
        }
    }
}
</script>

<style>

</style>