import axios from "axios";

export default axios.create({
  baseURL: "https://8d94-2a02-6b63-20bb-0-d090-10be-fa10-af5a.ngrok-free.app/",
  headers: { "ngrok-skip-browser-warning": "true" },
});
