<template>
    <div id="admin">
        <v-app dark>
            <v-content>
                <v-layout
                column
                align-center 
                >
                    <v-flex class="text-xs-center">
                        <h1>Admin Sign In Page</h1>
                        <v-form ref="form" @submit="submit">
                            <v-text-field
                            ref="name"
                            required
                            :rules="[() => !!name || 'This field is required']"
                            v-model="form.email"
                            label="Email"
                            ></v-text-field>
                            <v-text-field
                            ref="password"
                            required
                            :rules="[() => !!password || 'This field is required']"
                            v-model="form.password"
                            type="password"
                            label="Password"
                            ></v-text-field>
                            <v-btn
                                round
                                color="primary"
                                @click="submit"
                            >
                                Sign In
                            </v-btn>
                            <v-btn
                                round 
                                @click="clear"
                                color="error"
                            >
                                clear
                            </v-btn>
                        </v-form>
                    </v-flex>
                </v-layout>
            </v-content>
        </v-app>
    </div>      
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'

export default {
    data: () => ({
        form: {
            email: '',
            password: ''    
        }
    }),

    methods: {
        submit () {
            if (this.$refs.form.validate()) {
                firebase.auth().signInWithEmailAndPassword(this.form.email, this.form.password)
                    .then(() => alert('sign in successful'))
                    .catch(err => alert(err))
            }
        },
        clear () {
            this.$refs.form.reset()
        }
    }
}
</script>
