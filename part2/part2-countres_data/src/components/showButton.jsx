import React, { useState } from "react";
import CountryDetails from "./countryDetails";

const ShowButton = (props) => {
  const [show, setShow] = useState(false);
  const { country } = props;
  return (
    <>
      <button onClick={() => setShow(!show)} style={{ marginLeft: "6px" }}>
        show
      </button>
      {show && (
        <div>
          <CountryDetails country={country} />
        </div>
      )}
    </>
  );
};

export default ShowButton;
