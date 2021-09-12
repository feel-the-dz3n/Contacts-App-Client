import ContactModel from "../models/contact";

const baseApiUrl = "http://localhost:2000/api";
const apiUrl = `${baseApiUrl}/contacts`;

class ContactsAPI {
  async getContacts(): Promise<ContactModel[]> {
    const response = await fetch(apiUrl);
    return await response.json();
  }

  async removeContact(id: number): Promise<ContactModel> {
    const response = await fetch(`${apiUrl}/${id}`, { method: "DELETE" });
    return await response.json();
  }
}

export default new ContactsAPI();
