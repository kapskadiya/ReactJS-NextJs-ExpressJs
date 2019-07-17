import React, { Component } from 'react'
import fetch from 'isomorphic-unfetch'


export default class Users extends Component {
    static async getInitialProps(){
        let responce = await fetch("http://localhost:9200/users/_search?size=1000");
        let data = await responce.json();
        return { users : data };
    }
    //curl -X GET "localhost:9200/bank/_search?q=*&sort=account_number:asc&pretty"

    render() {
        console.log(this.props.users.hits);
        return (
            <div>
                <ul>
                    {this.props.users.hits.hits.map(user => <li>{user._source.username}</li>)}
                </ul>
            </div>
        )
    }
}
