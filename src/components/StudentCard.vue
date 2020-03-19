<template>
  <v-card class="student-card pt-5 pb-1 ma-0"
    min-height="150px"
    :disabled="!value.active"
    :class="value.active ? 'elevation-4' : 'disabled elevation-0'"
    width="300px">
    <v-list-item class="user-info">
      <v-list-item-avatar class="mr-2" size="64px" color="accent">
        <v-img
        src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
        ></v-img>
      </v-list-item-avatar>

      <v-list-item-content dark>
        <v-list-item-title
          v-html="value.name"/>

        <v-list-item-subtitle
          class="black--text" v-html="'Última avaliação:' + value.lastExam"/>
      </v-list-item-content>

    </v-list-item>
    <v-divider class="my-1"/>
    <v-card-actions>
      <!-- some student info -->
      <v-list-item two-line class="ma-0 pr-0">
        <v-list-item-content style="maxWidth:200px;">
          <v-list-item-subtitle v-html="value.email"/>
          <v-list-item-subtitle v-html="value.age + ' anos ' + value.phoneNumber"/>
        </v-list-item-content>
        <!-- buttons -->
        <v-col cols="5" class="pa-0"
          align="center"
          justify="end"
          >
          <!-- edit button -->

          <edit-student-btn :index="value.index"/>

          <!-- more button dropdown -->
          <v-menu offset-y>
            <template v-slot:activator="{ on }">
              <v-btn
              icon small
              color="accent"
              v-on="on"
              >
                <v-icon>more_horiz</v-icon>
              </v-btn>
            </template>

            <v-list>
              <v-list-item
                v-if="value.active"
                @click="setActive({index: value.index, active: false})"
              >
                <v-list-item-title>Desativar</v-list-item-title>
              </v-list-item>

              <v-list-item
                v-else
                @click="setActive({index: value.index, active: true})"
              >
                <v-list-item-title>Ativar</v-list-item-title>
              </v-list-item>

              <v-list-item
                @click="deleteStudent({index: value.index})"
              >
                <v-list-item-title class="primary--text">Deletar <v-icon>close</v-icon></v-list-item-title>
              </v-list-item>

            </v-list>
          </v-menu>
        </v-col>
      </v-list-item>
    </v-card-actions>
  </v-card>
</template>

<script>
  import EditStudentBtn from './EditStudentBtn.vue'
  import {mapActions} from 'vuex'
  export default {
    components: {'edit-student-btn': EditStudentBtn},
    name: 'studentCard',
    props: ['value'],
    data: () => ({
      dialog: false
    }),
  methods: {
    ...mapActions('students', ['deleteStudent', 'setActive']),
    edit (index) {
      this.$router.push('/form/'+index)
    }
  }
}
</script>

<style>
</style>
