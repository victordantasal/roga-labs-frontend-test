<template>
  <v-row class="student-list mx-0 justify-sm-center justify-md-start">

    <!-- line breaker and spacer -->
    <v-col cols="12" class="my-5"/>

    <v-col cols="12" sm="6" md="4">
      <v-text-field
        placeholder="Busque por nomes ou e-mails"
        solo
        append-icon="search"
        color="accent"
        v-model.lazy="keywords"
        ></v-text-field>
    </v-col>

    <v-spacer/>

    <v-col cols="12" sm="6" md="4">
      <v-select
          color="accent"
          item-color="accent"
          :items="filters"
          v-model="filterIndex"
          solo
        >
          <template v-slot:prepend>
            <span class="label">Filtros: </span>
          </template>
      </v-select>
    </v-col>

    <v-col cols="12" sm="6" md="2">
      <v-btn @click="addStudent()" block class="pa-2" color="primary" height="48">
        <v-icon class="ml-2" left>person_add</v-icon>
        <span class="mr-2">novo aluno</span>
      </v-btn>
    </v-col>


    <!-- line breaker  -->
    <v-col cols="12"/>

    <v-col xs="12" sm="6" md="4" lg="3" xl="2"  v-for="(student, index) in students" :key="student.id">
      <student-card :value="{...student, index}"/>
    </v-col>

    <!-- line breaker and spacer -->
    <v-col cols="12" class="my-5 py-5"/>
  </v-row>
</template>

<script>
import StudentCard from '@/components/StudentCard.vue'
import {mapState} from 'vuex'

export default {
  components: {
    'student-card': StudentCard
  },
  data: () => ({
    filterIndex: 0,
    keywords: '',
    filters: [
      {
        text: 'Todos',
        value: 0,
        rule: (f) => f || true
      },
      {
        text: 'Ativos',
        value: 1,
        rule: (f) => f.active || false
      },
      {
        text: 'Inativos',
        value: 2,
        rule: (f) => !f.active && true
      }
    ]
  }),
  methods: {
    addStudent() {
      this.$router.push({path: '/form'})
    }
  },
  computed: {
    ...mapState('students', ['all']),

    students() {
      console.log('calculate')
      // first apply filter in all students
      const filtered = this.filterIndex < this.filters.length ?
        this.all.filter(this.filters[this.filterIndex].rule) :
        []

      const search = new RegExp(this.keywords, 'gi')


      if (this.keywords == '' && !this.keywords) {
        return filtered
      }
      // next step search
      const finded = filtered.filter(student => {
        return student &&
              ((student.name || '').match(search) ||
              (student.email || '').match(search) ||
              (student.age || '').match(search) ||
              (student.phoneNumber || '').match(search)
              )
      })
      // now we put highlight on strings are finded
      const replacer = '<span class="highlight">' + this.keywords + '</span>'
      return finded.map(fStudent => {
        return {
          ...fStudent,
          name: (fStudent.name || '').replace(search, replacer),
          email: (fStudent.email || '').replace(search, replacer),
          age: (fStudent.age || '').replace(search, replacer),
          phoneNumber: (fStudent.phoneNumber || '').replace(search, replacer)
        }
      })
    }
  }
}
</script>

<style lang="scss">
  .highlight {
    border-radius: 8px;
  }
  .row.student-list {
    left: 5%;
    width: 85%;
    position: relative;
  }
  span.label {
    font-size: 1em;
    font-weight: bold;
  }
</style>
