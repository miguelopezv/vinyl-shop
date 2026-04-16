"use client";

export default function AddProductForm({
  children,
}: {
  children: React.ReactNode;
}) {
  const handleSubmit = (formData: FormData) => {};
  return (
    <div className="bg-white mt-10 px-5 py-10 rounded-md shadow-md max-w-3xl mx-auto">
      AddProductForm
      <form action={handleSubmit} className="space-y-5">
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
