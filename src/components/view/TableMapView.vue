<template>
  <div class="floor-plan">
    <h2>Saaliplaan</h2>

    <div class="grid">
      <div
          v-for="table in tables"
          :key="table.id"
          class="table-item"
          :class="{
          'available': table.status === 'available',
          'occupied': table.status === 'occupied',
          'recommended': table.status === 'recommended'
        }"
          @click="selectTable(table)"
      >
        <div class="table-number">Laud {{ table.number }}</div>
        <div class="seats">{{ table.capacity }} kohta</div>
      </div>
    </div>

    <p v-if="selectedTable">Valitud: Laud {{ selectedTable.number }} ({{ selectedTable.capacity }} kohta)</p>
  </div>
</template>

<script>
export default {
  name: 'TableView',
  data() {
    return {
      tables: [
        { id: 1, number: 1, capacity: 2, status: 'available', zone: 'indoor' },
        { id: 2, number: 2, capacity: 4, status: 'occupied', zone: 'indoor' },
        { id: 3, number: 3, capacity: 2, status: 'available', zone: 'terrace' },
        { id: 4, number: 4, capacity: 6, status: 'available', zone: 'private' },
        { id: 5, number: 5, capacity: 4, status: 'available', zone: 'indoor' },
        // Add more as needed (10–15 tables total for demo)
      ],
      selectedTable: null
    }
  },
  methods: {
    selectTable(table) {
      if (table.status !== 'occupied') {
        this.selectedTable = table;
        console.log('Valitud laud:', table);
      }
    }
  }
}
</script>

<style scoped>
.floor-plan {
  flex: 1;
  padding: 20px;
}
.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4 columns – adjust as you like */
  gap: 15px;
}
.table-item {
  background: #ddd;
  border: 2px solid #aaa;
  border-radius: 8px;
  padding: 15px;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s;
}
.table-item:hover {
  transform: scale(1.05);
}
.available { background: #d4edda; border-color: #28a745; }
.occupied { background: #f8d7da; border-color: #dc3545; cursor: not-allowed; }
.recommended { background: #fff3cd; border-color: #ffc107; box-shadow: 0 0 10px gold; }
</style>