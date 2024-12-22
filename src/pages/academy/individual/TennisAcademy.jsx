import React from "react";
import { useLocation } from "react-router-dom";
import { Card, Button, Container } from "react-bootstrap";
import placeholder from "../../../assets/academy/thunderbolts-logo.png"; // A placeholder image if no image is found
import "./tennish.scss";

const TennisAcademy = () => {
  const location = useLocation();
  const { ageGroupData } = location.state || {}; // Get the array of age groups

  if (!ageGroupData || ageGroupData.length === 0) {
    return <p>No age group data available.</p>;
  }

  return (
    <div className="tennish">
      <Container>
        <div className="tennis-aca-heading-conta">
          <h1>TENNIS ACADEMY (COMING SOON)</h1>
          <p>
            Our Tennis Program offers comprehensive training for players of all
            levels, from beginners to advanced athletes. With expert coaching and
            a focus on developing technique, agility, and strategic play, we help
            participants enhance their skills and enjoy the game. Whether you're
            picking up a racket for the first time or aiming to compete at a higher
            level, our program provides the perfect environment for growth and
            success. Join us on the court and elevate your tennis game!
          </p>
        </div>

        {/* Age group cards */}
        <div className="age-group-container">
          {ageGroupData.map((ageGroup) => (
            <Card key={ageGroup._id} className="age-group-card">
              <div className="image-container">
                <Card.Img
                  src={`http://localhost:3000/uploads/${ageGroup.imageKey}` || placeholder}
                  alt={ageGroup.title}
                  className="age-group-image"
                />
              </div>
              <Card.Body>
                <h2 className="age-group-title">{ageGroup.title}</h2>
                <h4 className="age-group-age">{ageGroup.ageGroup}</h4>
                <Card.Text className="age-group-description">
                  {ageGroup.description}
                </Card.Text>
                <Button
                  variant="primary"
                  onClick={() => {
                    console.log(`Redirect to register for ${ageGroup.title}`);
                  }}
                  className="register-button"
                >
                  Register Now
                </Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default TennisAcademy;
