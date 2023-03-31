import React from "react";
import { Button } from "react-bootstrap";

function ButtonAll({ sortall }) {
  return (
    <>
      <div className="d-grid gap-2">
        <Button
          onClick={sortall}
          size="large"
          style={{ backgroundColor: "#00ACB2", color: "#ffffff" }}
        >
          All
        </Button>
      </div>
    </>
  );
}

export default ButtonAll;
