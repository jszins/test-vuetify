<template>
    <div id="activity">
        <v-app light>
            <v-content>
                <v-container>
                    <v-flex>
                        <v-jumbotron :src="img">
                            <v-container fill-height>
                                <v-layout align-content class="mt-5">
                                    <v-flex class="white--text" xs12 sm6 offset-sm3>
                                        <h3 class="background mb-2 text-xs-center display-3">Activities</h3>
                                        <v-divider class="my-3"></v-divider>
                                        <div class="background title text-xs-center mb-3">List of all activities!</div>
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </v-jumbotron>
                    </v-flex>
                </v-container>
            </v-content>
        </v-app>
    </div>
</template>

<script>

export default {
    data() {
        return {
            img: require('@/assets/jumbotron/activities.jpg')
        }
    },
}
</script>

<style scoped>
.background {
    background-color: rgba(0,0,0,.5);
}
</style>
