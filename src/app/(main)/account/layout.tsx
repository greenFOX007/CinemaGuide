import AccountNav from "@/components/AccountNav/AccountNav";
import RequireAuth from "@/components/RequireAuth/RequireAuth";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <RequireAuth>
      <div className="">
        <h1 className="text-5xl font-bold mb-16 ">Мой аккаунт</h1>
        <AccountNav />
        {children}
      </div>
    </RequireAuth>
  );
}
