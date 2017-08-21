<template>
  <div class = "RecordListItem">
    <span class = "RecordListItemLabel">
      {{ item.name }}
    </span>
    <span class  ="RecordListItemPhone">
      {{ item.phone }}
    </span>
  </div>
</template>

<script>
  export default {
    props: ['item']
  }
</script>

<style>
  .RecordListItem {
    border: 1px solid crimson;
    border-radius: 1px 1px 1px 1px;
    padding: 20px;
    margin-top: 3px;
    margin-bottom: 3px;
  }

  .RecordListItemLabel {
    font-size: 20px;
  }

  .RecordListItemPhone {
    font-size: 18px;
  }
</style>
