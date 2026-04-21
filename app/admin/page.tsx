import { AdminLoginForm, Logo, ToastNotification } from "@/app/components";
import { verifyAdminToken } from "@/src/lib/auth";
import { COOKIE_AUTH_KEY } from "@/src/utils";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function page() {
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_AUTH_KEY)?.value;
  let isTokenValid = false;

  if (token) {
    try {
      await verifyAdminToken(token);
      isTokenValid = true;
    } catch (error) {
      console.error("🚀 ~ page ~ auth verification failed:", error);
    }
  }

  if (isTokenValid) {
    redirect("/admin/orders");
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
