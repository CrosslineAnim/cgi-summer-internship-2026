<template>
  <div class="filters">
    <h2>Broneeri laud</h2>

    <div class="form-group">
      <label>Kuupäev</label>
      <input type="date" v-model="filters.date" />
    </div>

    <div class="form-group">
      <label>Kellaaeg</label>
      <input type="time" v-model="filters.time" />
    </div>

    <div class="form-group">
      <label>Inimeste arv</label>
      <select v-model="filters.guests">
        <option value="1-2">1-2 inimest</option>
        <option value="3-4">3-4 inimest</option>
        <option value="5+">5 või rohkem</option>
      </select>
    </div>

    <div class="form-group">
      <label>Tsoon</label>
      <select v-model="filters.zone">
        <option value="terrace">Terrass</option>
        <option value="indoor">Sisesaal</option>
        <option value="private">Privaatruum</option>
      </select>
    </div>

    <div class="preferences">
      <label>Eelistused:</label>
      <label><input type="checkbox" v-model="filters.preferences.window" /> Akna all</label>
      <label><input type="checkbox" v-model="filters.preferences.quiet" /> Vaikne nurk / privaatsus</label>
      <label><input type="checkbox" v-model="filters.preferences.accessible" /> Ligipääsetav</label>
    </div>

    <button @click="searchTables">Otsi parimat lauda</button>
  </div>
</template>

<script>
export default {
  name: 'FiltersView',
  data() {
    return {
      filters: {
        date: '',
        time: '',
        guests: '1-2',
        zone: 'indoor',
        preferences: {
          window: false,
          quiet: false,
          accessible: false
        }
      }
    }
  },
  methods: {
    searchTables() {
      // Later: send to backend or parent component
      console.log('Otsing: ', this.filters);
      this.$emit('search', this.filters);  // emit to parent (HomeView)
    }
  }
}
</script>

<style scoped>
.filters {
  background: #f8f8f8;
  padding: 20px;
  border-radius: 8px;
  max-width: 350px;
}
.form-group {
  margin-bottom: 15px;
}
label {
  display: block;
  margin-bottom: 5px;
}
button {
  background: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.preferences label {
  display: block;
  margin: 8px 0;
}
</style>