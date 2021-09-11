import { Col, Container, Row } from "react-bootstrap";
import ContactModel from "../../../models/contact";
import ContactItem from "../ContactItem/ContactItem";

export default function ContactsTable() {
  const contacts: ContactModel[] = [
    {
      id: 0,
      firstName: "SashaKot0v",
      lastName: undefined,
      workPhone: "+380961122345",
      mobilePhone: undefined,
      birthday: new Date("12-02-2008"),
      nickname: "unclclerik",
    },
    {
      id: 1,
      firstName: "Yaroslav",
      lastName: "Kibysh",
      workPhone: undefined,
      mobilePhone: undefined,
      birthday: new Date("01-15-2002"),
      nickname: "dz3n",
    },
  ];

  return (
    <table style={{ width: "100%" }} className="ContactsTable">
      {contacts.map((contact) => (
        <ContactItem contact={contact} />
      ))}
    </table>
  );
}
