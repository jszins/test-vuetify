<template>
<div id="schoolDetails">
    <v-container>
        <v-layout row wrap>
            <v-container>
                <v-flex xs12 sm6 offset-sm3>
                    <v-jumbotron>
                        <v-container fill-height>
                            <v-layout align-center>
                                <v-flex>
                                <h3 class="display-3">{{ activeTournament.Activity}}</h3>
                                <span class="subheading">{{ activeTournament.Section }}<br></span>
                                <span class="subheading">{{ activeTournament.Date }}<br></span>
                                <span class="subheading">Location: {{ activeTournament.Location }}<br></span>
                                <v-divider class="my-3"></v-divider>
                                <div class="title mb-3">Manager: {{ activeTournament.Manager }}</div>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-jumbotron>
                </v-flex>
            </v-container>
            <v-container>
                <v-flex xs12 sm6 offset-sm3>
                    <v-subheader>Other section tournaments</v-subheader>
                    <template v-for="(tournament,i) in tournaments">
                        <v-card  :key="i" v-if="id != tournament._id">
                            <v-card-media
                                src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
                                height="200px"
                            ></v-card-media>
                            <v-card-title primary-title>
                                <div>
                                    <h3 class="headline mb-0">{{ tournament._source.Activity }} | {{ tournament._source.Section}}</h3>
                                    <div>
                                        Date: {{ tournament._source.Date }}<br>
                                    </div>
                                </div>
                            </v-card-title>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn
                                    round
                                    color="info"
                                    @click="changeTourney(tournament)"
                                >
                                    See this
                                </v-btn>
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
                    </template>    
                </v-flex>
            </v-container>  
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
            id: this.$route.params.id,
            tournaments: [],
            activeTournament: {} 
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
    methods: {
        changeTourney(tournament){
            this.id = tournament._id
            this.activeTournament = tournament._source
            window.scrollTo(0, 0)
        }
    },
    mounted() {
        this.$nextTick(() =>{
            axios.get("http://localhost:9200/" + this.activity + "/_search?size=25&q=Section:" + this.section + "&q=_id:" + this.id)
                .then(res => {
                    this.activeTournament = res.data.hits.hits[0]._source
                })
                .catch(() => alert('Whoops! No tournament selected'))
            axios.get("http://localhost:9200/" + this.activity + "/_search?size=25&q=Section:" + this.section)
                .then(res => {
                    this.tournaments = res.data.hits.hits
                })
                .catch(() => alert('Whoops! No tournament selected'))
        }) 
    }
}
</script>