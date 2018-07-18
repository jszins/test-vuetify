<template>
  <v-app light>
    <v-navigation-drawer
      persistent
      v-model="drawer"
      enable-resize-watcher
      fixed
      app
    >
      <v-list>
        <v-list-tile
          value="true"
          v-for="(item, i) in items"
          :key="i"
        >
          <v-list-tile-action>
            <v-icon large v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-btn 
              :to="{ name: item.name }" 
              color="primary"
              flat
              large
              light
              active-class="disabled"
              @click="drawer = !drawer"
            >
              <v-list-tile-title v-text="item.title"></v-list-tile-title>
            </v-btn>            
          </v-list-tile-content>
        </v-list-tile>
        <v-btn 
          @click.stop="drawer = !drawer" 
          color="error" 
          raised 
          left
        >
          Close
        </v-btn>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      app
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer" class="hidden-md-and-up"></v-toolbar-side-icon>
      <v-btn 
        flat 
        :to="{ name: 'home' }"
        active-class="disabled"
      >
        <v-toolbar-title v-text="title"></v-toolbar-title>
      </v-btn>
      
      <v-spacer></v-spacer>
      <v-toolbar-items 
        class="hidden-sm-and-down"
        v-for="item in items"
        :key="item.title"
      >
        <v-tooltip bottom>
          <v-btn
            active-class="disabled"
            flat 
            slot="activator"
            :to="{ name: item.name }"
          >
            <v-icon 
              class="mr-2" 
              color="primary" 
              large
            >
              {{ item.icon }}
            </v-icon>
          </v-btn>
          <span>{{ item.msg }}</span>
        </v-tooltip>
          
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <router-view></router-view>
    </v-content>
    <v-footer :fixed="fixed" app>
      <span>&copy; 1994-2018</span>
    </v-footer>
  </v-app>
</template>

<script>
import Home from './components/Home'

export default {
  name: 'App',
  components: {
    Home
  },
  data () {
    return {
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'home',
          title: 'Home',
          name: 'home',
          msg: 'Back to Home'
        },
        {
          icon: 'account_circle',
          title: 'Sign In',
          name: 'signIn',
          msg: 'Sign In'
        },
        {
          icon: 'school',
          title: 'Schools',
          name:'schools',
          msg: 'View Schools'
        },
        {
          icon: 'terrain',
          title: 'Regions',
          name: 'region',
          msg: 'View Regions'
        },
        {
          icon: 'stars',
          title: 'Tournaments',
          name: 'tournaments',
          msg: 'View Tournaments'
        },
        {
          icon: 'directions_run',
          title: 'Activities',
          name: 'activity',
          msg: 'View Activities'
        },
        {
          icon: 'search',
          title: 'Find',
          name: 'search',
          msg: 'Find'
        }
      ],
      title: 'MSHSL'
    }
  }
}
</script>
