// components/WelcomeUser.tsx
'use client'

import { useUser } from "@clerk/nextjs";

export default function WelcomeUser() {
  const { user, isLoaded } = useUser();

  if (!isLoaded) return <div>Loading...</div>;
//   if (!user) return <div>Welcome Guest</div>;

  return (
    <h1 className="text-3xl font-bold">Welcome {user.firstName ?? user.fullName }</h1>
  );
}
