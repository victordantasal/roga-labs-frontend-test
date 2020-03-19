<template>
  <v-row class="student-list mx-0 justify-sm-center justify-md-start">

    <!-- line breaker and spacer -->
    <v-col cols="12" class="my-5"/>

    <!-- search field -->
    <v-col cols="12" sm="6" md="4">
      <search-field :items="resultFilter" @result="resultSearch = $event"/>
    </v-col>

    <v-spacer/>

    <!-- filter field -->
    <v-col cols="12" sm="6" md="4" lg="3">
      <filter-field :filters="filters" :items="all" @result="resultFilter = $event"/>
    </v-col>

    <!-- add student button -->
    <v-col cols="12" sm="6" md="2">
      <add-student-btn />
    </v-col>


    <!-- line breaker  -->
    <v-col cols="12"/>

    <!-- students list -->
    <v-col xs="12" sm="6" md="4" lg="3" xl="2"  v-for="(student, index) in resultSearch" :key="student.id">
      <student-card :value="{...student, index}"/>
    </v-col>

    <!-- students info -->
    <v-col cols="12">
      <v-alert outlined type="info" class="accent--text" dark v-if="!hasStudents">
        Não há <strong>usuários</strong> cadastrados
      </v-alert>
      <v-alert outlined type="info" class="accent--text" dark v-else-if="!hasMatchedStudents">
        Não há <strong>usuários</strong> com os <strong>critérios</strong> de busca utilizado
      </v-alert>
    </v-col>
  </v-row>
</template>

<script>
import StudentCard from '@/components/StudentCard.vue'
import SearchField from '@/components/SearchField.vue'
import FilterField from '@/components/FilterField.vue'
import AddStudentBtn from '@/components/AddStudentBtn.vue'

import {mapState, mapGetters} from 'vuex'

export default {
  components: {
    'student-card': StudentCard,
    'search-field': SearchField,
    'filter-field': FilterField,
    'add-student-btn': AddStudentBtn
  },
  data: () => ({
    resultFilter: [],
    resultSearch: [],
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
    ...mapGetters('students', ['hasStudents']),

    hasMatchedStudents() {
      return (this.resultSearch || '').length > 0
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
