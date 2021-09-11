import { transform } from "typescript";
import ContactModel from "../../../models/contact";
import DeleteContactButton from "../DeleteContactButton/DeleteContactButton";
import EditContactButton from "../EditContactButton/EditContactButton";
import "./ContactItem.css";

interface props {
  contact: ContactModel;
}

export default function ContactItem(props: props) {
  const { contact } = props;

  const getNameText = (): string => {
    let name = contact.firstName;

    if (contact.lastName) {
      name += " " + contact.lastName;
    }

    return name;
  };

  const getAge = (): number | null => {
    if (!contact.birthday) {
      return null;
    }

    let today = new Date();
    let age = today.getFullYear() - contact.birthday.getFullYear();
    let month = today.getMonth() - contact.birthday.getMonth();
    if (
      month < 0 ||
      (month === 0 && today.getDate() < contact.birthday.getDate())
    ) {
      age--;
    }

    return age;
  };

  const getAgeText = (): string => {
    const age = getAge();

    if (!age || !contact.birthday) {
      return "";
    }

    const day = contact.birthday.getDate();
    const month = contact.birthday.getMonth() + 1;
    const year = contact.birthday.getFullYear();

    return `${day}/${month}/${year} (${age} y/o)`;
  };
  return (
    <tr>
      <td className="Id">{contact.id}</td>
      <td className="Name">{getNameText()}</td>
      <td className="Nickname">{contact.nickname || ""}</td>
      <td className="Work-Phone">{contact.workPhone || ""}</td>
      <td className="Mobile-Phone">{contact.mobilePhone || ""}</td>
      <td className="Age">{getAgeText()}</td>
      <td>
        <EditContactButton contact={contact} />
      </td>
      <td>
        <DeleteContactButton contact={contact} />
      </td>
    </tr>
  );
}
