import InputBox from "@/components/InputBox";

export default function Signup() {
  return (
    <div>
      <div className=" mx-170 mt-20 py-40 rounded-2xl flex-col flex p-5 border justify-center items-center">
        <div>
          <InputBox placeholder="email" />
        </div>
        <div>
        <InputBox placeholder="password" />

        </div>
      </div>
    </div>
  );
}
