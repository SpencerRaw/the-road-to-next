import Link from "next/link";
import { ticketsPath } from "@/path";

const HomePage = () => {
  return (
    <div>
      <h2 className="text-lg">Home Page</h2>
      <Link href={ticketsPath()} className="underline">
        Go to Ticket
      </Link>
    </div>
  );
};

export default HomePage;
