// pages/login.js
'use client'
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const LoginPage = (session) => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to home if user is authenticated
    if (session) {
      router.replace("/");
    }
  }, [session]);

  const handleSignIn = () => {
    signIn("credentials", {
      callbackUrl: `${window.location.origin}/`,
      redirect: false, // Avoid redirection after sign in
    });
  };

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleSignIn}>Sign in with Credentials</button>
    </div>
  );
};

export default LoginPage;
