import './App.scss';
import data from './tickets.json';
import TicketCard from './components/TicketCard';
import { useMemo } from 'react';
import FilterStore from './stores/FilterStore.ts';
import { observer } from 'mobx-react-lite';
import FilterBlock from './components/FilterBlock';

function App() {
  const filtered = useMemo(() => {
    let tickets: ITicket[] = data.tickets;

    if (FilterStore.stops.length) {
      tickets = tickets.filter((ticket) => FilterStore.stops.includes(ticket.stops));
    }

    return tickets;
  }, [FilterStore.stops]);

  return (
    <div className="main-page">
      <FilterBlock />

      <div className="tickets-wrap">
        {filtered
          .sort((a, b) => a.price - b.price)
          .map((ticket, index) => (
            <TicketCard key={index} {...ticket} />
          ))}
      </div>
    </div>
  );
}

export default observer(App);
