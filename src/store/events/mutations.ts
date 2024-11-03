import * as types from './mutations-types';

// Declare a type for your state and events
type EventsState = {
  upcomingEvents: any[]; // Replace 'any' with a specific type if needed
  completedEvents: any[]; // Replace 'any' with a specific type if needed
};

// Update the mutations with explicit state type
const mutations = {
  [types.SET_UPCOMING_EVENTS](state: EventsState, response: { events: any[] }) {
    state.upcomingEvents = response.events; // Ensure response.events is an array
  },
  [types.SET_COMPLETED_EVENT](state: EventsState, event: any) {
    state.completedEvents.push(event); // Assuming completedEvents should be an array
  }
};

export default mutations;
