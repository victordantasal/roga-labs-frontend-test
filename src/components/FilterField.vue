<template>
  <v-select
      color="accent"
      item-color="accent"
      :items="filters"
      v-model="indice"
      solo
    >
      <template v-slot:prepend>
        <span class="label black--text align-center">Filtros: </span>
      </template>
  </v-select>
</template>

<script>

  export default{
    props:{
      items: {
        type: Array,
        default: () => {
          return []
        }
      },
      filters: {
        type: Array,
        default: () => (
          [
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
          ])
      },
      index: {
        type: Number,
        default: 0
      }
    },

    data: () => ({
      indice: 0
    }),
    watch: {
      indice () {
        this.result()
      },
      items: {
        deep: true,
        handler () {
          this.result()
        }
      }
    },
    methods: {
      result() {
        const i = this.indice
        const rule = this.filters[i].rule

        const result = i < this.filters.length  && i >= 0 ?
          this.items.filter( rule ) :
          []
        this.$emit('result', result)
      }
    },
    mounted () {
      this.indice = this.index
      this.result()
    }
  }
</script>

<style scoped>
  .label {
    font-size: 1em;
    font-weight: bold;
  }
</style>
