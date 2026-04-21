"use client";

import { useState } from "react";

type CategoryOption = {
  id: number;
  name: string;
};

export default function CategorySelect({
  categories,
}: {
  categories: CategoryOption[];
}) {
  const [categoryMode, setCategoryMode] = useState("existing");

  return (
    <>
      <div className="space-y-2">
        <label className="text-slate-800" htmlFor="categoryMode">
          Category Type:
        </label>
        <select
          className="block w-full p-3 bg-slate-100"
          id="categoryMode"
          name="categoryMode"
          value={categoryMode}
          onChange={(event) => setCategoryMode(event.target.value)}
        >
          <option value="existing">Select Existing Category</option>
          <option value="new">Add New Category</option>
        </select>
      </div>

      {categoryMode === "existing" && (
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
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
      )}

      {categoryMode === "new" && (
        <div className="space-y-2">
          <label className="text-slate-800" htmlFor="categoryName">
            New Category Name:
          </label>
          <input
            id="categoryName"
            type="text"
            name="categoryName"
            className="block w-full p-3 bg-slate-100"
            placeholder="Enter new category name"
          />
        </div>
      )}
    </>
  );
}
