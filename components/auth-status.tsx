import { getServerSession } from "next-auth/next";


export default async function AuthStatus() {
  const session = await getServerSession();
  return (
    session ?
      <div>
        {
          <p className="text-stone-900 text-sm">
            Logado como {session.user?.email}
          </p>
        }
      </div>
      :
      <div>
        {
          <a className="text-stone-900 text-sm" href="/login">
            Entrar em minha conta
          </a>
        }
      </div>
  )
}