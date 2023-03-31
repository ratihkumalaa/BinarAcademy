import React from "react";
import Form from "react-bootstrap/Form";
import { InputGroup } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";

function TextInputSearch({ onChangeSearch }) {
  return (
    <>
      <InputGroup className="form-input">
        <InputGroup.Text id="basic-addon1">
          <Search />
        </InputGroup.Text>
        <Form.Control
          placeholder="Search Todo"
          aria-label="Search Todo"
          aria-describedby="basic-addon1"
          onChange={onChangeSearch}
        />
      </InputGroup>
    </>
  );
}

export default TextInputSearch;
