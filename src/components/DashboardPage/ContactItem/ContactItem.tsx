import { Col, Row } from "react-bootstrap";
import ContactModel from "../../../models/contact";

interface props {
  contact: ContactModel;
}

export default function ContactItem(props: props) {
  const { contact } = props;

  return (
    <Row>
      <Col>{contact.id}</Col>
      <Col>{contact.firstName}</Col>
      <Col>{contact.lastName || "---"}</Col>
      <Col>{contact.nickname || "---"}</Col>
      <Col>{contact.workPhone || "---"}</Col>
      <Col>{contact.mobilePhone || "---"}</Col>
      <Col>{contact.birthday ? contact.birthday.toDateString() : "???"}</Col>
    </Row>
  );
}
