import { AdminLoginForm, Logo, ToastNotification } from "@/app/components";
import { verifyAdminToken } from "@/src/lib/auth";
import { COOKIE_AUTH_KEY } from "@/src/utils";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function page() {
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_AUTH_KEY)?.value;

  if (token) {
    try {
      await verifyAdminToken(token);
      redirect("/admin/orders");
    } catch (error) {
      console.error("🚀 ~ page ~ error:", error);
    }
  }

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
