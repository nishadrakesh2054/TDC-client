import React, { useState, useEffect } from "react";
import { Row, Col, Card } from "react-bootstrap";
import { Link, useParams ,useNavigate } from "react-router-dom";
import axios from "axios";
import "./ind.scss";

const IndividualPrograms = () => {
  const { academyId } = useParams();
  const [programs, setPrograms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate=useNavigate()
  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        setLoading(true);
        const response = await axios.get("http://localhost:3000/api/program");
        const filteredPrograms = response.data.program.filter(
          (program) => program.academyId === academyId
        );
        setPrograms(filteredPrograms);
        setLoading(false);
      } catch (error) {
        setError("Error fetching programs.");
        setLoading(false);
        console.error("Error fetching programs:", error);
      }
    };

    fetchPrograms();
  }, [academyId]);

  if (loading) {
    return <p>Loading programs...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }
 

  const BASE_URL = `http://localhost:3000/uploads`;

  const handleCardClick = async (programId) => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/agegroup/program/${programId}`
      );
      // Navigate to the age group details page or display the data
      console.log("Age group data:", response.data.ageGroups);
      navigate(`/agegroup/${programId}`, {
        state: { ageGroupData: response.data.ageGroups },
      });
    } catch (error) {
      console.error("Error fetching age group data:", error);
    }
  };

  return (
    <div className="individual-programs">
      <h1>Programs available</h1>
      {programs.length === 0 ? (
        <p>No programs available for this academy.</p>
      ) : (
        <Row xs={1} md={2} className="g-4">
          {programs.map((program) => (
            <Col key={program._id}>
              <Card
                className="border-0 rounded-0"
                onClick={() => handleCardClick(program._id)}
              >
                <div className="card-img-container">
                  <Card.Img
                    variant="top"
                    src={`${BASE_URL}/${program.imageKey}`}
                    alt="Program Image"
                    className="img-fluid rounded-0 card-img"
                  />
                </div>
                <Card.Body className="card-ind-body">
                  <h3>{program.name}</h3>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};

export default IndividualPrograms;
