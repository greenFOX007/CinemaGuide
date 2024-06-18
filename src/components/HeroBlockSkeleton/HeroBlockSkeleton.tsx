export default function HeroBlockSkeleton() {
  return (
    <>
      <div
        className={`pt-[206px] max-[640px]:pt-[56px] pb-[122px] max-md:pb-6 w-full h-[650px]`}
      >
        <div className="max-w-[600px]">
          <div className="mb-[60px] max-[640px]:pt-6 max-[640px]:mb-8 flex gap-2 flex-col">
            <div className="flex gap-3 mb-5">
              <div className="w-10 h-3 bg-secondary rounded-2xl"></div>
              <div className="w-10 h-3 bg-secondary rounded-2xl"></div>
              <div className="w-10 h-3 bg-secondary rounded-2xl"></div>
              <div className="w-10 h-3 bg-secondary rounded-2xl"></div>
            </div>

            <div className="w-[480px] h-10 bg-secondary rounded-2xl mb-3"></div>
            <div className="w-[350px] h-5 mb-2 bg-secondary rounded-2xl"></div>
            <div className="w-[350px] h-5 mb-2 bg-secondary rounded-2xl"></div>
            <div className="w-[350px] h-5 mb-2 bg-secondary rounded-2xl"></div>
            <div className=" flex gap-4 flex-wrap pt-7">
              <div className="w-[100px] rounded-3xl bg-secondary h-11"></div>
              <div className="w-[100px] rounded-3xl bg-secondary h-11"></div>
              <div className="w-[50px] rounded-3xl bg-secondary h-11"></div>
              <div className="w-[50px] rounded-3xl bg-secondary h-11"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
