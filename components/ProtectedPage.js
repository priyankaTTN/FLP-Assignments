// components/ProtectedPage.js
import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const ProtectedPage = ({ children }) => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return <>{session ? children : null}</>;
};

export default ProtectedPage;
