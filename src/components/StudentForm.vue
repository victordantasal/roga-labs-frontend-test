<template>
  <v-card color="background" class="elevation-8">
    <!-- title bar [Cadastrar Aluno x ]-->
    <v-list-item class="accent" dark >
      <v-list-item-title>
        {{title}}
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
      class="pa-5"
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
        v-mask="'###'"
        :counter="3"
        :rules="rules.field"
        label="Idade"
        required
      ></v-text-field>

      <v-text-field
        color="accent"
        v-mask="(student.phoneNumber || '').length >= 15 ? '(##) #####-####' : '(##) ####-#####'"
        v-model="student.phoneNumber"
        :counter="16"
        :rules="rules.phone"
        label="Telefone"
        required
      ></v-text-field>

      <v-row class="mt-5 py-5" justify="space-between">
        <v-btn
        color="accent--text"
        @click="cancel"
      >Cancelar</v-btn>

        <v-btn
        :disabled="!valid"
        color="primary"
        @click="validate"
      >Salvar</v-btn>
      </v-row>
    </v-form>
  </v-card>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'student',
  props: {
    index: {
      type: Number,
    },
    title: {
      type: String,
      default: 'Cadastrar Aluno'
    },
    action: {
      type: Function,
      default: (context) => {
        context.$store.dispatch('students/addStudent', {...context.student})
      }
    }
  },
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
    cancel () {
        this.$emit('close')
    },
    validate () {
      if (this.$refs.form.validate()) {
        this.action(this)
        this.$emit('close')
      }
    },
    getStudent (index) {
      return this.all[index]
    }
  },
  mounted() {
    if (this.index >= 0) {
      console.log(this.index)
      this.student = {...this.getStudent(this.index)}
      this.editMode = true
    }
  }
}
</script>

<style>
</style>
