export default function SectionTitle({ title }) {
  return (
    <div className="flex gap-4 items-center">
      <div className="w-16 h-px bg-(--brand-color)"></div>
      <h3 className="font-[Outfit] font-semibold uppercase text-(--brand-color) ">
        {title}
      </h3>
    </div>
  );
}
