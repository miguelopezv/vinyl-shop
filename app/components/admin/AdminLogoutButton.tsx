import { logoutAdmin } from "@/actions";

export default async function AdminLogoutButton() {
  const handleonClick = () => {
    logoutAdmin();
  };
  return <div onClick={handleonClick}>AdminLogoutButton</div>;
}
