<template>
    <div id="search">
        <v-app light>
            <v-content>
                <v-form>
                    <v-container>
                        <v-layout row wrap>
                            <v-flex xs12 sm6>
                            <v-text-field
                                label="Search"
                                single-line
                                v-model="query"
                                @submit="search"
                            ></v-text-field>
                            <v-btn @click="search">Try</v-btn>
                            <p>{{ results }}</p>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-form>
            </v-content>
        </v-app>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data () {
        return {
            query: '',
            results: []
        }
    },
    methods: {
        search () {
            axios.get('http://localhost:9200/staff/_doc/_search?size=100&q=*:' + this.query)
                .then(res => this.results.push(res.Name))
        }
    },
    watch: {
        query() {
            this.search()
        }
    }
}
</script>
