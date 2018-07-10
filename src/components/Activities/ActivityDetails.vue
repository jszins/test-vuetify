<template>
<div id="activityDetails">
    <v-app light>
        <v-content 
            v-for="activity in activities"
            :key="activity.key"
        >
            <v-layout>
                <v-flex xs12 sm6 offset-sm3>
                    <v-card>
                        <v-card-media
                        src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
                        height="200px"
                        ></v-card-media>

                        <v-card-title primary-title>
                        <div>
                            <h3 class="headline mb-0">{{ activity.name }}</h3>
                            <div> {{ activity.info }} <br> {{ activity.location }}</div>
                        </div>
                        </v-card-title>

                        <v-card-actions>
                            <v-btn 
                                flat 
                                color="orange"
                                active-class="disabled"
                                :to="{ name: 'activity' }"
                            >
                                Back to Activity List
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-content>
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
    firestore() {
        return {
            activities: db.collection('list-of-activities').where("key", "==", this.id)
        }
    }
}
</script>