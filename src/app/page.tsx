import Link from "next/link";
import { ticketsPath } from "@/path";
import { Heading } from "@/components/heading";

const HomePage = () => {
  return (
    <div className="flex-1 flex flex-col gap-y-8">
      <Heading title="Home" description="Your home  to start" />
      <div className="flex-1 flex flex-col items-center">
        <Link href={ticketsPath()} className="underline">
          Go to Ticket
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
