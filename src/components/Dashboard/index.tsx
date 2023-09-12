import React, { FC, useState, ChangeEvent, FormEvent } from "react";
import { styled } from "styled-components";
import { Link } from "react-router-dom";

interface FormValues {
  name: string;
  nameCompany: string;
  nameEvent: string;
  about: string;
  link: string;
}

const initialState: FormValues = {
  name: "",
  nameCompany: "",
  nameEvent: "",
  about: "",
  link: "",
};

const isCheckEmptyValues = (obj: FormValues) => {
  const values = Object.values(obj);

  return values.some((value) => value !== "");
};

export const Dashboard: FC = () => {
  const [form, setForm] = useState(initialState);
  const [file, setFile] = useState<File>();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isCheckEmptyValues(form)) {
      return;
    }

    if (!file) {
      return;
    }
  };

  return (
    <Wrapper>
      <Link to="/">на главную</Link>

      <TableContainer>
        <div>
          <Form onSubmit={handleSubmit}>
            <label htmlFor="">
              Название ролика
              <input
                value={form.name}
                name="name"
                type="text"
                onChange={handleChange}
              />
            </label>
            <label htmlFor="">
              Название компании
              <input
                value={form.nameCompany}
                name="nameCompany"
                type="text"
                onChange={handleChange}
              />
            </label>
            <label htmlFor="">
              Название события
              <input
                value={form.nameEvent}
                name="nameEvent"
                type="text"
                onChange={handleChange}
              />
            </label>
            <label htmlFor="">
              О ролике
              <input
                value={form.about}
                name="about"
                type="text"
                onChange={handleChange}
              />
            </label>
            <label htmlFor="">
              Ссылка на ролик
              <input
                value={form.link}
                name="link"
                type="text"
                onChange={handleChange}
              />
            </label>
            <label htmlFor="">
              Загрузить превью
              <input name="preview" type="file" onChange={handleChangeFile} />
            </label>
            <button>Отправить</button>
          </Form>
        </div>

        <Table>
          <caption>Our Client Data</caption>
          <tr>
            <th>Id</th>
            <th>Для какой компании</th>
            <th>Название</th>
            <th>Событие</th>
            <th>О ролике</th>
            <th>Превью</th>
            <th>Ссылка на ролик</th>
            <th>Управление</th>
          </tr>
        </Table>
      </TableContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: #fff;
`;

const Form = styled.form`
  color: #000;
  display: flex;
  flex-direction: column;
  max-width: 500px;
  border: 1px solid #000;
  padding: 20px;

  > label {
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
  }
`;

const TableContainer = styled.div`
  overflow-x: auto;
`;

const Table = styled.table`
  width: 70%;
  border-collapse: collapse;
  margin: auto;
  caption-side: top;
  empty-cells: hide;
  table-layout: auto;
  color: #000;
  border: 1px solid #000;

  > th,
  th {
    padding: 15px;
    text-align: left;
  }

  > tr:nth-child(even) {
    background-color: #f2f2f2;
  }
`;
