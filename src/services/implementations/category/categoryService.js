import { api } from "../../axios";

//Public
export const GetCategories = () => {
  return api.get("/categories");
};