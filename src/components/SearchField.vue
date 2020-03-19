<template>
  <v-text-field
    :placeholder="placeholder"
    solo
    append-icon="search"
    color="accent"
    v-model.lazy="keywords"
    >
  </v-text-field>
</template>
<script>
import _ from 'lodash'
  export default {
    props:{
      debounce: {
        type: Number,
        default: 500
      },
      placeholder: {
        type: String,
        default: 'Busque por nomes ou e-mails'
      },
      items: {
        type: Array,
        default: () => {
          return []
        }
      },
      search: {
        type: Function,
        default: (keywords, items) => {
          if (keywords == '' || !keywords)
            return items

          // create regExp with keywords
          const queryStr = new RegExp(keywords, 'gi')

          // select matched occurences
          const matched = items.filter(student => {
            return student &&
                  ((student.name || '').match(queryStr) ||
                  (student.email || '').match(queryStr) ||
                  (student.age || '').match(queryStr) ||
                  (student.phoneNumber || '').match(queryStr))
            })

          const highlighter = (originalMatchedString) => {
            return '<span class="highlight">' + originalMatchedString + '</span>'
          }

          // now we put highlight on strings are matched
          return matched.map(student => {
            return {
              ...student,
              name: (student.name || '').replace(queryStr, highlighter),
              email: (student.email || '').replace(queryStr, highlighter),
              age: (student.age || '').replace(queryStr, highlighter),
              phoneNumber: (student.phoneNumber || '').replace(queryStr, highlighter)
            }
          })
        }
      }
    },
    watch: {
      keywords() {
        this.debouncedResult()
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
        const result = this.search(this.keywords, this.items)
        this.$emit('result', result)
      }
    },
    data: () => ({
      keywords: ''
    }),
    mounted () {
      this.debouncedResult = _.debounce(this.result, this.debounce)
      this.result()
    }
  }
</script>
