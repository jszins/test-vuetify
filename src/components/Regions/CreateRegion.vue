<template>
    <v-app light>
        <v-content>
            <v-layout
            column
            align-center 
            >
                <v-flex class="text-xs-center">
                    <h1>Temp Create Region Page</h1>
                    <v-form ref="form" @submit="submit">
                        <v-text-field
                        v-model="form.name"
                        label="Name"
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
import { db } from '@/main.js'

export default {
    data: () => ({
        form: {
            name: ''    
        }
    }),

    methods: {
        submit () {
            if (this.$refs.form.validate()) {
                db.collection('list-of-regions').add(this.form)
                    .then(() => this.$router.push('/regions'))
                    .catch(err => alert(err))
            }
        },
        clear () {
            this.$refs.form.reset()
        }
    }
}
</script>