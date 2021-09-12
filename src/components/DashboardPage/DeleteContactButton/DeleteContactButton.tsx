import { Button } from "react-bootstrap";
import ContactModel from "../../../models/contact";

type DeleteContactClickDelegate = () => void;

interface props {
  onClick: DeleteContactClickDelegate;
}

export default function DeleteContactButton(props: props) {
  return (
    <Button variant="outline-danger" size="sm" onClick={() => props.onClick()}>
      Delete
    </Button>
  );
}
