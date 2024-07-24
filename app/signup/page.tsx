import React from 'react'
import Link from "next/link";
import SignupForm from '../components/forms/SignupForm';

const SignupPage = () => {
  return (
    <div className="container flex items-center justify-center min-h-screen">
      <div className="card bg-base-100 w-96 shadow-xl">

        <div className="card-body">
          <h4 className="font-bold my-4 font-sans">Signup</h4>

          <SignupForm />

          <div className="text-center mt-4">
            Already have an account ? <Link href={"/"}><b>Signin</b></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignupPage;
