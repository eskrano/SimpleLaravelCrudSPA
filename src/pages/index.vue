<template>
  <div>
    <InputField/>
    <RecordListContainer :items = "records"/>
  </div>
</template>

<script>
  import InputField from '../components/InputField.vue'
  import RecordListContainer from '../components/RecordListContainer.vue'

  export default {
    data: () => ({
      records: null
    }),
    components: {
      InputField, RecordListContainer
    },
    created () {
      this.loadData()
    },
    methods: {
      loadData () {
        this.$http.get('record').then(
          (response) => {
            this.records = response.data
          },
          (error) => {
            console.error('Error load data' + error)
          }
        )
      }
    }
  }
</script>
