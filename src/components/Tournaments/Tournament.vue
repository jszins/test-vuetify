<template>
    <div id="tournament">
        <v-content>
            <v-flex xs12 sm6 offset-sm3>
                <v-jumbotron>
                    <v-container>
                        <v-layout>
                            <v-flex xs12>
                                <h3 class="text-xs-center mb-2 display-1">Tournaments</h3>
                                <v-divider class="my-3"></v-divider>
                                <div class="subheading font-weight-regular text-xs-center mb-3">Find your sport/region here</div>
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
                            <td class="text-xs-right">
                                <v-btn 
                                    icon 
                                    color="primary" 
                                    :to="{ name: 'tourneyDetails', params:{ 
                                                                        section: props.item._source.Section, 
                                                                        activity: props.item._index,
                                                                        id: props.item._id}}"
                                >
                                    <v-icon>forward</v-icon>
                                </v-btn>
                            </td>
                        </template>
                    </v-data-table>
                </template>
            </v-flex>
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

