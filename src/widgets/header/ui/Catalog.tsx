import { getCategoryGroupsApi } from "@/src/entities/category/api";
// import s from "./styles.module.css";
// import List from "@/src/shared/ui/List/List";
// import Link from "next/link";
// import ArrowDownIcon from "@/src/shared/ui/icons/ArrowDownIcon";
import CatalogContent from "./CatalogContent";

const Catalog = async () => {
  const data = await getCategoryGroupsApi();

  return <CatalogContent data={data} />;
};

export default Catalog;
