import { useState } from "react";
import validator from "validator";
import Alert from "react-bootstrap/Alert";
import * as API from "../api/Post";
export const HandleValidator = ({ dati }) => {
  const { Name, LastName, Email, Password, Agree } = dati;
  const [state, setState] = useState(false);

  if (
    !validator.isAlpha(Name) ||
    !validator.isLength(Name, { min: 2, max: 50 })
  ) {
    return (
      <Alert key="warning" variant="warning">
        Error:Invalid Name
      </Alert>
    );
  }
  if (
    !validator.isAlpha(LastName) ||
    !validator.isLength(LastName, { min: 2, max: 50 })
  ) {
    return (
      <Alert key="warning" variant="warning">
        Error:Lastname
      </Alert>
    );
  }
  if (!validator.isEmail(Email)) {
    return (
      <Alert key="warning" variant="warning">
        Error:Invalid Mail
      </Alert>
    );
  }
  if (
    !validator.isStrongPassword(Password, {
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1,
    })
  ) {
    return (
      <Alert key="warning" variant="warning">
        Error:Invalid Password
      </Alert>
    );
  }
  if (!Agree) {
    return (
      <Alert key="warning" variant="warning">
        Error:Agree terms
      </Alert>
    );
  } else {
    API.PostRegister(dati, setState);
  }

  return state === true ? (
    <Alert key="warning" variant="warning">
      Error:Email already exist
    </Alert>
  ) : null;
};
