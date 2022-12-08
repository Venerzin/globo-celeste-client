import { redirect } from "react-router-dom";

const loader = () => {
  const user = sessionStorage.getItem("token");
  if (!user) {
    return redirect("/");
  }
};

export { loader };