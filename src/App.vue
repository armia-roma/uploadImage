<template>
  <v-app id="inspire">
    <v-navigation-drawer
        app   
        expand-on-hover
        v-model="drawer"
    >
        <v-list-item>
            <v-list-item-content>
                <v-list-item-title class="text-h6">
                    Application
                </v-list-item-title>
                <v-list-item-subtitle>
                    subtext
                </v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list
            dense
            nav
        >
            <v-list-item link @click="navgate">
                <v-list-item-icon>
                <v-icon>mdi-list</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
            <v-list-item-title>TITLE</v-list-item-title>
          </v-list-item-content>
            </v-list-item>
            <v-list-item link @click="navgateBattery">
                <v-list-item-icon>
                <v-icon>mdi-list</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
            <v-list-item-title>Battery</v-list-item-title>
          </v-list-item-content>
            </v-list-item>
            <v-list-item link @click="navgateToSlide">
                <v-list-item-icon>
                <v-icon>mdi-list</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
            <v-list-item-title>Slide Battery</v-list-item-title>
          </v-list-item-content>
            </v-list-item>
            <v-list-item link @click="navgateToModel">
                <v-list-item-icon>
                <v-icon>mdi-list</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
            <v-list-item-title>Model</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
            <v-list-item link @click="navgateToStoptime">
                <v-list-item-icon>
                    <v-icon>mdi-list</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title>
                        StopTimmer
                    </v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-list-item link @click="navgateToUploadImage">
                <v-list-item-icon>
                    <v-icon>mdi-list</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title>
                        Upload Image
                    </v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>

    </v-navigation-drawer>
    <v-app-bar app dense>
        <v-btn @click="handleDrower">
           <v-app-bar-nav-icon ></v-app-bar-nav-icon>
        </v-btn>
    </v-app-bar>
    <v-main>
        <v-container fluid height="350" class="grey lighten-2 pa-2">
            <router-view></router-view>
        </v-container>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    props: {
        source: String
    },
    data() {
        return {
            drawer: false
        }
    },
    methods : {
        navgate() {
            this.$router.push({ name : "LaragigsList"})
        },
        navgateBattery() {
            this.$router.push({ name: "Battery"})
        },
        navgateToSlide() {
            this.$router.push({ name: "SlideBattery"})
        },
        navgateToModel() {
            this.$router.push({ name: "Model" })
        },
        navgateToStoptime() {
            this.$router.push({ name: "StopTimer"})
        },
        handleDrower() {
            this.drawer = !this.drawer;
        },
        navgateToUploadImage() {
            this.$router.push({ name: "UploadImage"})
        }
    }
  }
</script>



