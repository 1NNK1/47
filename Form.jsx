import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

// Схема валидации
const validationSchema = Yup.object({
  username: Yup.string()
    .min(3, 'Минимум 3 символа')
    .required('Обязательное поле'),
  email: Yup.string()
    .email('Некорректный формат email')
    .required('Обязательное поле'),
  password: Yup.string()
    .min(6, 'Минимум 6 символов')
    .required('Обязательное поле'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Пароли должны совпадать')
    .required('Обязательное поле'),
});

const RegistrationForm = () => {
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert('Форма успешно отправлена!\n' + JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} style={styles.form}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Регистрация</h2>

      <div style={styles.field}>
        <label>Имя пользователя</label>
        <input
          name="username"
          type="text"
          style={styles.input}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.username}
        />
        {formik.touched.username && formik.errors.username ? (
          <div style={styles.error}>{formik.errors.username}</div>
        ) : null}
      </div>

      <div style={styles.field}>
        <label>Email</label>
        <input
          name="email"
          type="email"
          style={styles.input}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <div style={styles.error}>{formik.errors.email}</div>
        ) : null}
      </div>

      <div style={styles.field}>
        <label>Пароль</label>
        <input
          name="password"
          type="password"
          style={styles.input}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password ? (
          <div style={styles.error}>{formik.errors.password}</div>
        ) : null}
      </div>

      <div style={styles.field}>
        <label>Подтверждение пароля</label>
        <input
          name="confirmPassword"
          type="password"
          style={styles.input}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.confirmPassword}
        />
        {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
          <div style={styles.error}>{formik.errors.confirmPassword}</div>
        ) : null}
      </div>

      <button type="submit" style={styles.button}>Зарегистрироваться</button>
    </form>
  );
};

const styles = {
  form: {
    maxWidth: '400px',
    margin: '40px auto',
    padding: '30px',
    borderRadius: '12px',
    backgroundColor: 'white',
    boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
    fontFamily: 'Arial, sans-serif'
  },
  field: {
    marginBottom: '15px',
    display: 'flex',
    flexDirection: 'column',
    gap: '5px'
  },
  input: {
    padding: '10px',
    fontSize: '1rem',
    borderRadius: '6px',
    border: '1px solid #ccc',
    outline: 'none'
  },
  error: {
    color: '#444',
    fontSize: '0.8rem',
    marginTop: '2px'
  },
  button: {
    width: '100%',
    padding: '12px',
    backgroundColor: '#444',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: 'bold',
    marginTop: '10px'
  }
};

export default RegistrationForm;
