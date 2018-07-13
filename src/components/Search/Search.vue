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
            axios.get("http://127.0.0.1:5601/search?q=" + this.query)
                .then(res => console.log(res))
                .catch(err => console.log(err))
        }
    },
    watch: {
        query () {
            this.search();
        }
    }
}
</script>
