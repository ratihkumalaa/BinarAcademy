import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function ButtonAddNewTask({ toSecond }) {
  return (
    <>
      <div className="d-grid gap-2">
        <Button
          as={Link}
          to={toSecond}
          variant="success"
          size="large"
          style={{
            textDecoration: "none",
            backgroundColor: "#00ACB2",
            color: "#ffffff",
          }}
        >
          Add New Task
        </Button>
      </div>
    </>
  );
}

export default ButtonAddNewTask;
