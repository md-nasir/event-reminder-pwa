export interface EventsStateInterface {
  upcomingEvents: EventInterface[];
  completedEvents: EventInterface;
}

export interface EventInterface {
  id: number;
  title: string;
  start_date: Date;
  end_date: Date;
  description: string;
}

export interface EventsResponseInterface {
  events: EventInterface[];
  pagination: {
    total: number;
  };
}
