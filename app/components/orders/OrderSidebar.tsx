import { getCategories } from "@/prisma/queries";
import CategoryIcon from "../UI/CategoryIcon";
import Logo from "../UI/Logo";

export default async function OrderSidebar() {
  const categories = await getCategories();
  return (
    <aside className="md:w-72 md:h-screen bg-white">
      <Logo />
      <nav className="mt-10">
        {categories.map((category) => (
          <CategoryIcon key={category.id} category={category} />
        ))}
      </nav>
    </aside>
  );
}
