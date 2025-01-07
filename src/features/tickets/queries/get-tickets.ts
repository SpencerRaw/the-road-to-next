// import { initialTickets } from "@/data";
// import { Ticket } from "../types";

// export const getTickets = async ():Promise<Ticket[]> => {
//     await new Promise((resolve) => setTimeout(resolve,2000))
    
//     // throw new Error("Fail to fetch tickets")
//     return new Promise((resolve) => {
//         resolve(initialTickets);
//     })
// };

import {prisma} from '@/lib/prisma' 

export const getTickets = async () => {
    return await prisma.ticket.findMany({
        orderBy:{
            createdAt:"desc"
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