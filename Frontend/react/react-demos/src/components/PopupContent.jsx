import React from "react";
import { createPortal } from "react-dom";
// portal
const PopupContent = ({ copied }) => {
  return createPortal(
    <section>
      {copied && (
        <div style={{ position: "absolute", bottom: "3rem" }}>
          Copied to Clipboard
        </div>
      )}
    </section>,
    document.querySelector("#portal-div")
  );
};

export default PopupContent;
