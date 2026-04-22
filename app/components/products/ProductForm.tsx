import { getCategories } from "@/prisma/queries";
import { Product } from "@/src/generated/prisma/client";
import CategorySelect from "./CategorySelect";
import ImageUpload from "./imageUpload";

type ProductFormProps = {
  product?: Product;
};

export default async function ProductForm({ product }: ProductFormProps) {
  const categories = await getCategories();

  return (
    <>
      <div className="space-y-2">
        <label className="text-slate-800" htmlFor="name">
          Name:
        </label>
        <input
          id="name"
          type="text"
          name="name"
          className="block w-full p-3 bg-slate-100"
          placeholder="Album Name"
          defaultValue={product?.name}
        />
      </div>
      <div className="space-y-2">
        <label className="text-slate-800" htmlFor="artist">
          Artist:
        </label>
        <input
          id="name"
          type="text"
          name="artist"
          className="block w-full p-3 bg-slate-100"
          placeholder="Artist"
          defaultValue={product?.artist}
        />
      </div>

      <div className="space-y-2">
        <label className="text-slate-800" htmlFor="price">
          Price:
        </label>
        <input
          id="price"
          // type="number"
          name="price"
          className="block w-full p-3 bg-slate-100"
          placeholder="Product Price"
          // step="0.01"
          // min="0"
          defaultValue={product?.price ?? ""}
        />
      </div>

      <div className="space-y-2">
        <label className="text-slate-800" htmlFor="categoryId">
          Category:
        </label>
        <CategorySelect
          categories={categories}
          selectedCategoryId={product?.categoryId}
        />
      </div>

      <div className="space-y-2">
        <ImageUpload />
      </div>
    </>
  );
}
