"use client";
import { loginAdminAction } from "@/actions";
import { AdminAuthSchema } from "@/src/schemas";
import { redirect } from "next/navigation";
import { toast } from "react-toastify";

export default function AdminLoginForm() {
  const handleAdminLoginForm = async (formData: FormData) => {
    const data = {
      email: formData.get("email"),
      password: formData.get("password"),
    };
    const result = AdminAuthSchema.safeParse(data);
    if (!result.success) {
      result.error.issues.forEach((issue) => {
        toast.error(issue.message);
      });
      return;
    }
    const response = await loginAdminAction(result);

    if (!response.ok) {
      toast.error(response.data.message);
      return;
    }
    toast.success("Login successful!");
    redirect("/admin/orders");
  };

  return (
    <form action={handleAdminLoginForm} className="space-y-8 p-10">
      <div className="flex flex-col gap-2">
        <label className="font-normal uppercase">Email</label>
        <input
          type="text"
          placeholder="user@email.com"
          className="p-2 placeholder-gray-400 w-full"
          name="email"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="font-normal uppercase">Password</label>
        <input
          type="password"
          className="p-2 placeholder-gray-400 w-full"
          name="password"
        />
      </div>
      <input
        type="submit"
        value="Login"
        className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 uppercase font-bold cursor-pointer transition-colors duration-200 w-full"
      />
    </form>
  );
}
