import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { authenticate } from "../../app/store";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Typography from "@mui/material/Typography";

function Login({ name, displayName }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = (evt) => {
    evt.preventDefault();
    setPasswordShown(!passwordShown);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const formName = evt.target.name;
    const email = evt.target.email.value;
    const password = evt.target.password.value;

    dispatch(authenticate({ email, password, method: formName }));
    setValidated(true);

    if (validated) {
      navigate("/home");
    }
  };

  return (
    <div>
      <Grid>
        <Card
          style={{
            maxWidth: 600,
            padding: "20px 5px",
            margin: "0 auto",
            backgroundColor: "#F8F7EF",
            borderRadius: "2rem",
            boxShadow: "9px 9px 9px 9px rgb(207, 207, 207)",
          }}
        >
          <Form
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
            name={name}
          >
            <center>
              <h2>Login</h2>
              <hr />
              <Row>
                <Col sm>
                  <FloatingLabel
                    controlId="email"
                    label="Email Address"
                    className="mb-3"
                  >
                    <Form.Control required type="text" placeholder="Email" />
                    <Form.Control.Feedback type="invalid">
                      Please provide your email.
                    </Form.Control.Feedback>
                  </FloatingLabel>
                </Col>
              </Row>

              <Row>
                <Col sm>
                  <FloatingLabel controlId="password" label="Password">
                    <Form.Control
                      required
                      type={passwordShown ? "text" : "password"}
                      placeholder="Password"
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide a password.
                    </Form.Control.Feedback>
                  </FloatingLabel>

                  <Button
                    variant="outline-primary"
                    onClick={togglePassword}
                    size="md"
                  >
                    {passwordShown ? (
                      <VisibilityOffIcon />
                    ) : (
                      <RemoveRedEyeIcon />
                    )}
                  </Button>
                </Col>
              </Row>

              <Button variant="outline-primary" type="submit" size="md">
                {displayName}
              </Button>
            </center>
          </Form>
        </Card>
      </Grid>
    </div>
  );
}

export default Login;
