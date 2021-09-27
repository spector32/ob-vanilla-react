import { useTranslation } from "react-i18next";
import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";
import { PageModel } from "../types";

// const SigninSchema = Yup.object().shape({
//   email: Yup.string().email("Invalid email").required("Required"),
//   password: Yup.string()
//     .min(2, "Too Short!")
//     .max(50, "Too Long!")
//     .required("Required"),
// });

const signin: PageModel = {
  title: (title: string) => {
    return title;
  },
  component: function LoginPage() {
    console.log(this);

    const { t } = useTranslation();
    return (
      <div className="page signin">
        <h1>This is signin page ({t("welcome")})</h1>
        <hr />
        <Formik
          initialValues={{ email: "", password: "" }}
          // validationSchema={SigninSchema}
          validate={(values) => {
            const errors: any = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              // TODO: try authenticate
              setSubmitting(false);
              // TODO: redirect
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <Field type="email" name="email" />
              <ErrorMessage name="email" component="div" />
              <Field type="password" name="password" />
              <ErrorMessage name="password" component="div" />
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    );
  },
  path: "/signin",
  routeProps: {
    exact: true,
  },
  public: true,
};

export default signin;
