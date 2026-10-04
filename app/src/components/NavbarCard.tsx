type prop = {
  text: string;
};

export default function NavbarCard({ text }: prop) {
  return (
    <div
      className="p-2 px-4 pb-3 text-center rounded-2xl
     hover:bg-gray-300 hover:transition duration-200 text-2xl font-semibold "
    >
      {text}
    </div>
  );
}
