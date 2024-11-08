import { EventInterface } from '../../events/DataResolver/EventsDataResolver';
import axios from 'axios';
const endPoints = {
  'upcomingEvents': `${process.env.VUE_APP_API_BASE_URL}/api/v1/events/upcomming`,
  'completedEvents': `${process.env.VUE_APP_API_BASE_URL}/api/v1/events/completed`
}
const getUpcomingEvents = async (page: number): Promise<EventInterface[]> => {
  let response = await axios.get(
      endPoints.upcomingEvents
  );
  return response.data.data;
};

const getCompletedEvents = async (page: number): Promise<EventInterface[]> => {
  let response = await axios.get(
      endPoints.completedEvents
  );
  return response.data.data;
};

export const EventsService = {
  getUpcomingEvents,
  getCompletedEvents
};
