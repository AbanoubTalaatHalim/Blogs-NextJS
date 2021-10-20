import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const ERROR = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 6000);
  }, []);
  return (
    <div className="container">
      <h1>404 - Page Not Found</h1>
      <Link href="/">
        <a className="btn btn-dark">Go Home</a>
      </Link>
    </div>
  );
};

export default ERROR;
