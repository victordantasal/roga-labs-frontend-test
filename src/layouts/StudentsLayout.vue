<template>
  <v-container class="students-layout background" fluid pa-0>

    <!-- toolbar -->
    <v-app-bar color="primary" dark max-height="64px" class="elevation-0 keepshadow px-2" >
      <div style="width:85%; position: relative; left:5%;" class="elevation-24">

        <!-- profile button -->
        <v-menu offset-y right>
          <template v-slot:activator="{ on }">
            <v-list-item v-ripple class="user-info elevation-8" v-on="on" @click="chevronToggle = !chevronToggle"
              style="position: relative; float:right; minWidth: 300px;">

              <v-list-item-avatar color="background" size="48px">
                <v-img
                  src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                ></v-img>
              </v-list-item-avatar>

              <v-list-item-content dark>
                <v-list-item-title>{{teacher.name}}</v-list-item-title>
                <v-list-item-subtitle>Último login: {{teacher.lastLogin}}</v-list-item-subtitle>
              </v-list-item-content>

              <v-divider vertical class="mx-2 my-0"/>
              <v-list-item-action>
                <v-icon>{{ chevronToggle ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
              </v-list-item-action>
            </v-list-item>
          </template>
          <v-list>
            <v-list-item
              @click="deleteStudent({index: value.index})"
            >
              <v-list-item-title class="primary--text">Sair</v-list-item-title>
              <v-list-item-action><v-icon>mdi-logout</v-icon></v-list-item-action>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </v-app-bar>

    <!-- call views -->
    <v-content>
      <router-view/>
    </v-content>
  </v-container>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'StudentsLayout',
  data: () => ({
    chevronToggle: false
  }),
  computed: {
    ...mapState(['teacher'])
  }
}
</script>

<style lang="scss">
  .v-toolbar__content {
    padding: 0;
  }
  .keepshadow{
    overflow: hidden;
  }
</style>
