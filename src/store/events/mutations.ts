import * as types from '@theme/store/events/mutations-types';
import {
  EventsStateInterface,
  EventsResponseInterface,
  EventInterface
} from './DataResolver/EventsDataResolver';
const mutations = {
  [types.SET_UPCOMING_EVENTS](
    state: EventsStateInterface,
    response: EventsResponseInterface
  ) {
    state.upcomingEvents = response.events;
  },
  [types.SET_COMPLETED_EVENT](
    state: EventsStateInterface,
    event: EventInterface
  ) {
    state.completedEvents = event;
  }
};
export default mutations;
