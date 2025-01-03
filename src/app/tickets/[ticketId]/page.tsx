import { TicketItem } from "@/features/tickets/components/ticket-item";
import { getTicket } from "@/features/tickets/queries/get-ticket";

import { notFound } from "next/navigation";

type TicketPageProps = {
  params: Promise<{
    ticketId: string;
  }>;
};

const TicketPage = async ({ params }: TicketPageProps) => {
  const { ticketId } = await params; // 解构并等待 params
  const ticket = await getTicket(ticketId);

  // const ticket = initialTickets.find((ticket) => ticket.id === ticketId);
  if (!ticket) {
    notFound();
  }

  return (
    <div className="flex justify-center animate-fade-in-from-top">
      {/* <h2 className="text-lg">{ticket.title}</h2>
      <p className="text-sm">{ticket.content}</p> */}
      <TicketItem ticket={ticket} isDetail />
    </div>
  );
};

export default TicketPage;
