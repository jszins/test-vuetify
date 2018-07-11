<template>
    <v-app dark>  
        <v-content>
            <div class="text-lg-center">
                    <h1>Temp Create Region Page</h1>
            </div>
            <v-container>
                <v-layout
                row
                wrap
                >
                    <v-flex lg4 class="text-xs-center" pa-2>
                        <h1>Region A</h1>
                        <v-form ref="form" @submit="aSubmit">
                            <v-text-field
                            v-model="aForm.A"
                            label="A"
                            ></v-text-field>
                            <v-btn
                                @click="aSubmit"
                            >
                                submit
                            </v-btn>
                            <v-btn @click="clear">clear</v-btn>
                        </v-form>
                    </v-flex>
                    <v-flex lg4 class="text-xs-center" pa-2>
                        <h1>Region AA</h1>
                        <v-form ref="form" @submit="aaSubmit">
                            <v-text-field
                            v-model="aaForm.AA"
                            label="AA"
                            ></v-text-field>
                            <v-btn
                                @click="aaSubmit"
                            >
                                submit
                            </v-btn>
                            <v-btn @click="clear">clear</v-btn>
                        </v-form>
                    </v-flex>
                    <v-flex lg4 class="text-xs-center" pa-2>
                        <h1>Region AAA</h1>
                        <v-form ref="form" @submit="aaaSubmit">
                            <v-text-field
                            v-model="aaaForm.AAA"
                            label="AAA"
                            ></v-text-field>
                            <v-btn
                                @click="aaaSubmit"
                            >
                                submit
                            </v-btn>
                            <v-btn @click="clear">clear</v-btn>
                        </v-form>
                    </v-flex>
                </v-layout>
            </v-container>
            
        </v-content>
    </v-app>
</template>

<script>
import { db } from '@/main.js'

export default {
    data: () => ({
        aForm: {
            A: '',
        },
        aaForm: {
            AA: '',
        },
        aaaForm: {
            AAA: '',
        }
    }),

    methods: {
        aSubmit () {
            if (this.$refs.form.validate()) {
                db.collection('list-of-aRegions').add(this.aForm)
                    .then(() => alert('success'))
                    .catch(err => alert(err))
            }
        },
        aaSubmit () {
            if (this.$refs.form.validate()) {
                db.collection('list-of-aaRegions').add(this.aaForm)
                    .then(() => alert('success'))
                    .catch(err => alert(err))
            }
        },
        aaaSubmit () {
            if (this.$refs.form.validate()) {
                db.collection('list-of-aaaRegions').add(this.aaaForm)
                    .then(() => alert('success'))
                    .catch(err => alert(err))
            }
        },
        clear () {
            this.$refs.form.reset()
        }
    }
}
</script>