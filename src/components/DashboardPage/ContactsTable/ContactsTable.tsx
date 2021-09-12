import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import ContactModel from "../../../models/contact";
import contactsApi from "../../../services/contacts-api";
import AddContactButton from "../AddContactButton/AddContactButton";
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

  if (contacts.length == 0) {
    return (
      <div className="no-contacts-container">
        <h5>😟 There are no contacts yet.</h5>
        <AddContactButton />
      </div>
    );
  }

  return (
    <div>
      <div className="contacts-table-toolbar">
        <AddContactButton />
      </div>
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
    </div>
  );
}
