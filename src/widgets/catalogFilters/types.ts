type AttributeValue = {
  id: number;
  name: string;
  slug: string;
};

export type Attribute = {
  id: number;
  name: string;
  unit: string;
  slug: string;
  values: AttributeValue[];
};
