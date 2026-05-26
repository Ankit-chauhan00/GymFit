"use client";

import AdminForm from "@/components/forms/AdminForm";
import { CreateAdmin } from "@/lib/actions/admin.action";
import {  AdminFormschema} from "@/lib/validation";

const page = () => {
  return (
    <>
      <section className="w-full h-full p-10 ">
        <div className="flex flex-col gap-6 items-center justify-center ">
          <h1 className="font-iceland text-4xl">Create More Admin</h1>
          <AdminForm
            schema={AdminFormschema}
            defaultValues={{ email: "", password: "", username: "", name: ""}}
            onSubmit={CreateAdmin}
          />
        </div>
      </section>
    </>
  );
};

export default page;
