import { getAttributesApi } from "../api";
import Filter from "./Filter";

const AttributesFilter = async ({ types }: Props) => {
  const attributes = await getAttributesApi(types);

  return (
    <>
      {attributes.map((item) => {
        return (
          <Filter
            key={item.id}
            data={item.values}
            unit={item.unit}
            type={"attributes"}
            title={item.name}
            multiple={true}
          />
        );
      })}
    </>
  );
};

interface Props {
  types: number[];
}

export default AttributesFilter;
