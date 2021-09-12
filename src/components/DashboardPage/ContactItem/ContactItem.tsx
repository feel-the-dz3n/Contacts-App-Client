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
  return (
    <tr>
      <td className="Id">#{contact.id}</td>
      <td className="Name">{getNameComponent()}</td>
      <td className="Work-Phone">{contact.workPhone || "---"}</td>
      <td className="Mobile-Phone">{contact.mobilePhone || "---"}</td>
      <td className="Age">{getAgeText()}</td>
      <td>
        <EditContactButton contact={contact} />
        <DeleteContactButton contact={contact} />
      </td>
    </tr>
  );
}
