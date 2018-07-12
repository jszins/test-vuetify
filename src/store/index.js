import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        loadedActivities: [
            {
                img:"http://www.latimes.com/resizer/boPAHJzXKluVeJpGY-6-wtSnEyY=/1400x0/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/7C7UH6FIDZE5PMMIJGC37GU4ZI.jpg",
                info:"Swing batter batter",
                location:"Target Field",
                name:"Baseball",
                id:"djskaldaljdkls"
            },
            {
                img:"https://www.pineridgegc.com/static/images/event_promo_box_golfcourseBG.jpg",
                info:"Phil Mickelson",
                location:"Augusta",
                name:"Golf",
                id:"fdsadhfds"
            },
            {
                img:"https://cdn4.sportngin.com/attachments/photo/2596/3948/fb_td_pic.jpeg",
                info:"We're kinda bad at it",
                location:"10001 Hookie Lane",
                name:"Football",
                id:"fhgdsuajkl" 
            },
            {
                img:"https://nulltx.com/wp-content/uploads/2015/07/debate.jpg",
                info:"Michael John Keprios Everett",
                name:"Debate",
                location:"Who cares",
                id:"fdhakjbavcx"
            }
        ],
        admin: {
            id:"dfashfcdsa",
        }
    },
    mutations: {},
    actions: {},
    getters: {
        loadedActivities (state) {
            return state.loadedActivities.sort((activityA, activityB) => {
                return activityA.name > activityB.name
            })
        },
        loadedActivity (state) {
            return (activityId) => {
                return state.loadedActivities.find(activity => {
                    return activity.id == activityId
                })
            }
        }
    }
})