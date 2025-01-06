// import { prisma } from "@/lib/prisma";
import { getTickets } from "../queries/get-tickets";
import { TicketItem } from "./ticket-item";

const TicketList = async () => {
  const tickets = await getTickets();
  // const tickets = await prisma.ticket.findMany();

  return (
    <div className="flex-1 flex flex-col items-center space-y-4 animate-fade-in-from-top">
      {tickets.map((ticket) => (
        <TicketItem key={ticket.id} ticket={ticket} />
      ))}
    </div>
  );
};

export { TicketList };
