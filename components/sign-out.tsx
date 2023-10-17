"use client";
import { signOut } from "next-auth/react";

export default function SignOut() {
  return (
    <button
      className="text-stone-900 hover:text-stone-500 transition-all"
      onClick={() => signOut()}
    >
      Deslogar-se!
    </button>
  );
}
