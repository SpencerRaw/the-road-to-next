import clsx from "clsx";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ticketPath } from "@/path";
import Link from "next/link";
import { TICKET_ICON } from "../constants";
import { Ticket } from "../types";
import { LucideSquareArrowOutUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

type TicketItemProps = {
  ticket: Ticket;
  isDetail?: boolean;
};

const TicketItem = ({ ticket, isDetail }: TicketItemProps) => {
  const detailButton = (
    <Button variant={"outline"} asChild size="icon">
      <Link href={ticketPath(ticket.id)}>
        <LucideSquareArrowOutUpRight className="h-4 w-4" />
      </Link>
    </Button>
  );

  return (
    <div
      className="w-full flex gap-x-1"
      style={{
        maxWidth: isDetail ? "580px" : "420px", // 根据 isDetail 动态设置 maxWidth
      }}
    >
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="flex gap-x-2">
            <span>{TICKET_ICON[ticket.status]}</span>
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
      </Card>
      {isDetail ? null : (
        <div className="flex flex-col gap-y-1">{detailButton}</div>
      )}
    </div>
  );
};

export { TicketItem };
