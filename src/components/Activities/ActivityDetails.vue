<template>
<div id="activityDetails">
    <v-app dark>
        <section 
            v-for="(activity, index) in activities"
            :key="index"
        >
            <v-content 
            :key="index"
            v-if="index == id"
            >
                <v-layout>
                    <v-flex xs12 sm6 offset-sm3>
                        
                    </v-flex>
                </v-layout>
            </v-content>
        </section>      
    </v-app>
</div>
  
</template>

<script>
import { db } from '../../main.js'

export default {
    data() {
        return {
            activities: [],
            id: this.$route.params.id
        }
    },
    firestore() {
        return {
            activities: db.collection('list-of-activities')
        }
    }
}
</script>