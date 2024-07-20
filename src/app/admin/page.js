"use client";
import "@@/css/style.css";
import FormProfile from "@/app/admin/components/FormProfile";

const page = () => {

  return (
    <>
      <div className="tektur-regular text-white container mx-auto flex flex-col items-center gap-10">
        <div className="w-full bg-zinc-900 p-5 px-10 rounded-md">
          <FormProfile />
        </div>
      </div>
    </>
  );
};

export default page;
