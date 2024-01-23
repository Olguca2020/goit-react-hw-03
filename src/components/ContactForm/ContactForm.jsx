import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import css from "./ContactForm.module.css";
import * as Yup from "yup";
import { nanoid } from "nanoid";

export const ContactForm = ({ onSubmit }) => {
  const handleSubmit = (values, actions) => {
    values.id = nanoid();
    const newContact = values;
    console.log(newContact);
    onSubmit(newContact);
    actions.resetForm();
  };
  const nameFieldId = useId();
  const numberFieldId = useId();
  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });
  return (
    <Formik
      initialValues={{ id: "", name: "", number: "" }}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.contactForm}>
        <div className="inputBox">
          <label htmlFor="nameFieldId">Name</label>
          <Field
            className={css.formField}
            id={nameFieldId}
            type="text"
            name="name"
          />
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>

        <div className="inputBox">
          <label htmlFor="numberFieldId">Number</label>
          <Field
            className={css.formField}
            id={numberFieldId}
            type="text"
            name="number"
          />
          <ErrorMessage className={css.error} name="number" component="span" />
        </div>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};
