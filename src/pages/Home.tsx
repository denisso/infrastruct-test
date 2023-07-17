import { FC } from "react";
import { Helmet } from "react-helmet";

import { TodoList } from "../components/TodoList";

export const Home: FC = () => {
  return (
    <>
      <Helmet>
        <title>ДЗ Инфраструктура 2023</title>
      </Helmet>
      <h1 data-testid="page-title">Home</h1>
      <p>This is the list.</p>
      <TodoList />
    </>
  );
};
