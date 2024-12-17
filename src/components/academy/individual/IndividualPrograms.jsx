import React from "react";
import "./ind.scss";
import { Row, Col, Card } from "react-bootstrap";
import tennis from "../../../assets/academy/tennis.jpg";
import summ from "../../../assets/academy/summing.jpg";

import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import  axios from "axios";	

const items = [
  {
    id: 1,
    title: "TENNIS ACADEMY ",
    image: tennis,
    link: "/tennis-academy",
  },
  {
    id: 2,
    title: "THUNDERBOLTS Aquatic",
    image: summ,
    link: "/swimming-academy",
  },
];

const IndividualPrograms = () => {
  const { academyId } = useParams();
  const [programs, setPrograms] = useState([]);

  useEffect(() => {
    // Fetch programs based on academyId
    const fetchPrograms = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/program?academyId=${academyId}`
        );
        setPrograms(response.data.program);

        console.log("program data", response.data.program);
      } catch (error) {
        console.error("Error fetching programs:", error);
      }
    };

    fetchPrograms();
  }, [academyId]);
  return (
    <>
      {/* <div className="indi-pri-card">
        <Row xs={1} md={2} className="g-4">
          {items.map((_, idx) => (
            <Col key={idx}>
              <Link to={_?.link}>
                <Card className="border-0 ind-cards rounded-0">
                  <div className="imga-car-ind">
                    <Card.Img
                      variant="top"
                      src={_?.image}
                      alt="tennis"
                      className="rounded-0"
                    />
                  </div>
                  <Card.Body className="card-ind-body">
                    <h3>{_?.title}</h3>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </div> */}
      <div>
        <h1>Programs for Academy {academyId}</h1>
        {programs.length === 0 ? (
          <p>No programs available for this academy.</p>
        ) : (
          <ul>
            {programs.map((program) => (
              <li key={program._id}>
                <h2>{program.name}</h2>
                <p>{program.description}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default IndividualPrograms;
