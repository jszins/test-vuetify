<template>
    <div id="region">
        <v-app dark>
            <v-content>
                <v-jumbotron :src="img" light>
                    <v-container fill-height>
                        <v-layout align-content class="mt-5">
                            <v-flex class="white--text">
                                <h3 class="text-sm-left text-lg-center display-3">Regions</h3>
                                <v-divider class="my-3"></v-divider>
                                <div class="title text-sm-left text-lg-center mb-3">Click a region to view its related content</div>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-jumbotron>
                <v-flex xs12>
                    <v-container>
                        <v-layout row wrap>
                            <v-flex xs12 lg4 mb-3 pa-2>
                                    <v-expansion-panel
                                        dark
                                        expand
                                    >
                                        <v-expansion-panel-content
                                            v-for="(region, i) in aRegions"
                                            :key="i"
                                        >
                                            <div slot="header" class="font-weight-regular headline text-xs-left text-lg-center">{{ region.A }}A</div>
                                            <v-card>
                                                <v-container fluid>
                                                    <v-layout row wrap>
                                                        <v-flex xs12>
                                                            <template v-for="(activity, i) in activities">
                                                                <v-card-actions 
                                                                    :key="activity.name"
                                                                    class="grey"
                                                                >
                                                                    <v-btn block flat color="black">
                                                                        {{ activity.name }}
                                                                        <v-icon right>arrow_forward</v-icon> 
                                                                    </v-btn>                                                                    
                                                                </v-card-actions>
                                                                <v-divider :key="i"></v-divider>
                                                            </template>                                                        
                                                        </v-flex>
                                                    </v-layout>
                                                </v-container>                                                
                                            </v-card>
                                        </v-expansion-panel-content>
                                    </v-expansion-panel>
                                </v-flex>
                                <v-flex xs12 lg4 mb-3 pa-2>
                                    <v-expansion-panel
                                        dark
                                        expand
                                    >
                                        <v-expansion-panel-content
                                            v-for="(region, i) in aaRegions"
                                            :key="i"
                                        >
                                            <div slot="header" class="font-weight-regular headline text-xs-left text-lg-center">{{ region.AA }}AA</div>
                                            <v-card>
                                                <v-container fluid>
                                                    <v-layout row wrap>
                                                        <v-flex xs12>
                                                            <template v-for="(activity, i) in activities">
                                                                <v-card-actions 
                                                                    :key="activity.name"
                                                                    class="grey"
                                                                >
                                                                    <v-btn block flat color="black">
                                                                        {{ activity.name }}
                                                                        <v-icon right>arrow_forward</v-icon> 
                                                                    </v-btn>                                                                    
                                                                </v-card-actions>
                                                                <v-divider :key="i"></v-divider>
                                                            </template>                                                        
                                                        </v-flex>
                                                    </v-layout>
                                                </v-container>                                                
                                            </v-card>
                                        </v-expansion-panel-content>
                                    </v-expansion-panel>
                                </v-flex>
                                <v-flex xs12 lg4 mb-3 pa-2>
                                    <v-expansion-panel
                                        dark
                                        expand
                                    >
                                        <v-expansion-panel-content
                                            v-for="(region, i) in aaaRegions"
                                            :key="i"
                                        >
                                            <div slot="header" class="font-weight-regular headline text-xs-left text-lg-center">{{ region.AAA }}AAA</div>
                                            <v-card>
                                                <v-container fluid>
                                                    <v-layout row wrap>
                                                        <v-flex xs12>
                                                            <template v-for="(activity, i) in activities">
                                                                <v-card-actions 
                                                                    :key="activity.name"
                                                                    class="grey"
                                                                >
                                                                    <v-btn block flat color="black">
                                                                        {{ activity.name }}
                                                                        <v-icon right>arrow_forward</v-icon> 
                                                                    </v-btn>                                                                    
                                                                </v-card-actions>
                                                                <v-divider :key="i"></v-divider>
                                                            </template>                                                        
                                                        </v-flex>
                                                    </v-layout>
                                                </v-container>                                                
                                            </v-card>
                                        </v-expansion-panel-content>
                                    </v-expansion-panel>
                                </v-flex>
                        </v-layout>
                    </v-container>
                </v-flex>
            </v-content>
        </v-app>
    </div>
</template>

<script>

export default {
    data() {
        return {
            img: require('@/assets/jumbotron/regions.jpg'),
        }
    }
}
</script>
