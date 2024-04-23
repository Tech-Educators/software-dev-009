import "../App.css";
import Button from "./Buttons";
import LikeButton from "./LikeButton";
import { useState } from "react";

export default function TreeCard({ treeName, imgLink, location }) {
  // a function takes sets the state of the modal being on to false
  const [modalOn, setModalOn] = useState(false);
  // a vairbale that sets the modal to whatever it is not (which is called when the image gets clicked)
  const toggleModal = () => {
    setModalOn(!modalOn);
  };

  return (
    <div className="tree-card" id="tree-card">
      <div className="tree-item">
        <h1>{treeName}</h1>
        <img
          src={imgLink}
          alt={treeName}
          // the image has been made clickable, and when clicked it will carry out the toggleModal function
          onClick={toggleModal}
          style={{ cursor: "pointer" }}
        />
        <p>{location}</p>
        <Button className="button" />
        <LikeButton />
        {/* if modalOn is true then set the modal css styles */}
        {modalOn && (
          <div className="modal" onClick={toggleModal}>
            <img src={imgLink} alt={treeName} style={{ width: "100%" }} />
          </div>
        )}
      </div>
    </div>
  );
}
