<template>
    <v-app light>
        <v-content>
            <v-layout
            column
            align-center 
            >
                <v-flex class="text-xs-center">
                    <h1>Temp Create Activity Page</h1>
                    <v-form ref="form">
                        <v-text-field
                        v-model="form.name"
                        label="Name"
                        ></v-text-field>
                        <v-text-field
                        v-model="form.info"
                        label="Info"
                        ></v-text-field>
                        <v-text-field
                        v-model="form.location"
                        label="Location"
                        ></v-text-field>
                        <v-text-field
                        v-model="form.date"
                        label="Date"
                        ></v-text-field>
                        <v-text-field
                        v-model="key"
                        label="Key"
                        ></v-text-field>
                        <v-btn
                        @click="submit"
                        >
                            submit
                        </v-btn>
                        <v-btn @click="clear">clear</v-btn>
                    </v-form>
                </v-flex>
            </v-layout>
        </v-content>
    </v-app>
</template>

<script>
import { db } from '../../main.js'

export default {
    data: () => ({
        form: {
            name: '',
            info: '',
            location: '',
            date: '',
            key: ''    
        }
    }),

    methods: {
        submit () {
            if (this.$refs.form.validate()) {
                // Native form submission is not yet supported
                db.collection('list-of-activities').add(this.form)
                    .then(msg => alert('Object added to db'))
                    .catch(err => alert(err))
            }
        },
        clear () {
            this.$refs.form.reset()
        }
    }
}
</script>