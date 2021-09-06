import { Col, Container, Row } from "react-bootstrap";
import ContactModel from "../../../models/contact";
import ContactItem from "../ContactItem/ContactItem";

export default function ContactsTable() {
  const contacts: ContactModel[] = [
    {
      id: 0,
      firstName: "SashaKotov",
      lastName: undefined,
      workPhone: "+380961122345",
      mobilePhone: undefined,
      birthday: new Date("01-01-2008"),
      nickname: "unclclerik",
    },
    {
      id: 1,
      firstName: "Yaroslav",
      lastName: "Kibysh",
      workPhone: undefined,
      mobilePhone: undefined,
      birthday: new Date("15-01-2002"),
      nickname: "dz3n",
    },
  ];

  const buildHeader = () => {
    return (
      <Row>
        <Col>ID</Col>
        <Col>First Name</Col>
        <Col>Last Name</Col>
        <Col>Nickname</Col>
        <Col>Work Phone</Col>
        <Col>Mobile Phone</Col>
        <Col>Birthday</Col>
      </Row>
    );
  };

  return (
    <Container fluid>
      {buildHeader()}
      {contacts.map((contact) => (
        <ContactItem contact={contact} />
      ))}
    </Container>
  );
}
