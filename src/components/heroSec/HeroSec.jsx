import { Button, Container } from "react-bootstrap";
import "./hero.scss";
import { useNavigate } from "react-router-dom";
import btnside from "../../assets/yellow-btn-side.png";
import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "../loading/Loading";
import API_ENDPOINTS from "../../config/apiEndpoint";

const HeroSec = () => {
  const navigate = useNavigate();
  const [hero, setHero] = useState(null);
  const [loading, setLoading] = useState(true);

  const getAllHeros = async () => {
    try {
      setLoading(true);
      const response = await axios.get(API_ENDPOINTS.GET_HEROES);
      setHero(response.data.heros);
      console.log("hero fetch successfully", response.data);
    } catch (error) {
      console.error("Failed to fetch hero data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllHeros();
  }, []);

  const BASE_URL = `http://localhost:3000/uploads`;

  return (
    <>
      <div className="hero-sec">
        <Container>
          {loading ? (
            <Loading />
          ) : hero.length === 0 ? (
            <div className="no-heroes-message">
              <h2>No Heroes Found</h2>
            </div>
          ) : (
            hero.map((item) => (
              <div key={item._id} className="hero-item">
                <div className="heading-texts-header">
                  <h1>
                    {item.title} <br />
                  </h1>
                  {item.imageKey && item.bucket && (
                    <div className="hero-image"  >
                      <img
                        src={`${BASE_URL}/${item.imageKey}`}
                        alt={item.title}
                        className=" img-fluid "
                        style={{ maxWidth: '100%',  height: '100%', objectFit: 'cover' }} 
                      />
                    </div>
                  )}

                  <div className="join-btn-her">
                    <Button
                      onClick={() => {
                        navigate("/register-thunderbolts-cup");
                      }}
                      className="animate__pulse animate__animated animate__bounce not-show-in-big "
                    >
                      <p>Register for TBC </p>
                      <img src={btnside} alt="btn" />
                    </Button>

                    <Button
                      onClick={() => {
                        navigate("/contact");
                      }}
                      className="animate__pulse animate__animated animate__bounce show-in-big"
                    >
                      <p>Join now </p>
                      <img src={btnside} alt="btn" />
                    </Button>
                  </div>
                </div>
              </div>
            ))
          )}
        </Container>
      </div>
    </>
  );
};

export default HeroSec;
