import axios from "axios";

export const PostRegister = (dati, setState) => {
  axios
    .post("http://localhost:3000/Register", {
      dati: dati,
    })
    .then((e) =>
      e.data === false ? (window.location.href = "/Home") : setState(true)
    )
    .catch((error) => console.error(error));
};

export const GetLogin = (dati, setError) => {
  axios
    .post("http://localhost:3000/Login", {
      dati: dati,
    })
    .then((e) =>
      e.data === false ? (window.location.href = "/Home") : setError(true)
    )
    .catch((error) => console.error(error));
};
