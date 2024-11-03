import {
  EventsStateInterface,
  EventInterface
} from '../events/DataResolver/EventsDataResolver';

const getters = {
  getUpcomingEvents: (state: EventsStateInterface): EventInterface[] => state.upcomingEvents,
  getCompletedEvents: (state: EventsStateInterface): EventInterface[] => state.completedEvents,
};

export default getters;
