<template>
    <div id="region">
        <v-app dark>
            <v-content>
                <v-jumbotron :src="img" light>
                    <v-container fill-height>
                        <v-layout align-content class="mt-5">
                            <v-flex class="white--text">
                                <h3 class="text-sm-left text-lg-center display-3">Regions</h3>

                                <v-divider class="my-3"></v-divider>

                                <div class="title text-sm-left text-lg-center mb-3">Click a region to view its related content</div>

                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-jumbotron>
                <v-container
                    grid-list-{xs through xl}
                >
                <v-layout
                    column
                    align-center
                >
                    <v-flex>
                            <v-expansion-panel
                                light
                                expand
                            >
                            <v-expansion-panel-content
                                v-for="(region, i) in regions"
                                :key="i"
                            >
                                <div slot="header" class="font-weight-regular headline text-xs-left text-lg-center">{{ region.name }}</div>
                                <v-card >
                                    <v-card-actions 
                                        v-for="(activity, i) in activities"
                                        :key="i" 
                                        class="grey darken-2 black--text text-xs-left text-lg-center"
                                    >
                                        <v-card-text>{{ activity.name }}</v-card-text>
                                        <v-btn flat color="success" icon>
                                            <v-icon>arrow_forward</v-icon> 
                                        </v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-expansion-panel-content>
                            </v-expansion-panel>
                        </v-flex>
                </v-layout>
                </v-container>
                <v-btn :to="{ name: 'createRegion' }">Create</v-btn> 
            </v-content>
        </v-app>
    </div>
</template>

<script>
import { db } from '@/main.js'

export default {
    data() {
        return {
            regions: [],
            activities: [],
            img: require('@/assets/jumbotron/regions.jpg'),
        }
    },
    firestore() {
        return {
            regions: db.collection('list-of-regions').orderBy('name'),
            activities: db.collection('list-of-activities').orderBy('name')
        }
    }
}
</script>
