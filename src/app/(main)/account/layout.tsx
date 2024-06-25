import AccountNav from "@/components/AccountNav/AccountNav";
import RequireAuth from "@/components/RequireAuth/RequireAuth";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <RequireAuth>
      <div className="mt-[160px] max-md:mt-20">
        <h1 className="text-5xl font-bold mb-16 max-md:text-[24px]">
          Мой аккаунт
        </h1>
        <AccountNav />
        {children}
      </div>
    </RequireAuth>
  );
}
