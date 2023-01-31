<template>
    <div>
        <v-row>
            <v-col> 
                <h4 class="text-h4">Battery</h4>
                <p>Detials battery</p>
            </v-col>
        </v-row>
        <v-row >
            <v-col>
                <v-hover
                    v-slot="{ hover }"
                    open-delay="200"
                    @click="navigateToModel"
                >

                    <v-sheet
                        color="grey lighten-3"
                        rounded
                        :elevation="hover ? 16 : 2"
                        :class="{ 'on-hover': hover }"
                        height="100"
                        width="100"
                    >
                        <v-row 
                            align="center"
                            justify="center"
                            style="height: 100px;"
                        >
                            <v-col md="6">
                            <v-btn plain tile retain-focus-on-click @click="navigateToModel">
                                <v-icon large>mdi-moped-electric</v-icon>
                            </v-btn>
                            </v-col>
                        </v-row>
                    </v-sheet>
                </v-hover>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" md="3">
                <v-text-field
                    outlined
                    hide-details="auto"
                    dense
                    label="Serial Number"
                >

                </v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col md="3">
                <v-select
                    outlined
                    dense
                    hide-details="auto"
                    label="Model"
                    :items="model"
                >

                </v-select>
            </v-col>
            <v-col md="3">

                <v-autocomplete
                    outlined
                    label="Vehicle"
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
            <v-col md="3">
                <v-select
                    label="Year Of Make"
                    outlined
                    hide-details="auto"
                    :items="years"
                    dense
                />

            </v-col>
            
        </v-row>
        <v-row>
            <v-col md="3">
                <v-text-field
                    label="Plate Number"
                    dense
                    hide-details="auto"
                    outlined
                >

                </v-text-field>
            </v-col>
            <v-col md="3">
                <v-text-field
                    label="Customer Name"
                    dense
                    hide-details="auto"
                    outlined
                >

                </v-text-field>
            </v-col>
            <v-col md="3">
                <v-text-field
                    label="Phone Number"
                    dense
                    hide-details="auto"
                    outlined
                >

                </v-text-field>
            </v-col>
        
        </v-row>
        <v-row>
            <v-col md="3">
                <v-select
                label="size"
                    outlined
                    hide-details="auto"
                    dense
                    :items="size"
                >

                </v-select>
            </v-col>
            <v-col md="3">
                <v-text-field
                    prepend-inner-icon="mdi-numeric"
                    outlined
                    dense
                    label="Battery Number"
                >

                </v-text-field>
            </v-col>
            <v-col md="3">
                <PDate
                    label="Date of Sold"
                    dense
                    outlined
                    v-model="date_of_sold"
                />
            </v-col>
        </v-row>
        <v-icon>mdi-numeric</v-icon>
       

    </div>
</template>

<script>
import PDate from '@/components/PDate'
export default {
    components: {
        PDate
    },
    data() {
        return {
            cars: [
                { name: "I10" }
            ],
            years: [
                2009,
                2007
            ],
            model: [
                "kia", 
                "Hondyui"

            ],
            size: [
                40,
                60,
                100,
                200
            ],
            date_of_sold: ""
        }
    },
    methods: {
        navigateToModel() {
            this.$router.push({ name: "Model" })
        }
    }
}
</script>

<style>

</style>