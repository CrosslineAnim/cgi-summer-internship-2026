<template>
  <div class="home-page">
    <h1>Restorani laua broneerimine</h1>

    <FiltersView />

    <TableView />

  </div>
</template>

<script>
import FiltersView from '@/views/FiltersView.vue'
import TableView from '@/views/TableView.vue'

export default {
  name: 'HomeView',
  components: {
    FiltersView,
    TableView
  }
}
</script>
