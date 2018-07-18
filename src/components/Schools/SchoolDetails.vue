<template>
    <v-container>
        <v-layout row wrap>
            <v-flex xs12 sm6 offset-sm3>
                <v-card>
                    <v-card-media
                    src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
                    height="200px"
                    ></v-card-media>
                    <v-card-title primary-title>
                        <div>
                            <h3 class="headline mb-0">{{ school.Organization }}</h3>
                            <div>{{ school.Physical_City }}<br>{{ school.Web_URL }}</div>
                        </div>
                    </v-card-title>
                    <v-card-actions>
                        <v-btn flat color="orange">Share</v-btn>
                        <v-btn 
                            flat 
                            color="info"
                            :href="school.Web_URL"
                        >
                            Check them out</v-btn>
                        <v-spacer></v-spacer>
                        <v-tooltip bottom>
                            <v-btn 
                                icon 
                                color="primary" 
                                :to="{ name:'schools'}"
                                slot="activator"
                                large
                            >
                                <v-icon large>school</v-icon>
                            </v-btn>
                            <span>Back to Schools</span>
                        </v-tooltip>
                        
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
    
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            id: this.$route.params.id,
            school: {} 
        }
    },
    watch: {
        id() {
            this.id = this.$route.params.id
        }
    },
    mounted() {
        this.$nextTick(() =>{
            axios.get("http://localhost:9200/schools/_search?size=1&q=StateOrganizationId:" + this.id)
                .then(res => this.school = res.data.hits.hits[0]._source)
                .catch(err => alert('Whoops! No school selected'))
        }) 
    }
}
</script>

