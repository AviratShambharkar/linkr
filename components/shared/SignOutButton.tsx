// SignOutButton.tsx
"use client";

import { useClerk } from "@clerk/nextjs";
import Image from "next/image";

type SignOutButtonProps = {
  redirectUrl?: string; // Optional prop for redirect URL
};

export const SignOutButton = ({ redirectUrl = "/" }: SignOutButtonProps) => {
  const { signOut } = useClerk();

  return (
    <button
      onClick={() => signOut({ redirectUrl })}
      className="flex cursor-pointer gap-4 p-4"
    >
      <Image src="/assets/logout.svg" alt="logout" width={24} height={24} />
      <p className="text-light-2 max-lg:hidden">Logout</p>
    </button>
  );
};
