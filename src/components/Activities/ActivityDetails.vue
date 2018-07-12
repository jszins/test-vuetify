<template>
<div id="activityDetails">
    <v-app dark>
        <v-container>
            <v-layout row wrap>
                <v-flex xs12>
                    <h1 class="text-xs-left text-sm-center">Activity Details</h1>
                    <v-card>
                        <v-card-media
                        :src="activity.img"
                        height="600px"
                        >
                            <v-container
                                fill-height
                                fluid
                                pa-2
                            >
                                <v-layout fill-height>
                                    <v-flex xs12 align-end flexbox>
                                        <span class="display-3 white--text" v-text="activity.name"></span>
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </v-card-media>
                        <v-flex xs12>
                            <v-card-actions>
                                <div>{{ activity.info }} <br> {{ activity.location }}</div>
                                <v-spacer></v-spacer>
                                <v-btn class="mt-5" color="success">View Tournaments</v-btn>
                            </v-card-actions> 
                        </v-flex>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
        
    </v-app>
</div>
  
</template>

<script>
import { db } from '../../main.js'

export default {
    data() {
        return {
            activities: [],
            id: this.$route.params.id
        }
    },
    computed: {
        activity() {
            return this.$store.getters.loadedActivity(this.id)
        }
    }
}
</script>