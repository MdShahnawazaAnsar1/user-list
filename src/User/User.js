import axios from "axios";
import React, { useEffect, useState } from "react";
import "./User.css";
import { Row, Col } from "react-grid-system";
import ArrowCircleLeftIcon from "@mui/material/Icon";
// import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
const User = () => {
  const [userDetails, setUserDetails] = useState([]);
  const [page, setpage] = useState(1);
  const grtUser = async () => {
    const response = await axios.get(
      `https://reqres.in/api/users?page=${page}`
    );
    setUserDetails(response.data.data);
  };
  useEffect(() => {
    grtUser();
  }, [page]);
  const nextPage = () => {
    setpage(2);
  };
  const prevPage = () => {
    setpage(1);
  };
  console.log(page);
  return (
    <>
    <header>User List</header>
      {userDetails.length !== 0
        ? userDetails.map((u, index) => (
            <div className="container" key={index}>
              <Row>
                <Col lg={3} xs={4}>
                  <img src={u.avatar} alt={u.first_name} />
                </Col>
                <Col className="col2">
                  ID : <span>{u.id} </span>
                  <p>
                    Name : {u.first_name} {u.last_name}
                  </p>
                  <p>Email : {u.email}</p>
                </Col>
              </Row>
            </div>
          ))
        : "PLease wait... we are almost ther!!!"}
      <div className="pagination">
        <button onClick={prevPage}>Back</button> ||{" "}
        <button onClick={nextPage}>Next</button>
      </div>
    </>
  );
};

export default User;
