
export default function CardPlaceholder() {
  return (
    <div
      className="flex w-full flex-col"
    >
      <div
        className="rounded-xl bg-brand-grey-secondary w-full mb-4 aspect-[16/9]"
      />
      <div className="w-full">
        <div className="rounded-[0.25rem] bg-brand-grey-secondary w-[9.375rem] h-[0.75rem] mb-[0.875rem]"></div>
        <div className="rounded-[0.25rem] bg-brand-grey-secondary w-[14.5rem] h-[1.5rem] mb-2"></div>
        <div className="rounded-[0.25rem] bg-brand-grey-secondary w-full h-[4.875rem]"></div>
      </div>
    </div>
  );
}
