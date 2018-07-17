<template>
    <div id="search">
        <v-app light>
            <v-content>
                <v-form>
                    <v-container>
                        <v-layout row wrap>
                            <v-flex xs4 offset-xs4>
                                <v-text-field
                                    label="Search"
                                    single-line
                                    v-model="query"
                                ></v-text-field>
                            </v-flex>
                            <v-flex xs12 sm6>
                                <v-list two-line>
                                    <v-subheader>{{ staffHead }}</v-subheader>
                                    <v-btn
                                        round
                                        color="info"
                                        @click="toggleStaff"
                                    >
                                        Toggle
                                    </v-btn>
                                    <template 
                                        v-for="(result, i) in staffBuf"
                                        v-if="staffEnabler"
                                    >                                        
                                        <v-list-tile
                                            :key="i"
                                        >
                                        <v-list-tile-content>
                                            <v-list-tile-title v-html="result._source.Name"></v-list-tile-title>
                                            <v-list-tile-sub-title v-html="result._source.Position"></v-list-tile-sub-title>
                                        </v-list-tile-content>
                                        </v-list-tile>
                                    </template>
                                </v-list>
                            </v-flex>      
                            <v-flex xs12 sm6>
                                <v-list two-line>
                                    <v-subheader>{{ schoolHead }}</v-subheader>
                                    <v-btn 
                                        @click="toggleSchool" 
                                        color="info"
                                        round
                                    >
                                        Toggle
                                    </v-btn>
                                    <template 
                                        v-for="(result, i) in schoolBuf"
                                        v-if="schoolEnabler"
                                    >                                        
                                        <v-list-tile
                                            :key="i"
                                        >
                                        <v-list-tile-content>
                                            <v-list-tile-title v-html="result._source.Organization"></v-list-tile-title>
                                            <v-list-tile-sub-title v-html="result._source.Physical_City"></v-list-tile-sub-title>
                                        </v-list-tile-content>
                                            <v-btn round color="success" :to="{ name: 'schoolDetails', params: { id: result._id}}">
                                                <v-icon>forward</v-icon>
                                            </v-btn>
                                        </v-list-tile>
                                    </template>
                                </v-list>
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
            staff: [],
            staffBuf: [],
            schools: [],
            schoolBuf: [],
            staffEnabler: true,
            staffHead: 'Staff',
            schoolEnabler: true,
            schoolHead: 'Schools'
        }
    },
    methods: {
        search () {
            this.staffBuf = this.staff
            this.schoolBuf = this.schools
            if(this.query == ''){
                this.staffBuf = []
                this.schoolBuf = []
                return
            }  
            this.staff = []
            this.schools = []
            axios.get('http://localhost:9200/staff/_doc/_search?size=25&q=Name:' + this.query)
                .then(res => this.staff = res.data.hits.hits)
                .then(() => this.staffBuf = this.staff)
                .catch(err => alert(err))
            axios.get('http://localhost:9200/schools/_doc/_search?size=50&q=Organization:' + this.query)
                .then(res => this.schools = res.data.hits.hits)
                .then(() => this.schoolsBuf = this.schools)
                .catch(err => alert(err))
        },
        toggleStaff() {
            this.staffEnabler = !this.staffEnabler
            if(this.staffEnabler == true){
                this.staffHead = 'Staff'
            }
            else{
                this.staffHead = 'Staff - Disabled'
            }
        },
        toggleSchool() {
            this.schoolEnabler = !this.schoolEnabler
            if(this.schoolEnabler == true){
                this.schoolHead = 'Schools'
            }
            else{
                this.schoolHead = 'Schools - Disabled'
            }
        }
    },
    watch: {
        query() {
            this.search()
        }
    }
}
</script>
