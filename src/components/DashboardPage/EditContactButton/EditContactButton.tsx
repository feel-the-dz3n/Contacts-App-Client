import { Button } from "react-bootstrap";
import ContactModel from "../../../models/contact";

interface props {
  contact: ContactModel;
}

export default function EditContactButton(props: props) {
  const { contact } = props;

  // FIXME: this marginRight style was made because I did not found
  //        any way how to lock space between edit and remove button
  //        so the spacing is made by this component with margin
  return (
    <Button variant="outline-primary" size="sm" style={{ marginRight: 8 }}>
      ✏️
    </Button>
  ); // TODO: this is going to open a dialog
}
