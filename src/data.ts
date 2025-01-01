export const initialTickets = [
    {
        id:"1",
        title:"Ticket 1",
        content:"This is first ticket.",
        status:"DONE" as const,
    },
    {
        id:"2",
        title:"Ticket 2",
        content:"This is second ticket.",
        status:"OPEN" as const,
    },
    {
        id:"3",
        title:"Ticket 3",
        content:"This is third ticket.",
        status:"IN_PROGRESS" as const,
    }
]