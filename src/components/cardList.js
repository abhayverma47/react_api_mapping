import React, { Component } from "react";
import Card from "./card";

let items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

class CardList extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      data: []
    };
  }

  componentDidMount() {
    let arr = [{ id: 99, title: "hello ji" }];
    this.setState({ loading: true });
    items.map(index => {
      fetch(`https://jsonplaceholder.typicode.com/todos/${index}`)
        .then(res => res.json())
        .then(json => {
          arr.push(json);
          this.setState({ data: arr });
        });
    });
  }
  render() {
    return (
      <div>
        {this.state.data.map(item => {
          return <Card key={item.id} title={item.title} />;
        })}
      </div>
    );
  }
}
export default CardList;
