import { backFetch } from "@/src/shared/api";
import { Contact, Requisites } from "./model/types";

export const getContactsApi = async (): Promise<Contact> => {
  const res = await backFetch("company/contacts/1/");
  return res.json();
};

export const getRequisitesApi = async (): Promise<Requisites> => {
  const res = await backFetch("company/requisites/1/");
  return res.json();
};
