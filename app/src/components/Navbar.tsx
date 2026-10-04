import NavbarCard from "./NavbarCard"

export function Navbar() {
  return (
    <div>
      <div className="flex shadow-xs shadow-black  text-2xl justify-between items-center mx-20 mt-3
       py-5 px-10 text-black rounded-4xl">
        <NavbarCard text="app" />
        <NavbarCard text="login" />

      </div>
    </div>
  );
}
