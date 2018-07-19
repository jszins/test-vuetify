<template>
    <div id="tournament">
        <v-content>
            <v-container>
                <v-flex>
                    <v-jumbotron>
                        <v-container fill-height>
                            <v-layout class="mt-5">
                                <v-flex xs12 >
                                    <h3 class="background text-xs-left text-sm-center display-3">Tournaments</h3>
                                    <v-divider class="my-3"></v-divider>
                                    <div class="background title text-xs-left text-sm-center mb-3">Find your sport/region here</div>
                                    <v-flex xs3 sm12>
                                        <template>
                                            <div class="text-xs-center">
                                                <v-menu offset-y>
                                                    <v-btn
                                                        slot="activator"
                                                        color="primary"
                                                        dark
                                                    >
                                                        Activities
                                                    </v-btn>
                                                    <v-list>
                                                        <v-list-tile
                                                            v-for="(activity, i) in activities"
                                                            :key="i"
                                                            @click="populateData(activity)"
                                                        >
                                                        <v-list-tile-title>{{ activity.text }}</v-list-tile-title>
                                                        </v-list-tile>
                                                    </v-list>
                                                </v-menu>
                                            </div>
                                        </template>
                                    </v-flex>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-jumbotron>
                </v-flex>
            </v-container>
            <v-layout row wrap>
                <v-flex xs12 sm8 offset-sm2>
                    <template>
                        <v-subheader class="display-1">{{ subheader }}</v-subheader>
                        <v-text-field
                                v-model="search"
                                append-icon="search"
                                label="Search"
                                single-line
                                hide-details
                            ></v-text-field>
                        <v-data-table
                            :items="tournaments"
                            :headers="headers"
                            :search="search"
                            class="elevation-1"
                        >
                            <template slot="items" slot-scope="props" >
                                <td>{{ props.item._source.Section }}</td>
                                <td>{{ props.item._source.Activity }}</td>
                                <td>{{ props.item._source.Date }}</td>
                                <td>{{ props.item._source.Location }}</td>
                            </template>
                        </v-data-table>
                    </template>
                </v-flex>
            </v-layout>
        </v-content>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            tournaments: [],
            search: '',
            subheader: '',
            select: '',
            headers: [
                {
                    text: 'Section',
                    align: 'left',
                    sortable: false,
                    value: '_source.Section'
                },
                { text: 'Activity', sortable: false, value: '_source.Activity' },
                { text: 'Date', sortable: false, value: '_source.Date' },
                { text: 'Location', sortable: false, value: '_source.Location' },
            ],
            activities: [
                {
                    text: 'Boys Hockey',
                    value: 'boys_hockey'
                },
                {
                    text: 'Boys Soccer',
                    value: 'boys_soccer'
                },
                {
                    text: 'Girls Tennis',
                    value: 'girls_tennis'
                }
                
            ]
        }
    },
    methods: {
        populateData(activity){
            this.subheader = activity.text
            axios.get("http://localhost:9200/" + activity.value + "/_search?size=50")
                .then(res => this.tournaments = res.data.hits.hits)
                .catch(err => alert(err))
        }
    }
}
</script>

