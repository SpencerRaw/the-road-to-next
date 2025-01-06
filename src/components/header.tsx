import { homePath, ticketsPath, signInPath, signUpPath } from "@/path";
import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";
import { LucideAlignHorizontalSpaceAround } from "lucide-react";
import { ThemeSwitcher } from "./theme/theme-switcher";

const Header = () => {
  const navItems = (
    <>
      <Link
        href={ticketsPath()}
        className={buttonVariants({ variant: "default" })}
      >
        Tickets
      </Link>
      <Link
        href={signUpPath()}
        className={buttonVariants({ variant: "outline" })}
      >
        Sign Up
      </Link>
      <Link
        href={signInPath()}
        className={buttonVariants({ variant: "outline" })}
      >
        Sign In
      </Link>
    </>
  );

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
      <div className="flex align-items gap-x-2">
        <Button asChild variant="ghost">
          <Link href={homePath()}>
            <LucideAlignHorizontalSpaceAround />
            <h1 className="ml-2 text-lg font-semibold">sleProdigy</h1>
          </Link>
        </Button>
      </div>
      <div className="flex align-items gap-x-2">
        <ThemeSwitcher />
        {navItems}
        {/* </Button> */}
      </div>
    </nav>
  );
};

export { Header };
