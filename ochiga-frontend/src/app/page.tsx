// src/app/page.tsx
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/auth"); // redirect straight to /auth
  }, [router]);

  return null; // nothing shows, it just redirects
}
