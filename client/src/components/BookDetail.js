import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getBookQuery } from '../queries/queries'

class BookDetail extends Component {
    render() {
        console.log(this.props);
        return (
            <div id="book-detail">
                <p>Output Book detail here</p>
            </div>
        );
    }
}

export default graphql(getBookQuery)(BookDetail);