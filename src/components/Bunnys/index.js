import React, { useState } from "react";
import { Link } from "react-router-dom"


const BUNNY =
  "https://images.pexels.com/photos/326012/pexels-photo-326012.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

 const BuggyButtons = () => {
  const [openCount, setOpenCount] = useState(0);
  const IDs = [1, 2, 3, 4, 5];
  const verb = openCount === 1 ? "is " : "are ";
  const noun = openCount === 1 ? "bunny." : "bunnies.";


  return (
    <>
          <h1> <Link to = "/" > return to begin </Link></h1>
      
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{ display: "flex", justifyContent: "center", marginTop: 50 }}
        >
          {IDs.map((item, index) =>  ( 
            <div key={index} style={{marginRight: 10,}} id={item}>
              <BuggyButton openCount={openCount} setOpenCount={setOpenCount} />
            </div>
          )
          )}
        </div>

        <div style={{ alignSelf: "center", marginTop: 20 }}>
          {"There " + verb + openCount + " open " + noun}
        </div>
      </div>
    </>
  );
};

const BuggyButton = ({openCount, setOpenCount} ) => {
  const [isOpen, setIsOpen] = useState(false);
  return isOpen ? (
    <img alt="alt ;)"
      src={BUNNY}
      height={300}
      width={200}
      onClick={() => {
        setOpenCount(openCount - 1);
        setIsOpen(false);
      }}
    />
  ) :  (
    <div>
    <button
      onClick={() => {
        setOpenCount(openCount + 1);
        setIsOpen(true);
      }}
      >
      OPEN BUNNY
    </button>
      </div>
  );
};


export default  BuggyButtons;
