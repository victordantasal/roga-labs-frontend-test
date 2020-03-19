<template>
  <v-dialog v-model="dialog" eager persistent max-width="500">
      <!-- button add student -->
      <template v-slot:activator="{ on }">
        <v-btn block class="pa-2" color="primary" height="48"
        v-on="on"
        >
          <v-icon class="ml-2" left>person_add</v-icon>
          <span class="mr-2">novo aluno</span>
        </v-btn>
      </template>
      <!-- student form -->
      <student-form :key="dialog" @close="dialog = false"/>
    </v-dialog>
</template>

<script>
  import StudentForm from '@/components/StudentForm'
  export default {
    components: {
      'student-form': StudentForm
    },
    data: () => ({
      dialog: false
    })

  }
</script>
