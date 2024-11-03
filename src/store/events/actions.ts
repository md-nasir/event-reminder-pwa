import { EventsService } from '../events/DataResolver/EventsService';
import * as types from '../events/mutations-types';

const actions = {
  loadUpcomingEvents: async ({ commit }: { commit: Function }, page: number) => {
    const response = await EventsService.getUpcomingEvents(page);
    commit(types.SET_UPCOMING_EVENTS, response);
    return response;
  },
  loadCompletedEvents: async ({ commit }: { commit: Function }, page: number) => {
    const response = await EventsService.getCompletedEvents(page);
    commit(types.SET_COMPLETED_EVENT, response);
    return response;
  },
};

export default actions;
