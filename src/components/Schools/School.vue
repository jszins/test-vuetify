<template>
    <div id="school">
        <v-app light>
            <v-content>
                <v-jumbotron :src="img">
                    <v-container fill-height>
                        <v-layout align-content class="mt-5">
                            <v-flex class="white--text" xs6 offset-xs3>
                                <h3 class="background text-xs-left text-sm-center display-3">Schools</h3>
                                <v-divider class="my-3"></v-divider>
                                <div class="background title text-xs-left text-sm-center mb-3">View our school index</div>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-jumbotron>
                <v-layout row wrap>
                    <v-flex xs12 sm8 offset-sm2>
                        <template>
                            <v-text-field
                                v-model="search"
                                append-icon="search"
                                label="Search"
                                single-line
                                hide-details
                            ></v-text-field>
                            <v-data-table
                                :items="schools"
                                :headers="headers"
                                :search="search"
                                :loading="loading"
                                class="elevation-1"
                            >
                                <v-progress-linear slot="progress" color="blue" indeterminate></v-progress-linear>
                                <template slot="items" slot-scope="props" >
                                    <td>{{ props.item._source.Organization }}</td>
                                    <td class="text-xs-right">{{ props.item._source.Physical_City }}</td>
                                    <td class="text-xs-right">{{ props.item._source.Name }}</td>
                                    <td class="text-xs-right">{{ props.item._source.Email }}</td>
                                    <td class="text-xs-right">{{ props.item._source.Phone }}</td>
                                    <td class="text-xs-right">{{ props.item._source.Mailing_Line_1 }}</td>
                                    <td class="text-xs-right">
                                        <v-btn icon color="primary" :to="{ name: 'schoolDetails', params: { id: props.item._source.StateOrganizationId}}">
                                            <v-icon>forward</v-icon>
                                        </v-btn>
                                    </td>
                                </template>
                            </v-data-table>
                            <template v-for="(letter, i) in letters">
                                <v-btn
                                    @click="switchView(letter)" 
                                    color="info" 
                                    round 
                                    :key="i"
                                >
                                    {{ letter.value }}
                            </v-btn>
                            </template>
                        </template>
                    </v-flex>
                </v-layout>
            </v-content>
        </v-app>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data () {
        return {
            img: require('@/assets/jumbotron/schools.jpg'),
            schools: [],
            query: '',
            search: '',
            loading: true,
            headers: [
                {
                    text: 'Organization',
                    align: 'left',
                    sortable: false,
                    value: '_source.Organization'
                },
                { text: 'County', sortable: false, value: '_source.County' },
                { text: 'Primary Contact', sortable: false, value: '_source.Name' },
                { text: 'Contact Email', sortable: false, value: '_source.Email' },
                { text: 'Phone', sortable: false, value: '_source.Phone' },
                { text: 'Address', sortable: false, value: '_source.Mailing_Line_1' },
                { text: 'Link', sortable: false, value: '_source.StateOrganizationId'}
            ],
            letters: [
                { value: 'A' },
                { value: 'B' },
                { value: 'C' },
                { value: 'D' },
                { value: 'E' },
                { value: 'F' },
                { value: 'G' },
                { value: 'H' },
                { value: 'I' },
                { value: 'J' },
                { value: 'K' },
                { value: 'L' },
                { value: 'M' },
                { value: 'N' },
                { value: 'O' },
                { value: 'P' },
                { value: 'Q' },
                { value: 'R' },
                { value: 'S' },
                { value: 'T' },
                { value: 'U' },
                { value: 'V' },
                { value: 'W' },
                { value: 'X' },
                { value: 'Y' },
                { value: 'Z' }
            ]
        }
    },
    methods: {
        rePopulate() {
            axios.get("http://localhost:9200/schools/_search?size=4000&q=Organization:" + this.query)
                .then(res => {
                    this.schools = res.data.hits.hits
                    this.loading = false
                })
                .catch(err => alert(err))
        },
        switchView(letter) {
            this.query = letter.value
            this.search = ''
        }
    },
    watch: {
        query() {
            this.loading = true
            this.rePopulate()
        }
    },
    mounted() {
        this.$nextTick(() =>{
            axios.get("http://localhost:9200/schools/_search?size=4000&q=*:*")
                .then(res => {
                    this.schools = res.data.hits.hits 
                    this.loading = false
                })
                .catch(err => alert(err))
        })
    }
}
</script>

<style scoped>
.background {
    background-color: rgba(0,0,0,.5);
}
</style>