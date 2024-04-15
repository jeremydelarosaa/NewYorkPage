import { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Navbars from "../components/Navbars";
import Alert from "react-bootstrap/Alert";
import * as API from "../api/Post";

function Login() {
  const [validated, setValidated] = useState(false);
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState(false);

  const handleFormSubmit = (dati) => {
    API.GetLogin(dati, setError);
  };
  const HandleError = () => {
    return (
      <Alert key="warning" variant="warning">
        Email o password uncorrect, if you dont have an Account you can{" "}
        <Alert.Link href="/Register">Register Here</Alert.Link>
      </Alert>
    );
  };

  return (
    <>
      <Navbars />

      <Form
        className="Form-container"
        noValidate
        validated={validated}
        onSubmit={handleSubmit(handleFormSubmit)}
      >
        {error === true ? <HandleError /> : null}

        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            id="Email"
            required
            name="Email"
            type="email"
            placeholder="Enter email"
            {...register("Email")}
          />
          <Form.Text className=" text-light  "></Form.Text>
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Insert valid Email
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="Password"
            id="Password"
            type="password"
            required
            placeholder="Password"
            {...register("Password")}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Check type="checkbox" label="Remember Me" />
        </Form.Group>
        <Button className="btn btn-light" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}

export default Login;
