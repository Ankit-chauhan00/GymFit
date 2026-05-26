import { auth } from "@/auth";
import Adminsidebar from "@/components/admin/Adminsidebar";
import { redirect } from "next/navigation";

import React, { ReactNode } from "react";

const AdminLayout = async ({ children }: { children: ReactNode }) => {
  const session = await auth();
  const isAdmin = session?.user?.role === "ADMIN";

  if (!isAdmin) {
    redirect("/");
  }
  return (
    <main className="h-full w-full p-20">
      <div className="flex  mt-16">
        <Adminsidebar/>
        {children}
      </div>
    </main>
  );
};

export default AdminLayout;
