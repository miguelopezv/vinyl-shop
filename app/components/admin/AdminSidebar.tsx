import { ADMIN_NAVIGATION } from "@/src/utils";
import Logo from "../ui/Logo";
import AdminRoute from "./AdminRoute";

export default function AdminSidebar() {
  return (
    <>
      <Logo />
      <div className="space-y-3 ">
        <p className="mt-10 uppercase font-bold text-sm text-gray-600 text-center">
          Navigation
        </p>
        <nav className="flex flex-col">
          {ADMIN_NAVIGATION.map((link) => (
            <AdminRoute key={link.url} link={link} />
          ))}
        </nav>
      </div>
    </>
  );
}
