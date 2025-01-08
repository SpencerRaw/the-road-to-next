"use client";

import { homePath, ticketsPath, signInPath, signUpPath } from "@/path";
import Link from "next/link";
import { Button, buttonVariants } from "../../components/ui/button";
import { LucideAlignHorizontalSpaceAround, LucideLogOut } from "lucide-react";
import { ThemeSwitcher } from "../../components/theme/theme-switcher";
import { SubmitButton } from "../../components/form/submit-button";
import { signOut } from "@/features/auth/actions/sign-out";
import { useAuth } from "@/features/auth/hooks/use-auth";
import { AccountDropdown } from "./account-dropdown";

const Header = () => {
  const { user, isFetched } = useAuth();

  if (!isFetched) {
    return null;
  }

  const navItems = user ? (
    <AccountDropdown user={user} />
  ) : (
    <>
      <Link
        href={signUpPath()}
        className={buttonVariants({ variant: "outline" })}
      >
        Sign Up
      </Link>
      <Link
        href={signInPath()}
        className={buttonVariants({ variant: "default" })}
      >
        Sign In
      </Link>
    </>
  );

  return (
    <nav
      className="
        animate-header-from-top
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
