<template>
  <v-container class="home background shadow" fluid pa-0 mt-5>
    <!-- top whitebar over shadow effect -->
    <v-app-bar color="primary" dark max-height="64px" class="elevation-0 keepshadow px-2" >
      <div style="width:85%; position: relative; left:5%;" class="elevation-24">

        <v-list-item v-ripple class="user-info elevation-8" @click="profileBtn"
          style="position: relative; float:right; minWidth: 300px;">

          <v-list-item-avatar color="background" size="64px">
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
            <v-icon>{{ showProfile ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
          </v-list-item-action>
        </v-list-item>
      </div>
    </v-app-bar>

    <student-list/>
  </v-container>
</template>

<script>
import StudentList from "./StudentList"

export default {
  components: {
    'student-list': StudentList
  },
  name: 'Student',
  data: () => ({
    showProfile: false
  }),
  computed: {
    teacher() {
      return this.$store.state.teacher
    }
  },
  methods: {
    profileBtn () {
      this.showProfile = !this.showProfile

    }
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

  .container.shadow {
    box-shadow: 0px -2px 1px 0 rgba(100,150,217,0.75), 0px -3px 1px 0 grey,  0px 2px 1px 0 #6398DA, 0px 3px 1px 0 rgba(69,69,69,0.75)  !important;
  }


</style>
