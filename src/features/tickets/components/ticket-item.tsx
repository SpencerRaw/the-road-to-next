import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ticketEditPath, ticketPath } from "@/path";
import Link from "next/link";
import { TICKET_ICONS } from "../constants";
// import { Ticket } from "../types";
import {
  LucideMoreVertical,
  LucidePencil,
  LucideSquareArrowOutUpRight,
  LucideTrash,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Ticket } from "@prisma/client";

import { deleteTicket } from "../actions/delete-ticket";
import { toCurrencyFromCent } from "@/utils/currency";
import { TicketMoreMenu } from "./ticket-more-menu";
import { useConfirmDialog } from "@/components/confirm-dialog";

type TicketItemProps = {
  ticket: Ticket;
  isDetail?: boolean;
};

const TicketItem = async ({ ticket, isDetail }: TicketItemProps) => {
  // const ticketPerTicketItem = await getTicket(ticket.id);
  const detailButton = (
    <Button variant={"outline"} asChild size="icon">
      <Link prefetch href={ticketPath(ticket.id)}>
        <LucideSquareArrowOutUpRight className="h-4 w-4" />
      </Link>
    </Button>
  );

  const editButton = (
    <Button variant="outline" size="icon" asChild>
      <Link prefetch href={ticketEditPath(ticket.id)}>
        <LucidePencil className="h-4 w-4" />
      </Link>
    </Button>
  );

  const moreMenu = (
    <TicketMoreMenu
      ticket={ticket}
      trigger={
        <Button variant="outline" size="icon">
          <LucideMoreVertical className="h-4 w-4" />
        </Button>
      }
    />
  );

  return (
    <div
      className="w-full flex space-x-1"
      style={{
        maxWidth: isDetail ? "580px" : "420px", // 根据 isDetail 动态设置 maxWidth
      }}
    >
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="flex gap-x-2">
            <span>{TICKET_ICONS[ticket.status]}</span>
            <span className="truncate">{ticket.title}</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <span
            style={{
              overflow: !isDetail ? "hidden" : "visible", // 详细页面时不隐藏
              display: !isDetail ? "-webkit-box" : "block", // 非详细页面使用 -webkit-box
              WebkitBoxOrient: !isDetail ? "vertical" : undefined, // 仅在非详细页面设置为 vertical
              WebkitLineClamp: !isDetail ? 3 : undefined, // 非详细页面限制为 3 行
              whiteSpace: "break-spaces", // 保持换行样式
            }}
          >
            {ticket.content}
          </span>
        </CardContent>
        <CardFooter className="flex justify-between">
          <p className="text-sm text-muted-foreground">{ticket.deadline}</p>
          <p className="text-sm text-muted-foreground">
            {toCurrencyFromCent(ticket.bounty)}
          </p>
        </CardFooter>
      </Card>
      <div className="flex flex-col gap-y-1">
        {isDetail ? (
          <>
            {editButton}
            {moreMenu}
          </>
        ) : (
          <>
            {detailButton}
            {editButton}
          </>
        )}
      </div>
    </div>
  );
};

export { TicketItem };
