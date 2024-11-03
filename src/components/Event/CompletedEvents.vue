<template>
  <div>
    <div v-for="event in completedEvents" :key="event.id" class="item-box">
      <h4>{{ event.title }}</h4>
      <p>{{ event.description }}</p>
      <p>{{ event.start_date }} {{ event.start_time }}</p>
      <p>{{ event.location }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters('events', {
      completedEvents: 'getCompletedEvents', // Ensure this is the correct path to your getter
    }),
  },
  async created() {
    await this.$store.dispatch('events/loadCompletedEvents'); // Ensure this is the correct path to your action
  },
};
</script>

<style>
.item-box {
  display: inline-block;
  width: 300px;
  min-height: 150px;
  background: #eee;
  padding: 2px 5px;
  margin: 10px;
}
</style>
