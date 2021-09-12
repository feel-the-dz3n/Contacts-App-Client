import { useEffect, useState } from "react";
import ContactModel from "../../../models/contact";
import contactsApi from "../../../services/contacts-api";
import ContactItem from "../ContactItem/ContactItem";
import "./ContactsTable.css";

export default function ContactsTable() {
  const [contacts, setContacts] = useState<ContactModel[]>([]);

  const fetchContacts = async () => {
    const contacts = await contactsApi.getContacts();
    setContacts(contacts);
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const buildHeader = (): JSX.Element => {
    return (
      <tr>
        <th></th>
        <th>Name</th>
        <th>Work Phone</th>
        <th>Mobile Phone</th>
        <th>Age</th>
        <th></th>
      </tr>
    );
  };

  return (
    <div className="ContactsTableContainer">
      <table style={{ width: "100%" }} className="ContactsTable">
        <tbody>
          {buildHeader()}
          {contacts.map((contact) => (
            <ContactItem key={contact.id} contact={contact} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
