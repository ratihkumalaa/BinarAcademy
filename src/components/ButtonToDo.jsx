import React from "react";
import { Button } from "react-bootstrap";

function ButtonToDo({ sorttodo }) {
  return (
    <>
      <div className="d-grid gap-2">
        <Button
          onClick={sorttodo}
          size="large"
          style={{ backgroundColor: "#00ACB2", color: "#ffffff" }}
        >
          Todo
        </Button>
      </div>
    </>
  );
}

export default ButtonToDo;
