import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

function ProgressBarState({ password }) {
  let regex = [];
  let passed = 0;

  regex.push("[A-Z]"); //Uppercase Alphabet.
  regex.push("[a-z]"); //Lowercase Alphabet.
  regex.push("[0-9]"); //Digit.
  regex.push("[$@$!%*#?&]"); //Special Character.

  for (let i = 0; i < regex.length; i++) {
    if (new RegExp(regex[i]).test(password)) {
      passed++;
    }
  }
  if (password.length >= 8) {
    if (passed == 1) {
      return <ProgressBar className="mt-2" variant="danger" now={25} />;
    }
    if (passed == 2) {
      return <ProgressBar className="mt-2" variant="warning" now={50} />;
    }
    if (passed == 3) {
      return <ProgressBar className="mt-2" variant="info" now={75} />;
    }
    if (passed == 4) {
      return <ProgressBar className="mt-2" variant="success" now={100} />;
    }
  } else {
    return <ProgressBar className="mt-2" variant="" now={0} />;
  }
}
export default ProgressBarState;
