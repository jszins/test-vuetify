<template>
  <v-app>
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
              color="secondary"
              flat
              large
              dark
              active-class="disabled"
            >
              <v-list-tile-title v-text="item.title"></v-list-tile-title>
            </v-btn>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      app
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="mr-6 mt-4">
        <v-icon class="mr-2 mb-3" large>search</v-icon>
        <v-flex>
          <v-text-field class="mt-1"
            label="Search"
          ></v-text-field>
        </v-flex>
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
          name: 'home'
        },
        {
          icon: 'account_circle',
          title: 'User Page',
          name: 'user'
        },
        {
          icon: 'school',
          title: 'Schools',
          name:'school'
        },
        {
          icon: 'terrain',
          title: 'Regions',
          name: 'region'
        },
        {
          icon: 'directions_run',
          title: 'Activities',
          name: 'activity'
        }

      ],
      title: 'MSHSL'
    }
  }
}
</script>
