<template>
    <div id="staff">
        <v-content>
            <v-container>
                    <v-flex>
                        <v-jumbotron :src="img">
                            <v-container fill-height>
                                <v-layout align-content class="mt-5">
                                    <v-flex class="white--text" xs6 offset-xs3>
                                        <h3 class="background text-xs-left text-sm-center display-3">Staff</h3>
                                        <v-divider class="my-3"></v-divider>
                                        <div class="background title text-xs-left text-sm-center mb-3">View our staff index</div>
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </v-jumbotron>
                    </v-flex>
            </v-container>
        </v-content>   
    </div>
</template>

<script>
export default {
    data() {
        return {
            img: require('@/assets/jumbotron/staff.jpg')
        }
    }
}
</script>

<style scoped>
.background {
    background-color: rgba(0,0,0,.5);
}
</style>
