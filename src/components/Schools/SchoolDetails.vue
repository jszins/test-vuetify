<template>
<div id="schoolDetails">
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
                            <div>
                                {{ school.Mailing_Line_1 }}<br>
                                {{ school.Physical_City}}, MN<br>
                                {{ school.Mailing_Zip }}<br>
                                {{ school.Phone }}
                            </div>
                        </div>
                    </v-card-title>
                    <v-card-actions>
                        <v-btn 
                            flat 
                            color="info"
                            :href="school.Web_URL"
                            target="blank"
                        >
                            Their Site
                        </v-btn>
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
</div> 
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            id: this.$route.params.id,
            school: {}, 
        }
    },
    watch: {
        id() {
            this.id = this.$route.params.id
        }
    },
    mounted() {
        this.$nextTick(() =>{
            axios.get("http://localhost:9200/schools/_search?size=1&q=_id:" + this.id)
                .then(res => {
                    this.school = res.data.hits.hits[0]._source
                })
                .catch(() => alert('Whoops! No school selected'))
        }) 
    }
}
</script>

