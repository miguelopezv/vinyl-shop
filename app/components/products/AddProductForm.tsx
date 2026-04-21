"use client";

import { ProductSchema } from "@/src/schemas";
import { useRef } from "react";
import { toast } from "react-toastify";

export default function AddProductForm({
  children,
}: {
  children: React.ReactNode;
}) {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (formData: FormData) => {
    const data = {
      name: formData.get("name"),
      artist: formData.get("artist"),
      price: formData.get("price"),
      categoryMode: formData.get("categoryMode"),
      categoryId: formData.get("categoryId"),
      categoryName: formData.get("categoryName"),
    };

    const result = ProductSchema.safeParse(data);

    if (!result.success) {
      result.error.issues.forEach((error) => toast.error(error.message));
    } else {
      console.log("✅ ~ handleSubmit ~ validated:", result.data);
      formRef.current?.reset();
    }
  };

  return (
    <div className="bg-white mt-10 px-5 py-10 rounded-md shadow-md max-w-3xl mx-auto">
      <form ref={formRef} action={handleSubmit} className="space-y-5">
        {children}
        <input
          type="submit"
          className="bg-indigo-400 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer"
          value="Add Product"
        />
      </form>
    </div>
  );
}
