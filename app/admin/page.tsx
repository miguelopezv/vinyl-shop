import { redirect } from "next/navigation";
import { AdminLoginForm, Logo, ToastNotification } from "@/app/components";

export default function page() {
  return (
    <>
      <div className="min-h-screen">
        <div className="py-10 lg:py-20 mx-auto w-[450px]">
          <ToastNotification />
          <Logo />
          <AdminLoginForm />
        </div>
      </div>
    </>
  );
}
