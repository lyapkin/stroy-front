// export type Contact = {
//   id: number;
//   city: string;
//   caption: string;
//   address: string;
//   schedule: {
//     weekdays: string;
//     weekends: string;
//   };
//   phones: { id: number; tel: string }[];
// };

type AdditioanlContacts = {
  id: number;
  caption: string;
  value: string;
};

export type Address = {
  id: number;
  city: string;
  address: string;
  caption: string;
  weekdays: string;
  weekends: string;
  phone?: string;
  coordinates?: [number, number];
};

export type Contact = {
  email: string;
  phone: string;
  phone2?: string;
  tg?: string;
  wa?: string;
  phones: AdditioanlContacts[];
  emails: AdditioanlContacts[];
  addresses: Address[];
};

export type RequisiteItem = {
  id: number;
  name: string;
  value: string;
};

export type Requisites = {
  name: string;
  requisites: RequisiteItem[];
};
