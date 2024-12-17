import React, { useState, useEffect } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Loading from "../loading/Loading"; // Assuming you have a Loading component
import API_ENDPOINTS from "../../config/apiEndpoint";
import "./spe-card.scss";

const SpecialCampsCards = () => {
  const navigate = useNavigate();
  const [camps, setCamps] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch camps data
  const getAllCamps = async () => {
    try {
      setLoading(true);
      const response = await axios.get(API_ENDPOINTS.CAMPS);
      setCamps(response.data.specialCamps);

      console.log("Camps fetched successfully", response.data.specialCamps);
    } catch (error) {
      console.error("Failed to fetch camps data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllCamps();
  }, []);

  const BASE_URL = `http://localhost:3000/uploads`;

  if (loading) {
    return <Loading />; // If loading, show the loading component
  }

  return (
    <div className="speacial-camp-card">
      <Row xs={1} md={2} className="g-4">
        {camps.map((item, idx) => (
          <Col key={item._id}>
            {" "}
            {/* Use item._id as the key */}
            <Link to={`/camp/${item._id}`}>
              <Card className="border-0 ind-cards rounded-0">
                <div className="imga-car-ind">
                  {/* Ensure correct image path */}
                  <Card.Img
                    variant="top"
                    src={`${BASE_URL}/${item.imageKey}`}
                  />
                </div>
                <Card.Body className="card-ind-body px-0">
                  <h3>{item.title}</h3>
                  <Card.Text>{item.description}</Card.Text>
                </Card.Body>
              </Card>
            </Link>
            <div className="butoon-car-reg">
              <Button
                onClick={() => {
                  navigate("/contact");
                }}
              >
                REGISTER NOW
                <i className="bi bi-chevron-right"></i>
              </Button>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default SpecialCampsCards;
