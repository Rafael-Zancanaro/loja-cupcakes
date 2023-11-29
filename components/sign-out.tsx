"use client";
import { signOut } from "next-auth/react";
import { ButtonHTMLAttributes, PropsWithChildren } from "react";
import React from "react";

export function ButtonSignOut({
  className,
  children,
}: PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>) {
  return (
    <button className={className} onClick={() => signOut()}>
      {children}
    </button>
  );
}
