import { Button } from "react-bootstrap";
import ContactModel from "../../../models/contact";

interface props {
  contact: ContactModel;
}

export default function EditContactButton(props: props) {
  const { contact } = props;

  return (
    <Button variant="outline-primary" size="sm">
      ✏️
    </Button>
  ); // TODO: this is going to open a dialog
}
