import { getCategories } from "@/prisma/queries";

export default async function ProductForm() {
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
        />
      </div>

      <div className="space-y-2">
        <label className="text-slate-800" htmlFor="price">
          Price:
        </label>
        <input
          id="price"
          name="price"
          className="block w-full p-3 bg-slate-100"
          placeholder="Product Price"
        />
      </div>

      <div className="space-y-2">
        <label className="text-slate-800" htmlFor="categoryId">
          Category:
        </label>
        <select
          className="block w-full p-3 bg-slate-100"
          id="categoryId"
          name="categoryId"
        >
          <option value="">-- Select One --</option>
          {/* TODO: Add Input to create new Category */}
          <option value="new">Add Category</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}
