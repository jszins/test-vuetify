<template>
    <div id="activity">
        <v-app light>
            <v-content>
                <v-jumbotron :src="img">
                    <v-container fill-height>
                        <v-layout align-content class="mt-5">
                            <v-flex class="white--text" xs6 offset-xs3>
                                <h3 class="background text-sm-left text-lg-center display-3">Activities</h3>
                                <v-divider class="my-3"></v-divider>
                                <div class="background title text-sm-left text-lg-center mb-3">List of all activities!</div>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-jumbotron>
                <v-container
                    fluid
                    grid-list-{xs through xl}
                >
                    <v-layout
                        row
                        wrap    
                    >
                        <v-flex
                            v-for="activity in activities" 
                            :key="activity.id"
                            lg3
                            xs12
                            class="pa-2"
                        >
                            <v-card color="blue-grey darken-3" >
                                <v-card-media
                                    :src="activity.img"
                                    height="200px"
                                ></v-card-media>

                                <v-card-title primary-title>
                                <div>
                                    <h3 class="headline mb-0">{{ activity.name }}</h3>
                                    <div> {{ activity.info }} </div>
                                </div>
                                </v-card-title>

                                <v-card-actions>
                                    <v-btn 
                                        flat 
                                        color="orange"
                                        active-class="disabled"
                                        :to="{ name: 'activityDetails', params: { id: activity.id} }"
                                    >
                                        Check this out
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-content>
        </v-app>
    </div>
</template>

<script>

export default {
    data() {
        return {
            img: require('@/assets/jumbotron/activities.jpg')
        }
    },
}
</script>

<style scoped>
.background {
    background-color: rgba(0,0,0,.5);
}
</style>
