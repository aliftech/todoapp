import Link from "next/link";
import SigninForm from "./components/forms/SigninForm";

export default function Home() {
  return (
    <div className="container flex items-center justify-center min-h-screen">
      <div className="card bg-base-100 w-96 shadow-xl">
        <div className="card-body">
          <h4 className="font-bold my-4 font-sans">Signin</h4>

          <SigninForm />

          <div className="text-center mt-4">
            Don't have any account ? <Link href={"/signup"}><b>Signup</b></Link>
          </div>
        </div>
      </div>
    </div>
  );
}
