export default function Hero() {
  return (
    <section id="home" className="flex flex-col w-304 gap-18">
      {" "}
      <div className="flex flex-col items-center text-center gap-6 text-(--dark-10)">
        <h1 className="font-[Playfair] text-7xl font-medium">
          Faça da <i>your home</i> um paraíso
        </h1>
        <p className="font-normal text-[32px]">
          Encontre uma variedade de propriedades que combinem com você. <br />{" "}
          Esqueça todas as dificuldades em encontrar uma residência.
        </p>
      </div>
      <div className="flex gap-8">
        <img src="/images/1.png" className="mt-4" />
        <img src="/images/2.png" className="mb-4" />
        <img src="/images/3.png" className="mt-4" />
        <img src="/images/4.png" className="mb-4" />
      </div>
    </section>
  );
}
