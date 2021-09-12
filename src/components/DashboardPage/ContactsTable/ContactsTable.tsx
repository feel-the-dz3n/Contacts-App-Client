import { useEffect, useState } from "react";
import ContactModel from "../../../models/contact";
import contactsApi from "../../../services/contacts-api";
import ContactItem from "../ContactItem/ContactItem";
import "./ContactsTable.css";

export default function ContactsTable() {
  const [contacts, setContacts] = useState<ContactModel[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchContacts = async () => {
    setIsLoading(true);

    const contacts = await contactsApi.getContacts();
    setContacts(contacts);

    setIsLoading(false);
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <div className="ContactsTableContainer">
      <table style={{ width: "100%" }} className="ContactsTable">
        <tbody>
          {contacts.map((contact) => (
            <ContactItem key={contact.id} contact={contact} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
