import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
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

  if (isLoading) {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

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
