import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const StyledButton = styled.button`
  background: #fafafafa;
  border: 1px solid;
  font-size: 16px;
  padding: .2em;
  margin: 1em;
`;

const Item = ({ className, id, title }) => (
  <li className={className} key={id}>{title}</li>
);

const StyledItem = styled(Item)`
  font-size: 16px;
  padding: 1em;
`;

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  componentDidMount() {
    this.getStateBooks('http://localhost:3010/api/books');
  }

  getBooks() {
    this.getStateBooks('http://localhost:3010/api/books2');
  }

  getStateBooks(url) {
    axios.get(url)
      .then(response => {
        const { data } = response;
        this.setStateBooks(data);
      })
      .catch(error => {
        console.log(`Error: ${error}`);
      })
  }

  setStateBooks({ books }) {
    this.setState(state => {
      state.books = books;
      return state;
    });
  }

  renderItem() {
    return this.state.books.map(book => {
      const { id, title } = book;
      return <StyledItem key={id} title={title} />
    })
  }

  render() {
    return (
      <div>
        <StyledButton onClick={this.getBooks.bind(this)}>違うJsonと交換するボタン</StyledButton>
        <ul>{this.renderItem()}</ul>
      </div>
    );
  }
}

export default Index;
