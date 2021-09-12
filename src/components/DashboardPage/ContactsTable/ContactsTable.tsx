import ContactModel from "../../../models/contact";
import ContactItem from "../ContactItem/ContactItem";
import "./ContactsTable.css";

export default function ContactsTable() {
  const contacts: ContactModel[] = [
    {
      id: 0,
      firstName: "SashaKot0v",
      lastName: undefined,
      workPhone: "+380961122345",
      mobilePhone: "+380961122345",
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
    {
      id: 3,
      firstName: "Jonathan",
      lastName: undefined,
      workPhone: undefined,
      mobilePhone: undefined,
      birthday: undefined,
      nickname: undefined,
    },
    {
      id: 4,
      firstName: "Alexie",
      lastName: "Pierce",
      workPhone: undefined,
      mobilePhone: undefined,
      birthday: undefined,
      nickname: undefined,
    },
    {
      id: 5,
      firstName: "Trevor з роботи",
      lastName: undefined,
      workPhone: undefined,
      mobilePhone: undefined,
      birthday: undefined,
      nickname: undefined,
    },
    {
      id: 6,
      firstName: "Trevor 2",
      lastName: undefined,
      workPhone: undefined,
      mobilePhone: undefined,
      birthday: undefined,
      nickname: undefined,
    },
  ];

  return (
    <div className="ContactsTableContainer">
      <table style={{ width: "100%" }} className="ContactsTable">
        {contacts.map((contact) => (
          <ContactItem contact={contact} />
        ))}
      </table>
    </div>
  );
}
