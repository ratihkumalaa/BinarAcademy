import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/ToDoHome.css";
import {
  faCircleCheck,
  faPen,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
// import
import TitleList from "../components/TitleList";
import ButtonAll from "../components/ButtonAll";
import ButtonToDo from "../components/ButtonToDo";
import ButtonDone from "../components/ButtonDone";
import data from "../data/data.json";
import { Link, useLocation } from "react-router-dom";
import TitleSearch from "../components/TitleSearch";
import TextInputSearch from "../components/TextInputSearch";
import ButtonSearch from "../components/ButtonSearch";
import ButtonAddNewTask from "../components/ButtonAddNewTask";

function ToDoHome() {
  const [toDo, setToDo] = useState(data);
  const state = useLocation().state;
  const [search, setSearh] = useState();

  useEffect(() => {
    if (state) {
      setToDo(state.data);
    }
  }, [state]);

  const searching = () => {
    if (search === ``) {
      setToDo(state?.data);
    } else {
      const newData = toDo.filter((item) =>
        item.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
      );
      setToDo(newData);
    }
  };
  const handleChange = (e) => {
    setSearh(e.target.value);
  };

  const sortAll = (id) => {
    setToDo(state?.data);
  };

  const sortDone = () => {
    const newData = toDo.filter((item) => item.complete === true);
    setToDo(newData);
  };

  //ToDO
  const sortToDo = () => {
    const newData = toDo.filter((item) => item.complete === false);
    setToDo(newData);
  };

  // Hapus Data
  const deleteData = (id) => {
    const newData = toDo.filter((item) => item.id !== id);
    setToDo(newData);
  };

  // Perubahan 
  const changeStatus = (id) => {
    const newData = toDo.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          complete: !item.complete,
        };
      }
      return item;
    });
    setToDo(newData);
  };

  return (
    <>
      <TitleSearch />
      <Container
        className="square border rounded"
        style={{ backgroundColor: "#333" }}
      >
        <Row className="mx-3 mt-4">
          <Col lg={6}>
            <TextInputSearch onChangeSearch={handleChange} />
          </Col>
          <Col></Col>
          <Col></Col>
        </Row>

        <Row className="mx-3 mt-4 mb-4">
          <Col lg={6} className="xs-my-3 mb-2">
            <ButtonSearch click={searching} val={"Search"} />
          </Col>
          <Col></Col>
          <Col lg={4} className="xs-my-3">
            <ButtonAddNewTask as={Link} toSecond="secondpages" />
          </Col>
        </Row>
      </Container>

      <TitleList />
      <Container
        className="square border rounded"
        style={{ backgroundColor: "#333" }}
      >
        <Row className="mx-3 my-4">
          <Col>
            <ButtonAll
              sortall={() => {
                sortAll();
              }}
            />
          </Col>
          <Col>
            <ButtonDone
              sortdone={() => {
                sortDone();
              }}
            />
          </Col>
          <Col>
            <ButtonToDo
              sorttodo={() => {
                sortToDo();
              }}
            />
          </Col>
        </Row>

        <Row className="mx-3">
          <Col>
            {toDo && toDo.length ? "" : "No Tasks..."}
            {toDo.map((task, index) => {
              return (
                <React.Fragment key={task.id}>
                  <div className="col taskBg">
                    <div className={task.complete ? "done" : ""}>
                      <span className="taskNumber">{index + 1}</span>
                      <span className="taskText">{task.title}</span>
                    </div>

                    <div className="iconsWrap">
                      <span
                        onClick={() => {
                          changeStatus(task.id);
                        }}
                        title="Completed / Not Completed"
                      >
                        <FontAwesomeIcon icon={faCircleCheck} />
                      </span>
                      <span title="Edit (this feature is not available)">
                        <FontAwesomeIcon icon={faPen} />
                      </span>
                      <span
                        onClick={() => {
                          deleteData(task.id);
                        }}
                        title="Delete"
                      >
                        <FontAwesomeIcon icon={faTrashCan} />
                      </span>
                    </div>
                  </div>
                </React.Fragment>
              );
            })}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ToDoHome;

