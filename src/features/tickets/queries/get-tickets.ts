

import {prisma} from '@/lib/prisma' 
import { ParsedSearchParams } from '../search-params';

export const getTickets = async (
    userId: string | undefined,
    searchParams:ParsedSearchParams
) => {
    return await prisma.ticket.findMany({
        where:{
            userId,
            
                title: {
                contains: (searchParams).search,
                mode: "insensitive",
                // mode: "insensitive" as const,
              }
            ,
        },
        orderBy:{
            // createdAt:"desc"
            // ...(( searchParams).sort === "newest" && {createdAt: "desc"}),
            // ...(( searchParams).sort === "oldest" && {createdAt: "asc"}),
            // ...((searchParams).sort === "bounty" && {bounty: "desc"}),
            [searchParams.sortKey]: searchParams.sortValue,
        },
        include: {
            user: {
                select: {
                    username: true,
                }
            },
        }
    });
};