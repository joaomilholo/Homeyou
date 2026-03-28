export default function Navbar() {
  return (
    <nav className="flex w-304  justify-between mt-6 mx-auto">
      <div className="flex gap-0.5 text-(--brand-color) items-center">
        <span className="">&#x2726;</span>
        <h2 className="text-(--dark-10) text-2xl font-normal font-[Playfair]">
          Homeyou
        </h2>
        <span>&#x2726;</span>
      </div>

      <div className="flex gap-6 items-center font-[Outfit] text-base font-normal">
        <a href="#home">Início</a>
        <a href="#">Sobre</a>
        <a href="#">Galeria</a>
        <a href="#" className="py-3 px-6 text-white bg-(--brand-color)">
          Contato
        </a>
      </div>
    </nav>
  );
}
