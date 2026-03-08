<template>
  <div class="home">
    <FiltersView @search="handleSearch" />
    <TableMapView ref="tableMapView" />
  </div>
</template>

<script>
import FiltersView from './FiltersView.vue'
import TableMapView from "./view/TableMapView.vue";

export default {
  components: { FiltersView, TableMapView },
  methods: {
    handleSearch(filters) {
      console.log('Filters saadud:', filters);
      // Later: call backend, then update TableMapView
      // For now just log
      this.$refs.tableMapView.tables.forEach(t => {
        t.status = Math.random() > 0.5 ? 'available' : 'occupied'; // fake update
      });
    }
  }
}
</script>

<style>
.home { display: flex; gap: 30px; padding: 20px; }
</style>