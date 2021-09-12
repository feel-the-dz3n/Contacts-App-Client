import ContactModel from "../../../models/contact";
import ContactItem from "../ContactItem/ContactItem";
import "./ContactsTable.css";

export default function ContactsTable() {
  const contacts: ContactModel[] = [
    {
      id: 0,
      firstName: "SashaKot0v",
      lastName: null,
      workPhone: "+380961122345",
      mobilePhone: "+380961122345",
      birthday: new Date("12-02-2008"),
      nickname: "unclclerik",
    },
    {
      id: 1,
      firstName: "Yaroslav",
      lastName: "Kibysh",
      workPhone: null,
      mobilePhone: null,
      birthday: new Date("01-15-2002"),
      nickname: "dz3n",
    },
    {
      id: 3,
      firstName: "Jonathan",
      lastName: null,
      workPhone: null,
      mobilePhone: null,
      birthday: null,
      nickname: null,
    },
    {
      id: 4,
      firstName: "Alexie",
      lastName: "Pierce",
      workPhone: null,
      mobilePhone: null,
      birthday: null,
      nickname: null,
    },
    {
      id: 5,
      firstName: "Trevor з роботи",
      lastName: null,
      workPhone: null,
      mobilePhone: null,
      birthday: null,
      nickname: null,
    },
    {
      id: 6,
      firstName: "Trevor 2",
      lastName: null,
      workPhone: null,
      mobilePhone: null,
      birthday: null,
      nickname: null,
    },
  ];

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
