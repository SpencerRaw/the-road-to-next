import { homePath, ticketsPath } from "@/path";
import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";
import { LucideAlignHorizontalSpaceAround } from "lucide-react";

const Header = () => {
  return (
    <nav
      className="
        supports-backdrop-blur:bg-background/60
        fixed left-0 right-0 top-0 z-20
        border-b bg-background/95 backdrop-blur
        w-full
        flex justify-between py-2.5 px-5
        "
    >
      <div>
        <Button asChild variant="ghost">
          <Link href={homePath()}>
            <LucideAlignHorizontalSpaceAround />
            <h1 className="ml-2 text-lg font-semibold">sleProdigy</h1>
          </Link>
        </Button>
      </div>
      <div>
        {/* <Button asChild variant="outline"> */}
        <Link
          href={ticketsPath()}
          className={buttonVariants({ variant: "default" })}
        >
          Tickets
        </Link>
        {/* </Button> */}
      </div>
    </nav>
  );
};

export { Header };
