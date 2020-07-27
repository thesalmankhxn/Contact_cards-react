import React from "react";
import "./index.css"

import Cards from "./Cards";
import contacts from "./contacts";
import Avatar from "./Avatar";

function createCard(contact) {
  return <Cards 
    key={contact.id}
    name={contact.name}
    img={contact.imgURL}
    tel={contact.tel}
    email={contact.email}
  />;
}

function App() {
  return (
    <div>
    <h1 className="heading">My Contacts</h1>
    <Avatar 
    img="https://i.ibb.co/XzWDHJx/SK77.png"
    />
    {contacts.map(createCard)}

      {/* <Cards 
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].tel}
        email={contacts[0].email}
      />
      <Cards 
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].tel}
        email={contacts[1].email}
      />
      <Cards 
        name={contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].tel}
        email={contacts[2].email}
      /> */}
    </div>
  );
}

export default App;