import React from 'react';
import './shell.css';

// Оболочка показывает, что демонстрирует проект, и оборачивает рабочее приложение.
const INFO = {
  number: 47,
  title: "Формы: Formik и Yup",
  description: "Регистрационная форма с валидацией по схеме Yup и управлением состоянием через Formik.",
  shows: ["useFormik / Formik для состояния формы", "Yup для правил валидации полей"],
  how: ["Оставьте поля пустыми или введите неверные данные и отправьте форму"],
  files: "src/\n├── components/\n│   └── Form.jsx\n├── shell/\n│   ├── DemoShell.jsx\n│   └── shell.css\n├── App.jsx\n├── index.css\n└── main.jsx",
};

const DemoShell = ({ children }) => (
  <div className="shell">
    <header className="shell-header">
      <p className="shell-tag">ДЗ {INFO.number}</p>
      <h1 className="shell-title">{INFO.title}</h1>
      <p className="shell-description">{INFO.description}</p>
    </header>

    <div className="shell-info">
      <section className="shell-box">
        <h2>Что показывает</h2>
        <ul>
          {INFO.shows.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
      <section className="shell-box">
        <h2>Как проверить</h2>
        <ul>
          {INFO.how.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </div>

    <h2 className="shell-section-title">Работа приложения</h2>
    <main className="shell-stage">{children}</main>

    <h2 className="shell-section-title">Структура src</h2>
    <pre className="shell-files">{INFO.files}</pre>
  </div>
);

export default DemoShell;
