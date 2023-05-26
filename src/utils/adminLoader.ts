import { redirect } from "react-router-dom";

const adminLoader = () => {
  const user = sessionStorage.getItem("token");
  const isAdmin = sessionStorage.getItem("admin");

  if (!user || isAdmin !== 'true') {
    return redirect("/");
  }

  return null;
};

export { adminLoader };