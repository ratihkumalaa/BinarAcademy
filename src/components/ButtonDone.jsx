import React from "react";
import { Button } from "react-bootstrap";

function ButtonDone({ sortdone }) {
  return (
    <>
      <div className="d-grid gap-2">
        <Button
          onClick={sortdone}
          size="large"
          style={{ backgroundColor: "#00ACB2", color: "#ffffff" }}
        >
          Done
        </Button>
      </div>
    </>
  );
}

export default ButtonDone;
