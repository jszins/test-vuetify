<template>
<div id="schoolDetails">
    <v-container>
        <v-layout row wrap>
            <v-flex xs12 sm6 offset-sm3>
                <v-card v-for="(tournament,i) in tournaments" :key="i">
                    <v-card-media
                        src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
                        height="200px"
                    ></v-card-media>
                    <v-card-title primary-title>
                        <div>
                            <h3 class="headline mb-0">{{ tournament._source.Activity }} | {{ tournament._source.Section}}</h3>
                            <div>
                                Date: {{ tournament._source.Date }}<br>
                                Location: {{ tournament._source.Location }}<br>
                                Manager: {{ tournament._source.Manager}}<br>
                            </div>
                        </div>
                    </v-card-title>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-tooltip bottom>
                            <v-btn 
                                icon 
                                color="primary" 
                                :to="{ name:'tournaments'}"
                                slot="activator"
                                large
                            >
                                <v-icon large>stars</v-icon>
                            </v-btn>
                            <span>Back to Tournaments</span>
                        </v-tooltip>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</div> 
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            section: this.$route.params.section,
            activity: this.$route.params.activity,
            tournaments: [], 
        }
    },
    watch: {
        section() {
            this.section = this.$route.params.section
        },
        activity() {
            this.activity = this.$route.params.activity
        }
    },
    mounted() {
        this.$nextTick(() =>{
            axios.get("http://localhost:9200/" + this.activity + "/_search?size=25&q=Section:" + this.section)
                .then(res => {
                    this.tournaments = res.data.hits.hits
                })
                .catch(() => alert('Whoops! No tournament selected'))
        }) 
    }
}
</script>