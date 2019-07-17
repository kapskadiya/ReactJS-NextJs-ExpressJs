import React, { Component } from 'react'
import fetch from 'isomorphic-unfetch'


export default class Users extends Component {
    static async getInitialProps(){
        let responce = await fetch("http://localhost:9200/users/_search");
        let data = await responce.json();
        return { users : data };
    }
    //curl -X GET "localhost:9200/bank/_search?q=*&sort=account_number:asc&pretty"

    render() {
        console.log(this.props.users);
        return (
            <div>
                
            </div>
        )
    }
}
