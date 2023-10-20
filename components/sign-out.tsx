"use client";
import { signOut } from "next-auth/react";

export function ButtonSignOut({children}: {children?: string}) {
  return (
    <button
      className= {children}
      onClick={() => signOut()}
    >
    </button>
  );
}