import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ticketPath } from "@/path";
import Link from "next/link";
import { TICKET_ICON } from "../constants";
import { Ticket } from "../types";

type TicketItemProps = {
  ticket: Ticket;
};

const TicketItem = ({ ticket }: TicketItemProps) => {
  return (
    <Card
      className="w-full max-w-[420px]"
      // className="w-full max-w-[420px] p-4 border border-slate-100 rounded"
    >
      <CardHeader>
        <CardTitle className="flex gap-x-2">
          <span>{TICKET_ICON[ticket.status]}</span>
          <span className="truncate">{ticket.title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <span
          // className={clsx("text-sm text-slate-500 truncate", {"line-through": ticket.status === "DONE",})}
          className="line-clamp-3 whitespace-break-spaces"
        >
          {ticket.content}
        </span>
      </CardContent>
      <CardFooter>
        <Link href={ticketPath(ticket.id)} className="text-sm underline">
          View
        </Link>
      </CardFooter>
    </Card>
  );
};

export { TicketItem };
