import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Button,
  Input,
  Select,
} from "@chakra-ui/react";

import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

import { Formik, Form, Field, useFormik } from "formik";

import * as Yup from "yup";

import { useState, useMemo } from "react";

import Styles from "./form.module.css";

export default function FormUi() {
  const [formData, setFormData] = useState([]);

  const validationSchema = Yup.object({
    name: Yup.string("Name should only contain alphabets").required(
      "Name is required"
    ),
    email: Yup.string()
      .email("Enter a valid email address")
      .required("Email is required"),
    age: Yup.number()
      .moreThan(20, "Age should be more than 20")
      .lessThan(50, "Age shoud be under 50")
      .required("Age is required"),
    phone1: Yup.string()
      .matches(/^[0-9]{10}$/, {
        message: "Number should be of 10 digit",
        excludeEmptyString: false,
      })
      .required("Phone nnumber is required"),
    phone2: Yup.number()
      .min(10, "Number should be of 10 digit")
      .max(10, "Number should be of 10 digit"),
    gender: Yup.string().required("Select Gender"),
  });

  const columnDefs = [
    { field: "name" },

    { field: "email" },
    { field: "age" },
    { field: "gender" },
    { field: "phone1" },
    { field: "phone2" },
    { field: "upload" },
  ];

  const defaultColDef = useMemo(
    () => ({
      sortable: true,
      filter: true,
    }),
    []
  );

  return (
    <div className={Styles.form_ui}>
      <div className={Styles.form}>
        <Formik
          validationSchema={validationSchema}
          initialValues={{
            name: "",
            email: "",
            age: "",
            gender: "",
            phone1: "",
            phone2: "",
            upload: "",
          }}
          onSubmit={(values, actions) => {
            console.log("clicking submit");
            // actions.setSubmitting(false);
            setFormData((previousData) => {
              return [...previousData, values];
            });
            console.log(values);
            console.log(formData);
            actions.resetForm({
              name: "",
              email: "",
              age: "",
              gender: "",
              phone1: "",
              phone2: "",
              upload: "",
            });
          }}
        >
          {(props) => (
            <Form onSubmit={props.handleSubmit}>
              <Field name="name" validate={validationSchema.name}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.name && form.touched.name}
                  >
                    <FormLabel>First name</FormLabel>
                    <Input {...field} placeholder="name" />
                    <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Field name="email">
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.email && form.touched.email}
                  >
                    <FormLabel>Email</FormLabel>
                    <Input {...field} placeholder="email" />
                    <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Field name="age">
                {({ field, form }) => (
                  <FormControl isInvalid={form.errors.age && form.touched.age}>
                    <FormLabel>Age</FormLabel>
                    <Input {...field} placeholder="Enter your age" />
                    <FormErrorMessage>{form.errors.age}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Field as="select" name="gender">
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.gender && form.touched.gender}
                  >
                    <FormLabel>Gender</FormLabel>
                    <Select
                      {...field}
                      name="gender"
                      placeholder="Select Gender"
                    >
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </Select>
                    <FormErrorMessage>{form.errors.gender}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="phone1">
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.phone1 && form.touched.phone1}
                  >
                    <FormLabel>Phone 1</FormLabel>
                    <Input {...field} placeholder="Enter phone number" />
                    <FormErrorMessage>{form.errors.phone1}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="phone2">
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.phone2 && form.touched.phone2}
                  >
                    <FormLabel>Phone 2</FormLabel>
                    <Input {...field} placeholder="Enter second phone number" />
                    <FormErrorMessage>{form.errors.phone2}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="file">
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.file && form.touched.file}
                  >
                    <FormLabel>Upload File</FormLabel>
                    <input type="file"></input>
                    <FormErrorMessage>{form.errors.file}</FormErrorMessage>
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
      <div className={Styles.data_grid}>
        <div
          className="ag-theme-alpine"
          style={{ height: "90vh", width: "900px", margin: 20 }}
        >
          <AgGridReact
            rowData={formData}
            columnDefs={columnDefs}
            defaultColDef={defaultColDef}
          />
        </div>
      </div>
    </div>
  );
}
