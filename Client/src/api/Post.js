import { useEffect } from "react";
import axios from "axios";

export const RegisterPost = (dati) => {
  useEffect(() => {
    axios
      .post("http://localhost:3000/Register", {
        dati: dati,
      })
      .then((e) => (e.data === true ? (window.location.href = "/Home") : null))
      .catch((error) => console.error(error));
  }, []);
};
