"use client";

import { createProduct } from "@/actions";
import { ProductSchema } from "@/src/schemas";
import { useRouter } from "next/navigation";
import { FormEvent, useRef } from "react";
import { toast } from "react-toastify";

export default function AddProductForm({
  children,
}: {
  children: React.ReactNode;
}) {
  const formRef = useRef<HTMLFormElement>(null);
  const router = useRouter();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data = {
      name: formData.get("name"),
      artist: formData.get("artist"),
      price: formData.get("price"),
      categoryMode: formData.get("categoryMode"),
      categoryId: formData.get("categoryId"),
      categoryName: formData.get("categoryName"),
      image: formData.get("image"),
    };

    const result = ProductSchema.safeParse(data);

    if (!result.success) {
      result.error.issues.forEach((error) => toast.error(error.message));
      return;
    }

    const response = await createProduct(result.data);
    if (response?.errors) {
      response.errors.forEach((error) => toast.error(error.message));
      return;
    }
    toast.success("Product created");
    formRef.current?.reset();
    router.push("/admin/products");
  };

  return (
    <div className="bg-white mt-10 px-5 py-10 rounded-md shadow-md max-w-3xl mx-auto">
      <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
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
