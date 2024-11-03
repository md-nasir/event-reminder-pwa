import * as types from './mutations-types';

// Declare a type for your state and events
type EventsState = {
  upcomingEvents: any[];
  completedEvents: any[];
};

const mutations = {
  [types.SET_UPCOMING_EVENTS](state: EventsState, response: { events: any[] }) {
    state.upcomingEvents = response.events;
  },
  [types.SET_COMPLETED_EVENT](state: EventsState,  response: { events: any[] }) {
    state.completedEvents = response.events;
  }
};

export default mutations;
