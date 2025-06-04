export type productId = number;

type AdditioanlContacts = {
  id: number;
  name: string;
  value: string;
};

export type Contacts = {
  tel: string;
  email: string;
  phones: AdditioanlContacts[];
  emails: AdditioanlContacts[];
  addresses: AdditioanlContacts[];
};
