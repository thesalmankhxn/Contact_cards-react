import React from "react";

import Cards from "./Cards";
import contacts from "./contacts";
import Avatar from "./Avatar";

function App() {
  return (
    <div>
    <h1 className="heading">My Contacts</h1>
    <Avatar 
    img="https://i.ibb.co/XzWDHJx/SK77.png"
    />
      <Cards 
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
      />
    </div>
  );
}

export default App;