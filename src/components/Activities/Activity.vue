<template>
    <div id="activity">
        <v-app light>
            <v-content>
                <v-jumbotron  :gradient="gradient" light>
                    <v-container fill-height>
                        <v-layout align-content>
                            <v-flex class="text-xs-center">
                                <h3 class="display-3">Activity page</h3>

                                <span class="subheading">All current activities will be displayed here</span>

                                <v-divider class="my-3"></v-divider>

                                <div class="title mb-3">List of all activities!</div>

                                <v-btn
                                    class="mx-0"
                                    color="primary"
                                    large
                                    :to="{ name: 'home' }"
                                >
                                    Back to Home
                                </v-btn>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-jumbotron>
                <v-container>
                    <v-layout
                        column
                        justify-center
                        align-center>
                        <v-flex>
                            <v-list two-line subheader>
                                <v-list-tile
                                    v-for="activity in activities"
                                    :key="activity.key"
                                >
                                    <v-list-tile-content>
                                    <v-list-tile-title>{{ activity.name }}</v-list-tile-title>
                                    <v-list-tile-sub-title>{{ activity.info }}</v-list-tile-sub-title>
                                    </v-list-tile-content>

                                    <v-list-tile-action>
                                    <v-btn 
                                        icon 
                                        ripple
                                        active-class="disabled"
                                        :to="{ name: 'activityDetails', params: { id: activity.key }}"
                                    >
                                        <v-icon color="grey lighten-1">info</v-icon>
                                    </v-btn>
                                    </v-list-tile-action>
                                </v-list-tile>
                            </v-list>
                        </v-flex>
                    </v-layout>
                </v-container> 
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
            gradient: 'to top, #424242, #FAFAFA'
        }
    },
    firestore() {
        return {
            activities: db.collection('list-of-activities')
        }
    }
}
</script>
