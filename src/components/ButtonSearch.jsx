import React from "react";
import { Button } from "react-bootstrap";

function ButtonSearch({ click, val }) {
  return (
    <>
      <div className="d-grid gap-2">
        <Button
          size="large"
          style={{
            backgroundColor: "#00ACB2",
            color: "#ffffff",
          }}
          onClick={click}
        >
          {val}
        </Button>
      </div>
    </>
  );
}

export default ButtonSearch;
