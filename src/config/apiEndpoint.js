// src/config/apiEndpoints.js
const API_BASE_URL =
  "http://localhost:3000/api";

const API_ENDPOINTS = {
  GET_HEROES: `${API_BASE_URL}/hero`,
  GetInTouch: `${API_BASE_URL}/getInTouch`,
  CONTACT: `${API_BASE_URL}/contact`,
  GALLERY: `${API_BASE_URL}/gallery`,
  CAMPS: `${API_BASE_URL}/camps`,
  // Add more endpoints here
};

export default API_ENDPOINTS;
