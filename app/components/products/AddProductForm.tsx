import ProductForm from "./ProductForm";

export default function AddProductForm() {
  return (
    <div className="bg-white mt-10 px-5 py-10 rounded-md shadow-md max-w-3xl mx-auto">
      AddProductForm
      <form action="" className="space-y-5">
        <ProductForm />
        <input
          type="submit"
          className="bg-indigo-400 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer"
          value="Add Product"
        />
      </form>
    </div>
  );
}
