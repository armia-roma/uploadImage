<template>
    <v-row>
        <v-col>
            <v-row>
                <v-col  class="font-weight-bold">
                    <v-toolbar dense flat elevation="1"> 
                        <v-toolbar-title>
                            Laragigs
                        </v-toolbar-title>
                    </v-toolbar>
                    <v-row>
                        <v-col>
                            <v-sheet class="mt-2">
                                <v-row no-gutters justify="center" align="center"> 
                                    <v-col md="6" > 
                                        <v-text-field
                                            outlined
                                            dense
                                            hide-details="auto"
                                            label="Search"
                                            v-model="search"
                                        >

                                        </v-text-field>
                                    </v-col>
                                    <v-col>
                                        <v-btn icon @click="handleSearch">
                                            <v-icon>mdi-magnify</v-icon>
                                        </v-btn>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col>
                                        <LaragigsList :list="list" @felterByTag="handlefelterByTag"></LaragigsList>
                                        
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col>
                                        <v-menu offset-y :close-on-content-click="false">
                                            <template v-slot:activator="{ on }">
                                                <v-btn depressed text v-on="on" >
                                            <div>
                                                <v-icon>mdi-plus</v-icon>
                                                <p>create custom </p>
                                            </div>
                                        </v-btn>
                                            </template>
                                            <v-list>
                                                <v-list-item @click="createCheckBox">
                                                    <v-list-item-avatar>
                                                        <v-icon>mdi-folder-plus</v-icon>
                                                    </v-list-item-avatar>
                                                    <v-list-item-content>
                                                        create checkBox
                                                    </v-list-item-content>
                                                </v-list-item>
                                            </v-list>
                                        </v-menu>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col>
                                        <v-sheet>
                                            
                                        </v-sheet>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="12" md="4">
                                        <v-autocomplete
                                            outlined
                                            dense
                                            :items="items"
                                        >

                                        </v-autocomplete>
                                    </v-col>
                                </v-row>
                            </v-sheet>
                        </v-col>
                        <v-col cols="12" md="2">
                            <v-row>
                                <v-col>
                                    <div>Add</div>
                                    <v-btn depressed @click="select(customers)">
                                        <v-icon >
                                            mdi-apple-keyboard-option
                                        </v-icon>
                                        customers
                                    </v-btn>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col>
                                    <v-row>
                                        <v-col>
                                            <div>Power up</div>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col cols="12" md="12">
                                            <v-list>
                                                <v-list-item>
                                                    <v-list-item-content>
                                                        <v-list-title>Custom Field</v-list-title>
                                                    </v-list-item-content>
                                                        <v-btn depressed elevation="0" flat  max-width="50" min-width="50" >
                                                            <v-icon> mdi-cog</v-icon> 
                                                        </v-btn>
                                                    <v-list>
                                                    </v-list>
                                                </v-list-item>
                                            </v-list>
                                        </v-col>
                                    </v-row>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-col>
                
            </v-row>
        </v-col>
        
    </v-row>       
</template>

<script>
import LaragigsList from '@/components/LaragigsList'
import data from '@/views/data'
import axios from 'axios';
export default {
    name: 'LaragigsListView',
    components: {
        LaragigsList
    },
    data() {
        return {
            search: "",
            list: [],
            items: [
                {name: "armia", age: 23}
            ],
            source: new data.DataSource()
        }
    },
    methods: {
        handleSearch() {
            this.fetchLaragigs(this.search)
        },
        fetchLaragigs(search) {
            if(!search) search = ""
            axios.get(`http://127.0.0.1:8000/laragigs?search=${search}`).then(response=> this.list = response.data)
        },
        handlefelterByTag(tag) {
            this.list = []
            this.fetchLaragigs(tag)
        },
        createCheckBox() {
            //open dilog create fields
        },
        select() {
            this.list.push(data.customers)
        }
    },
    mounted() {
        this.fetchLaragigs()
        console.log(this.rows)
    }
}
</script>

<style>

</style>