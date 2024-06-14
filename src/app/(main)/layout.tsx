import AuthUserRequester from "@/components/AuthUserRequester/AuthUserRequester";
import Header from "@/components/Header/Header";
import StoreProvider from "@/components/StoreProvider/StoreProvider";

export default function MainLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <StoreProvider>
      <AuthUserRequester>
        <div
          className={
            "h-full flex flex-col max-w-1440 mx-auto px-20 max-lg:px-8 max-sm:px-5 max-md:px-5 relative translate-y-0"
          }
        >
          <div
            className={
              "header fixed left-0 right-0 px-20 max-lg:px-8 max-sm:px-5 max-md:px-5 backdrop-blur-sm"
            }
          >
            <Header />
          </div>
          <div className="content flex-auto mt-[150px]">{children}</div>
          <div className={"footer"}>sdfsdf</div>
        </div>
      </AuthUserRequester>
    </StoreProvider>
  );
}
