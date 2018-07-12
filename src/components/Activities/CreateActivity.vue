<template>
    <v-app dark>
        <v-content>
            <v-layout
                row
                align-center 
            >
                <v-flex class="text-xs-center" xs12 sm6 offset-sm3>
                    <h1>Temp Create Activity Page</h1>
                    <v-form ref="form">
                        <v-text-field
                            required
                            v-model="form.name"
                            label="Name"
                        ></v-text-field>
                        <v-text-field
                            required
                            v-model="form.info"
                            label="Info"
                            multi-line
                        ></v-text-field>
                        <v-text-field
                            required
                            v-model="form.location"
                            label="Location"
                        ></v-text-field>
                        <v-text-field
                            required
                            v-model="form.img"
                            label="Image"
                        ></v-text-field>
                        <v-btn @click="submit" :disabled="!formIsValid">submit</v-btn>
                        <v-btn @click="clear">clear</v-btn>
                    </v-form>
                </v-flex>
            </v-layout>
        </v-content>
    </v-app>
</template>

<script>
import { db } from '@/main.js'

export default {
    data: () => ({
        form: {
            name: '',
            info: '',
            location: '',
            img: '',  
        }
    }),
    computed: {
        formIsValid () {
            return this.form.name !== '' 
                && this.form.info !== '' 
                && this.form.location !== '' 
                && this.form.img !== '' 
        }
    },

    methods: {
        submit () {
            if (!this.formIsValid) {
                return
            }
            const activityData = {
                name: this.form.name,
                info: this.form.info,
                location: this.form.location,
                img: this.form.img
            }
            this.$store.dispatch('createActivity', activityData)
            this.$router.push('/activities')
        },
        clear () {
            this.$refs.form.reset()
        }
    }
}
</script>