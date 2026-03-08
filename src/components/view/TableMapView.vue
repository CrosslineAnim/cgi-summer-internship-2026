<template>
  <div class="floor-plan">
    <h2>Table Selection</h2>

    <div class="grid">
      <div
          v-for="table in tables"
          :key="table.id"
          class="table-item"
          :class="getTableClass(table)"
          @click="selectTable(table)"
      >
        <div class="table-number">Table {{ table.number }}</div>
        <div class="seats">{{ table.capacity }} seats</div>
      </div>
    </div>

    <div v-if="showModal" class="modal" :class="modalType">
      <p>{{ modalMessage }}</p>
      <button @click="closeModal">Close</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    filters: { type: Object, default: () => ({}) }  // Receive from parent (HomeView)
  },
  data() {
    return {
      tables: [  // Fake data based on your plan (different sizes, random states)
        { id: 1, number: 1, capacity: 2, status: 'available', category: '1-2' },
        { id: 2, number: 2, capacity: 4, status: 'occupied', category: '3-4' },
        { id: 3, number: 3, capacity: 2, status: 'available', category: '1-2' },
        { id: 4, number: 4, capacity: 6, status: 'not-available', category: '5+' },
        { id: 5, number: 5, capacity: 4, status: 'taken', category: '3-4' },
        // Add 10-15 more tables, mix categories and statuses
      ],
      selectedTable: null,
      showModal: false,
      modalMessage: '',
      modalType: 'success'  // or 'failure'
    }
  },
  methods: {
    getTableClass(table) {
      if (table.id === this.selectedTable?.id) return 'selected';  // Green if selected
      return table.status;  // yellow available, black not-available, red taken
    },
    selectTable(table) {
      if (table.status === 'available') {
        this.selectedTable = table;
        this.showModal = true;
        this.modalMessage = 'Success! Table ' + table.number + ' selected.';
        this.modalType = 'success';
      } else {
        this.showModal = true;
        this.modalMessage = 'Not available.';
        this.modalType = 'failure';
      }
    },
    closeModal() {
      this.showModal = false;
    },
    updateFromFilters() {
      // Functional: Update based on props.filters (fake for now)
      if (this.filters.visitors) {
        this.tables.forEach(t => {
          // Fake logic: make some available based on visitors
          t.status = (t.category === this.filters.visitors && Math.random() > 0.5) ? 'available' : 'not-available';
        });
      }
    }
  },
  watch: {
    filters: {  // Auto-update when filters change from parent
      handler: 'updateFromFilters',
      deep: true
    }
  }
}
</script>