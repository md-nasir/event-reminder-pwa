import { EventInterface } from '../../events/DataResolver/EventsDataResolver';
import axios from 'axios';
const endPoints = {
  'upcomingEvents': 'http://127.0.0.1:8000/api/v1/events/upcomming',
  'completedEvents': 'http://127.0.0.1:8000/api/v1/events/completed',
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
