import React from "react";
import List from "./List";
import Form from "./Form";
import Post from "./Posts";
import Card from "./Card";
import CardWrapper from "./CardWrapper";

const App = () => (
  <div className="container">
    <CardWrapper>
      <Card title={'Articles'}>
        <List />
      </Card>
    </CardWrapper>
    <CardWrapper>
      <Card title={'Add a new article'}>
        <Form />
      </Card>
    </CardWrapper>
    <CardWrapper>
      <Card title={'API posts'}>
        <Post />
      </Card>
    </CardWrapper>
  </div>
);

export default App;