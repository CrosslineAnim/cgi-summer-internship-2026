<template>
  <div class="filters">
    <h1>Restorani laua broneerimine</h1>  <!-- Your opening page heading -->

    <div class="form-group">
      <label>Location</label>
      <select v-model="form.location">
        <option value="terrace">Terrace</option>
        <option value="main">Main</option>
        <option value="private">Private</option>
      </select>
    </div>

    <div class="form-group">
      <label>Date</label>
      <input type="date" v-model="form.date" min="2026-03-01" max="2026-03-30" />  <!-- Your plan: 1-30 days -->
    </div>

    <div class="form-group">
      <label>Time</label>
      <input type="time" v-model="form.time" min="11:00" max="17:00" />  <!-- Your plan: 11:00-17:00 -->
    </div>

    <div class="form-group">
      <label>Number of Visitors</label>
      <select v-model="form.visitors">
        <option value="1-2">1-2</option>
        <option value="3-4">3-4</option>
        <option value="5+">5+</option>
      </select>
    </div>

    <div class="preferences">
      <label>Options:</label>
      <label><input type="checkbox" v-model="form.options.window" /> Near Window</label>
      <label><input type="checkbox" v-model="form.options.quiet" /> Quiet Corner / Privacy</label>
      <label><input type="checkbox" v-model="form.options.accessible" /> Accessible</label>
      <!-- Add more options if needed, e.g. kids area -->
    </div>

    <button @click="submitFilters">Search</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        location: 'main',
        date: '',
        time: '',
        visitors: '1-2',
        options: {
          window: false,
          quiet: false,
          accessible: false
        }
      }
    }
  },
  methods: {
    submitFilters() {
      // Functional: Log data, emit to parent (HomeView.vue) for table update
      console.log('Filters submitted:', this.form);
      this.$emit('filters-submitted', this.form);  // Makes it functional - parent can use this to update TableView
    }
  }
}
</script>