import UpcomingEvents from '../components/Event/UpcomingEvents';
import CompletedEvents from '../components/Event/CompletedEvents';
import HomeComponent from '../components/HomeComponent';

const routes = [
    {
        name: 'home',
        path: '/',
        component: HomeComponent
    },
    {
        name: 'upcoming-events',
        path: '/upcoming-events',
        component: UpcomingEvents
    },
    {
        name: 'completed-events',
        path: '/completed-events',
        component: CompletedEvents
    }
];

export default routes;
