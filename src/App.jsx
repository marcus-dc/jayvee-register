import { Field, Form, Formik } from 'formik';

export default () => {
  return (
    <Formik
      initialValues={{
        first: '',
        last: '',
        email: '',
        password: '',
      }}
      onSubmit={(values) => console.log(values)}
    >
      <Form
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
          maxWidth: 600,
          width: '100%',
          margin: '0 auto',
        }}
      >
        <Field name="first" placeholder="ur paking pers neym"></Field>
        <Field name="last" placeholder="ur paking las neym"></Field>
        <Field
          name="email"
          type="email"
          placeholder="ur paking pers emeyl"
        ></Field>
        <Field
          name="password"
          type="password"
          placeholder="ur paking pers pasward"
        ></Field>

        <button type="submit">PASOK!</button>
      </Form>
    </Formik>
  );
};
