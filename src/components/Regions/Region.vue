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
                <v-flex xs12>
                    <v-container>
                        <v-layout row wrap>
                            <v-flex xs12 lg4 mb-3 pa-2>
                                    <v-expansion-panel
                                        dark
                                        expand
                                    >
                                        <v-expansion-panel-content
                                            v-for="(region, i) in aRegions"
                                            :key="i"
                                        >
                                            <div slot="header" class="font-weight-regular headline text-xs-left text-lg-center">{{ region.A }}A</div>
                                            <v-card >
                                                <v-card-actions 
                                                    v-for="(activity, i) in activities"
                                                    :key="i" 
                                                    class="grey black--text text-xs-left text-lg-center"
                                                >
                                                    <v-card-text>{{ activity.name }}</v-card-text>
                                                    <v-btn flat color="black" icon>
                                                        <v-icon>arrow_forward</v-icon> 
                                                    </v-btn>
                                                </v-card-actions>
                                            </v-card>
                                        </v-expansion-panel-content>
                                    </v-expansion-panel>
                                </v-flex>
                                <v-flex xs12 lg4 mb-3 pa-2>
                                    <v-expansion-panel
                                        dark
                                        expand
                                    >
                                        <v-expansion-panel-content
                                            v-for="(region, i) in aaRegions"
                                            :key="i"
                                        >
                                            <div slot="header" class="font-weight-regular headline text-xs-left text-lg-center">{{ region.AA }}AA</div>
                                            <v-card >
                                                <v-card-actions 
                                                    v-for="(activity, i) in activities"
                                                    :key="i" 
                                                    class="grey black--text text-xs-left text-lg-center"
                                                >
                                                    <v-card-text>{{ activity.name }}</v-card-text>
                                                    <v-btn flat color="black" icon>
                                                        <v-icon>arrow_forward</v-icon> 
                                                    </v-btn>
                                                </v-card-actions>
                                            </v-card>
                                        </v-expansion-panel-content>
                                    </v-expansion-panel>
                                </v-flex>
                                <v-flex xs12 lg4 mb-3 pa-2>
                                    <v-expansion-panel
                                        dark
                                        expand
                                    >
                                        <v-expansion-panel-content
                                            v-for="(region, i) in aaaRegions"
                                            :key="i"
                                        >
                                            <div slot="header" class="font-weight-regular headline text-xs-left text-lg-center">{{ region.AAA }}AAA</div>
                                            <v-card >
                                                <v-card-actions 
                                                    v-for="(activity, i) in activities"
                                                    :key="i" 
                                                    class="grey black--text text-xs-left text-lg-center"
                                                >
                                                    <v-card-text>{{ activity.name }}</v-card-text>
                                                    <v-btn flat color="black" icon>
                                                        <v-icon>arrow_forward</v-icon> 
                                                    </v-btn>
                                                </v-card-actions>
                                            </v-card>
                                        </v-expansion-panel-content>
                                    </v-expansion-panel>
                                </v-flex>
                        </v-layout>
                    </v-container>
                </v-flex>
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
            aRegions: [],
            aaRegions: [],
            aaaRegions: [],
            activities: [],
            img: require('@/assets/jumbotron/regions.jpg'),
        }
    },
    firestore() {
        return {
            aRegions: db.collection('list-of-aRegions').orderBy('A'),
            aaRegions: db.collection('list-of-aaRegions').orderBy('AA'),
            aaaRegions: db.collection('list-of-aaaRegions').orderBy('AAA'),
            activities: db.collection('list-of-activities').orderBy('name')
        }
    }
}
</script>
