export default function TopBlockSkeleton() {
  return Array(10)
    .fill("1")
    .map((item, index) => {
      return (
        <div
          key={index}
          className="relative w-[224px] h-[336px] rounded-2xl bg-secondary "
        ></div>
      );
    });
}
