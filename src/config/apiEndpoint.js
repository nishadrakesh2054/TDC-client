// src/config/apiEndpoints.js
const API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL || "http://localhost:3000";

const API_ENDPOINTS = {
  GET_HEROES: `${API_BASE_URL}/heroes`,
  GetInTouch: `${API_BASE_URL}/getInTouch`,
  CONTACT: `${API_BASE_URL}/contact`,
  GALLERY: `${API_BASE_URL}/gallery`,
  // Add more endpoints here
};

export default API_ENDPOINTS;
