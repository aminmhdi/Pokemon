import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faEdit,
  faTrash
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";
import ContactContext from "../../context/contact/contactContext";

const ContactItem = ({ contact }) => {
  const contactContext = useContext(ContactContext);
  const { deleteContact, setCurrent, clearCurrent } = contactContext;
  const { _id, name, email, phone, type } = contact;

  const onDelete = () => {
    deleteContact(_id);
    clearCurrent();
  };

  return (
    <div className="p-3 m-2 card bg-light">
      <h3 className="text-primary text-left">
        {name}{" "}
        <span
          style={{ float: "right", fontSize: ".6rem" }}
          className={
            "badge " + (type === "professional" ? "bg-success" : "bg-primary")
          }
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </span>
      </h3>

      <ul style={{ listStyleType: "none", padding: 0 }}>
        {email && (
          <li>
            <FontAwesomeIcon icon={faEnvelope} /> {email}
          </li>
        )}
        {phone && (
          <li>
            <FontAwesomeIcon icon={faPhone} /> {phone}
          </li>
        )}
      </ul>
      <div>
        <Button
          type="button"
          variant="dark"
          size="sm"
          className="me-1"
          onClick={() => {
            setCurrent(contact);
          }}
        >
          <FontAwesomeIcon
            className="me-1"
            icon={faEdit}
          />
          Edit
        </Button>
        <Button
          type="button"
          variant="danger"
          size="sm"
          onClick={onDelete}
        >
          <FontAwesomeIcon
            className="me-1"
            icon={faTrash}
          />
          Delete
        </Button>
      </div>
    </div>
  );
};

export default ContactItem;
