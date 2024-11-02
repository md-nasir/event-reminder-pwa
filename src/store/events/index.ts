import { Module, ModuleTree } from 'vuex';
import actions from '../events/actions';
import mutations from '../events/mutations';
import getters from '../events/getters';

const eventsStore: Module<any, any> = {
    namespaced: true,
    state: {
        upcomingEvents: [],
        completedEvents: {}
    },
    getters,
    mutations,
    actions
};
export const EventsModule: ModuleTree<any> = {
    events: eventsStore
};
