<template>
    <v-container class="student-form formBackground" fluid fill-height align="center">
      <v-row justify="center">
        <v-col xs="8" lg="6">
          <v-card color="background" class="elevation-8">
            <!-- title bar [Cadastrar Aluno x ]-->
            <v-list-item class="accent" dark >
              <v-list-item-title v-if="!editMode">
                Cadastrar Aluno
              </v-list-item-title>
              <v-list-item-title v-else>
                Editar Aluno
              </v-list-item-title>

              <v-list-item-action>
                <v-btn
                icon @click="cancel"
                >
                  <v-icon>close</v-icon>
                </v-btn>
              </v-list-item-action>
            </v-list-item>

            <v-form
              class="ma-5"
              ref="form"
              v-model="valid"
            >
              <v-text-field
                light
                color="accent"
                v-model="student.name"
                :counter="30"
                :rules="rules.field"
                label="Name"
                required
              ></v-text-field>

              <v-text-field
                color="accent"
                v-model="student.email"
                :counter="30"
                :rules="rules.email"
                label="E-mail"
                required
              ></v-text-field>

              <v-text-field
                color="accent"
                v-model="student.age"
                :counter="2"
                :rules="rules.field"
                label="Idade"
                required
              ></v-text-field>

              <v-text-field
                color="accent"
                mask="(##) # ####-####"
                v-model="student.phoneNumber"
                :counter="11"
                :rules="rules.phone"
                label="Telefone"
                required
              ></v-text-field>

              <v-row class="py-5 my-5" justify="space-between">
                <v-btn
                color="accent--text"
                class="mr-4"
                @click="cancel"
              >Cancelar</v-btn>

                <v-btn
                :disabled="!valid"
                color="primary"
                class="mr-4"
                @click="validate"
              >Salvar</v-btn>
              </v-row>
            </v-form>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
import {mapActions, mapState} from 'vuex'
export default {
  name: 'student',
  props: ['index'],
  data: () => ({
    valid: false,
    editMode: false,
    rules: {
      field: [
        v => !!v || 'Este campo é *obrigatório'
      ],
      phone: [
        v => !!v || 'Este campo é *obrigatório',
        v => (v || '').length > 10 || 'Telefone inválido'
      ],
      email: [
        v => !!v || 'E-mail é obrigatório',
        v => /.+@.+\..+/.test(v) || 'o E-mail deve ser válido ex: aluno@rogalabs.com',
      ]
    },
    student: {}

  }),
  computed: {
    ...mapState('students', ['all'])
  },
  methods: {
    ...mapActions('students', ['addStudent', 'editStudent']),
    cancel () {
        this.$router.push('/')
    },
    validate () {
      const student = this.student
      const index = this.index
      if (this.$refs.form.validate()) {
        if (this.editMode) {
          this.editStudent({...student, index})
        } else {
          this.addStudent({...student})
        }
          this.$router.push('/')
      }
    },
    getStudent (index) {
      return this.all[index]
    }
  },
  mounted() {
    console.log(this.index)
    if (this.index) {
      this.student = this.getStudent(this.index)
      this.editMode = true
    }
  }
}
</script>

<style>
</style>
