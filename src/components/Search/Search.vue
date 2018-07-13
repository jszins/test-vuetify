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
                            ></v-text-field>
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
            axios.get('http://localhost:9200/staff/_doc/_search', {
                params:
                {
                    source: JSON.stringify(this.query),
                    source_content_type: 'application/json'
                } 
            }).then(res => console.log(res))
        }
    },
    watch: {
        query () {
            this.search();
        }
    }
}
</script>
