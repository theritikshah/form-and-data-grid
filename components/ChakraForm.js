import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Button,
  Input,
  Select,
} from "@chakra-ui/react";

import { Formik, Form, Field, useFormik } from "formik";

import * as Yup from "yup";

export const formData = [];

const validationSchema = Yup.object({
  name: Yup.string("Name should only contain alphabets").required(
    "Name is required"
  ),
  email: Yup.string()
    .email("Enter a valid email address")
    .required("Email is required"),
  age: Yup.number()
    .moreThan(20, "Age should be more than 18")
    .lessThan(50, "Age shoud be under 50")
    .required("Age is required"),
  phone1: Yup.number()
    .min(10, "Number should be of 10 digit")
    .max(10, "Number should be of 10 digit")
    .required("Phone nnumber is required"),
  phone2: Yup.number()
    .min(10, "Number should be of 10 digit")
    .max(10, "Number should be of 10 digit"),
  gender: Yup.string().required("Select Gender"),
});

export default function ChakraForm() {
  const formik = useFormik({
    initialValues: { name: "" },
    validationSchema,
  });

  // function validateName(value) {
  //   let error;
  //   if (!value) {
  //     error = "Name is required";
  //   } else if (value.toLowerCase() !== "naruto") {
  //     error = "Jeez! You're not a fan 😱";
  //   }
  //   return error;
  // }
  // validate={validateName}
  return (
    <div>
      <Formik
        initialValues={{ name: "" }}
        onSubmit={(values, actions) => {
          actions.setSubmitting(false);
          formData.push(values);
          console.log(actions);
          console.log(values);
          actions.resetForm();
        }}
      >
        {(props) => (
          <Form>
            <Field name="namee" validate={validationSchema.name}>
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.name && form.touched.name}>
                  <FormLabel>First name</FormLabel>
                  <Input {...field} placeholder="name" />
                  <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Field name="Age">
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.name && form.touched.name}>
                  <FormLabel>Age</FormLabel>
                  <Input {...field} placeholder="Enter your age" />
                  <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="email">
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.name && form.touched.name}>
                  <FormLabel>Email</FormLabel>
                  <Input {...field} placeholder="email" />
                  <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="gender">
              {({ field, form }) => (
                <FormControl>
                  <FormLabel>Gender</FormLabel>
                  <Select placeholder="Select Gender">
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </Select>
                </FormControl>
              )}
            </Field>
            <Field name="Phone1">
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.name && form.touched.name}>
                  <FormLabel>Phone 1</FormLabel>
                  <Input {...field} placeholder="Enter phone number" />
                  <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="Phone2">
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.name && form.touched.name}>
                  <FormLabel>Phone 2</FormLabel>
                  <Input {...field} placeholder="Enter second phone number" />
                  <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="Upload">
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.name && form.touched.name}>
                  <FormLabel>Upload File</FormLabel>
                  <input type="file"></input>
                  <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Button
              mt={4}
              colorScheme="teal"
              isLoading={props.isSubmitting}
              type="submit"
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
