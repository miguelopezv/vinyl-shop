import { AdminSidebar, ToastNotification } from "@/app/components";
import { verifyAdminToken } from "@/src/lib/auth";
import { COOKIE_AUTH_KEY } from "@/src/utils";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

async function validateTokenAndGetUser() {
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_AUTH_KEY)?.value;

  if (!token) {
    redirect("/admin");
  }

  try {
    const user = await verifyAdminToken(token);

    return user;
  } catch (error) {
    redirect("/admin");
  }
}

export default async function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  await validateTokenAndGetUser();

  return (
    <>
      <div className="md:flex">
        <aside className="md:w-72 md:h-screen bg-white">
          <AdminSidebar />
        </aside>

        <main className="md:flex-1 md:h-screen md:overflow-y-scroll bg-gray-100 p-5">
          {children}
        </main>
      </div>

      <ToastNotification />
    </>
  );
}
