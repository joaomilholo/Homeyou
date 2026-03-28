import SectionTitle from "../sectionTitle";

export default function About() {
  return (
    <section id="about" className="flex gap-8 w-304 h-140  ">
      <div className="flex flex-col flex-1 gap-6 py-24">
        <SectionTitle title={"sobre"} />
        <h2 className="font-[Playfair] font-normal text-(--dark-10) text-6xl">
          Transformamos a sua casa dos sonhos em realidade
        </h2>
        <p className="font-light font-[Outfit] text-xl">
          Móveis apenas essenciais e com design moderno, além de revestimentos
          bonitos e em cores neutras para manter a casa sempre com um estilo
          clean e suave.
        </p>
      </div>
      <div className="flex gap-4">
        <img src="/images/image-2.png" className="mb-20" />
        <img src="/images/image.png" className="mt-20" />
      </div>
    </section>
  );
}
