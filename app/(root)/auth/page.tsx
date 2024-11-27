import Auth from "@/app/components/auth/auth";
import React from "react";

function page() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center h-screen p-2">
      <Auth />
    </div>
  );
}

export default page;
