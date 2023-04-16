import { React, useState } from "react";
import Card from "react-bootstrap/Card";
import { BsEnvelope } from "react-icons/bs";
import { BsTelephone } from "react-icons/bs";

import { SiWebauthn } from "react-icons/si";
import { BsHeart } from "react-icons/bs";
import { BsHeartFill } from "react-icons/bs";
import { AiOutlineEdit } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import "./cards.css";

const Cards = (props) => {
  const [userData, setUserData] = useState(props.data);
  const { name, username, phone, email, website } = userData;
  const [liked, setLiked] = useState(false);
  const [display, setDisplay] = useState(true);

  const contentStyle = {
    maxWidth: "600px",
    width: "90%",
  };

  const handleChange = (event) => {
    setUserData({
      input: event.target.value,
    });
  };

  return (
    <div>
      {display ? (
        <Card style={{ width: "14rem" }} className="container">
          <Card.Img
            variant="top"
            width="100%"
            src={`https://avatars.dicebear.com/v2/avataaars/{${username}}.svg?options[mood][]=happy`}
          />
          <Card.Body>
            <div className="card-details">
              <h3>{name}</h3>
              <p>
                <BsEnvelope className="contact-icons" /> {email}
              </p>
              <p>
                {" "}
                <BsTelephone className="contact-icons" />
                {phone}
              </p>
              <p>
                <SiWebauthn className="contact-icons" />
                {website}
              </p>
            </div>
            <div className="action-buttons">
              {liked ? (
                <BsHeartFill
                  className="heart"
                  onClick={() => setLiked(!liked)}
                />
              ) : (
                <BsHeart className="heart" onClick={() => setLiked(!liked)} />
              )}

              <Popup
                trigger={<AiOutlineEdit />}
                modal
                contentStyle={contentStyle}
              >
                {(close) => (
                  <div className="modal">
                    <a className="close" onClick={close}>
                      &times;
                    </a>
                    <div className="header"> Basic Modal </div>
                    <div className="content">
                      <div className="form-control">
                        <label htmlFor="">* Name:</label>
                        <input
                          type="text"
                          value={name}
                          name="name"
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-control">
                        <label htmlFor="">* Email:</label>
                        <input
                          type="text"
                          value={email}
                          name="email"
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-control">
                        <label htmlFor="">* Phone:</label>
                        <input
                          type="text"
                          value={phone}
                          name="phone"
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-control">
                        <label htmlFor="">* Website:</label>
                        <input
                          type="text"
                          onChange={handleChange}
                          value={website}
                          name="website"
                        />
                      </div>
                    </div>

                    <div className="actions">
                      <button
                        className="button"
                        onClick={() => {
                          close();
                        }}
                      >
                        Cancel
                      </button>
                      <button
                        className="button"
                        onClick={() => {
                          console.log("modal closed ");
                          close();
                        }}
                      >
                        OK
                      </button>
                    </div>
                  </div>
                )}
              </Popup>
              <BsTrash onClick={() => setDisplay(false)} />
            </div>
          </Card.Body>
        </Card>
      ) : (
        ""
      )}
    </div>
  );
};

export default Cards;
