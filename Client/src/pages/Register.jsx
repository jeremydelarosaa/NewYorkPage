import { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Navbars from "../components/Navbars";
import ProgressBarState from "../utils/ProgressBarState";
import { HandleValidator } from "../reducer/Validator.jsx";
function Register() {
  const [pass, setPass] = useState("");
  const [dati, setDati] = useState();
  const { register, handleSubmit } = useForm();
  const handleFormSubmit = (newdati) => {
    setDati(newdati);
  };
  return (
    <>
      <Navbars />
      <Form
        className="Form-container"
        onSubmit={handleSubmit(handleFormSubmit)}
      >
        {dati === undefined ? null : <HandleValidator dati={dati} />}
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom01">
            <Form.Label>First name</Form.Label>
            <Form.Control
              required
              type="text"
              {...register("Name")}
              placeholder="First name"
            />
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustom02">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              {...register("LastName")}
              required
              type="text"
              placeholder="Last name"
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustomUsername">
            <Form.Label>Email</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                type="Email"
                {...register("Email")}
                placeholder="Email"
                aria-describedby="inputGroupPrepend"
                required
              />
            </InputGroup>
          </Form.Group>
          <Form.Group as={Col} md="6" className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              minLength="8"
              type="password"
              {...register("Password")}
              required
              placeholder="Password"
              onChange={(e) => setPass(e.target.value)}
            />
            <Form.Label>
              1.Uppercase 1.Lowercase 1.Digit 1.Special Character
            </Form.Label>

            {pass === "" ? null : <ProgressBarState password={pass} />}
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
              placeholder="City"
              {...register("City")}
              required
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom04">
            <Form.Label>State</Form.Label>
            <Form.Control type="text" placeholder="State" required />
          </Form.Group>
        </Row>
        <Form.Group className="mb-3">
          <Form.Check
            {...register("Agree")}
            required
            label="Agree to terms and conditions"
          />
        </Form.Group>
        <Button type="submit">Submit form</Button>
      </Form>
    </>
  );
}

export default Register;
