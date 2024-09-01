import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import {
  Button,
  Input,
  FormControl,
  FormErrorMessage,
  Box,
  Heading,
} from "@chakra-ui/react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(6, "Password too short").required("Required"),
});

function Login() {
  const navigate = useNavigate();

  const handleLogin = async (values, actions) => {
    try {
      await signInWithEmailAndPassword(auth, values.email, values.password);
      navigate("/dashboard");
    } catch (error) {
      console.error("Failed to sign in:", error);
      actions.setFieldError("general", "Invalid email or password");
    }
  };

  return (
    <Box
      width="400px"
      margin="auto"
      padding="20px"
      boxShadow="md"
      borderRadius="md"
    >
      <Heading mb={6} textAlign="center">
        Login
      </Heading>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={LoginSchema}
        onSubmit={handleLogin}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form>
            <Field name="email">
              {({ field }) => (
                <FormControl isInvalid={errors.email && touched.email} mb={4}>
                  <Input {...field} type="email" placeholder="Email" />
                  <FormErrorMessage>{errors.email}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="password">
              {({ field }) => (
                <FormControl
                  isInvalid={errors.password && touched.password}
                  mb={4}
                >
                  <Input {...field} type="password" placeholder="Password" />
                  <FormErrorMessage>{errors.password}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Button
              type="submit"
              colorScheme="teal"
              width="full"
              isLoading={isSubmitting}
              mb={4}
            >
              Login
            </Button>
            {errors.general && (
              <Box color="red.500" textAlign="center">
                {errors.general}
              </Box>
            )}
          </Form>
        )}
      </Formik>
    </Box>
  );
}

export default Login;
