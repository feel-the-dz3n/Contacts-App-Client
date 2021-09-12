import { useState } from "react";
import ContactModel from "../../../models/contact";
import contactsApi from "../../../services/contacts-api";
import DeleteContactButton from "../DeleteContactButton/DeleteContactButton";
import EditContactButton from "../EditContactButton/EditContactButton";
import "./ContactItem.css";

type ContactDeletedDelegate = (contact: ContactModel) => void;

interface props {
  contact: ContactModel;
  onRemoved?: ContactDeletedDelegate;
}

export default function ContactItem(props: props) {
  const [collapsed, setCollapsed] = useState(false);
  const { contact } = props;

  const getNameText = (): string => {
    let name = contact.firstName;

    if (contact.lastName) {
      name += " " + contact.lastName;
    }

    return name;
  };

  const getNameComponent = (): JSX.Element => {
    if (!contact.nickname) {
      return <span>{getNameText()}</span>;
    }

    return (
      <span>
        {getNameText()} <span className="Nickname">{contact.nickname}</span>
      </span>
    );
  };

  const getAge = (): number | null => {
    if (!contact.birthday) {
      return null;
    }

    const birthday = new Date(contact.birthday);

    let today = new Date();
    let age = today.getFullYear() - birthday.getFullYear();
    let month = today.getMonth() - birthday.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthday.getDate())) {
      age--;
    }

    return age;
  };

  const getAgeText = (): string => {
    const age = getAge();

    if (!age || !contact.birthday) {
      return "";
    }

    const birthday = new Date(contact.birthday);

    const day = birthday.getDate();
    const month = birthday.getMonth() + 1;
    const year = birthday.getFullYear();

    return `${day}/${month}/${year} (${age} y/o)`;
  };

  const deleteClicked = async () => {
    setCollapsed(true);

    const removedContact = await contactsApi.removeContact(props.contact.id);

    // Let's wait 500 ms anyway just to ensure that animation was completed
    setTimeout(() => {
      if (props.onRemoved) {
        props.onRemoved(props.contact);
      }
    }, 500);
  };

  return (
    <tr className={collapsed ? "collapsed" : ""}>
      <td className="Id">#{contact.id}</td>
      <td className="Name">{getNameComponent()}</td>
      <td className="Work-Phone">{contact.workPhone || "---"}</td>
      <td className="Mobile-Phone">{contact.mobilePhone || "---"}</td>
      <td className="Age">{getAgeText()}</td>
      <td>
        <EditContactButton contact={contact} />
        <DeleteContactButton onClick={() => deleteClicked()} />
      </td>
    </tr>
  );
}
