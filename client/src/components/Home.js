import React from 'react'
import { Table, } from 'semantic-ui-react'
import axios from 'axios';

class Home extends React.Component {
  state = { books: [], name: '', }

  listBooks = () => {
    return this.state.books.map(book => {
      return (
        <Table.Row>
          <Table.Cell>{book.title}</Table.Cell>
          <Table.Cell>{book.name}</Table.Cell>
          <Table.Cell>{book.formatted_date}</Table.Cell>
        </Table.Row>
      )
    })
  }

  searchName = () => {
    axios.get(`/api/logs?search=${this.state.name}`)
      .then(res => {
        this.setState({ books: res.data })
      })
  }

  render() {
    return (
      <form style={{ margin: '40px' }}>
        <input onChange={(e) => this.setState({ name: e.target.value })} />
        <button onClick={this.searchName}>Search</button>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Book Title</Table.HeaderCell>
              <Table.HeaderCell>Customer Name</Table.HeaderCell>
              <Table.HeaderCell>Purchase Date</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {this.listBooks()}
          </Table.Body>
        </Table>
      </form>
    )
  }
}

export default Home
