<template>
  <v-dialog v-model="dialog" persistent max-width="500">
    <template v-slot:activator="{ on }">
      <v-btn
      v-on="on"
      icon color="accent"
      class="mr-1"
      >
        <v-icon>edit</v-icon>
      </v-btn>
    </template>

    <student-form :action="action" :key="dialog" :index="index" title="Editar Aluno" @close="dialog = false"/>
  </v-dialog>
</template>

<script>
  import StudentForm from './StudentForm.vue'
  export default {
    components: {
      'student-form': StudentForm
    },
    props: {
      index: {
        type: Number,
        required: false
      }
    },
    data: () => ({
      dialog: false,
    }),
    methods: {
      action(context) {
        const index = context.index
        const student = context.student
        console.log(index, student)
        context.$store.dispatch('students/editStudent', {...student, index})
      }
    }

  }
</script>
