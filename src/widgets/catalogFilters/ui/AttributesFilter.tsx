import { getAttributesApi } from "../api";
import Filter from "./Filter";

const AttributesFilter = async ({ category }: AttributesFilterProps) => {
  const attributes = await getAttributesApi(category);

  return (
    <>
      {attributes.map((item) => {
        return (
          <Filter
            key={item.id}
            data={item.values}
            type={"attributes"}
            title={item.name}
            multiple={true}
          />
        );
      })}
    </>
  );
};

interface AttributesFilterProps {
  category: string;
}

export default AttributesFilter;
