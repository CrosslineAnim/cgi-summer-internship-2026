<template>
  <div class="home-page">
    <FiltersView @filters-submitted="handleSubmit" />
    <TableMapView :filters="currentFilters" />
  </div>
</template>

<script>
import TableMapView from "./view/TableMapView.vue";

export default {
  components: {TableMapView},
  data() {
    return {
      currentFilters: {}
    }
  },
  methods: {
    handleSubmit(filters) {
      this.currentFilters = filters;  // Pass to TableView, triggers update
    }
  }
}
</script>