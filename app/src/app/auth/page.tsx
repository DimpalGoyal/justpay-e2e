import AuthForm from "@/components/AuthForm";
import HeroCard from "@/components/HeroCard";

export default function Signup() {
  return (
    <div className="min-h-screen ">
      <div className="absolute shadow shadow-gray-900 rounded-4xl p-5 flex mx-80 mt-20 items-center">
        <HeroCard />
        <AuthForm />
      </div>
    </div>
  );
}
