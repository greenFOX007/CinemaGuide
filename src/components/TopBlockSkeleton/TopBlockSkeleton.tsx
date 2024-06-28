export default function TopBlockSkeleton({
  amountItems = 10,
}: {
  amountItems?: number;
}) {
  return Array(amountItems)
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
