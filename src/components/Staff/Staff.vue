<template>
    <div id="staff">
        <v-content>
            <v-container>
                    <v-flex>
                        <v-jumbotron :src="img">
                            <v-container fill-height>
                                <v-layout align-content class="mt-5">
                                    <v-flex class="white--text" xs12 sm6 offset-sm3>
                                        <h3 class="background text-xs-center mb-2 display-3">Staff</h3>
                                        <v-divider class="my-3"></v-divider>
                                        <div class="background title text-xs-center mb-3">View our staff index</div>
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </v-jumbotron>
                        <v-container>
                            <v-flex xs12 sm6 offset-sm3>
                                <v-list two-line>
                                    <v-subheader>Our Staff</v-subheader>
                                    <template v-for="(person, i) in staff">
                                        <v-list-tile :key="i + '-tile'">
                                            <v-list-tile-content>
                                                <v-list-tile-title v-html="person._source.Name"></v-list-tile-title>
                                                <v-list-tile-sub-title v-html="person._source.Position"></v-list-tile-sub-title>
                                                <v-spacer></v-spacer>
                                            </v-list-tile-content>
                                            <v-list-tile-action>
                                                <v-list-tile-action-text class="subheading">Extension: {{ person._source.Extension }}</v-list-tile-action-text>
                                                <v-list-tile-action-text class="subheading">{{ person._source.Email }}</v-list-tile-action-text>
                                            </v-list-tile-action>
                                        </v-list-tile>
                                        <v-divider :key="i + '-divider'"></v-divider>
                                    </template>
                                </v-list>
                            </v-flex>
                        </v-container>
                    </v-flex>
            </v-container>
        </v-content>   
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            img: require('@/assets/jumbotron/staff.jpg'),
            staff: []
        }
    },
    mounted() {
        this.$nextTick(() =>{
            axios.get("http://localhost:9200/staff/_search?size=25")
                .then(res => {
                    this.staff = res.data.hits.hits 
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
