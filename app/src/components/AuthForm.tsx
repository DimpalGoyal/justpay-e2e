import Button from "./Button";
import InputBox from "./InputBox";

export default function AuthForm() {
  return (
    <div
      className=" mx-5 relative py-30 rounded-2xl flex-col shadow-gray-900 shadow flex p-5 justify-center items-center
        "
    >
      <div>
        <InputBox placeholder="email" />
      </div>
      <div>
        <InputBox placeholder="password" />
      </div>
      <div className="mt-4">
        <Button text="submit" />
      </div>
    </div>
  );
}
