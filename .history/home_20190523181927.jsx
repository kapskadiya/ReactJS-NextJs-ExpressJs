import React, { Component } from 'react'
import ContextProvider from './components/Context'
import Header from './components/Header'
import SideBar from './components/SideBar'
import Main from './components/Main'

export default class Home extends Component {
    render() {
        return (
            <ContextProvider>
            <div className="container">
                <Header/>
                <SideBar />
                <Main />
            </div>
            <style global jsx>
                {`
                    .container{
                        width: 100%;
                        margin: 0 auto;
                    }
                    .border{
                        border: 1px solid black;
                    }
                    .header{
                        display: flex;
                        justify-content: space-between;
                    }
                    .header-corner{
                        display: flex;
                    }
                    .header-child{
                        padding: 10px;
                    }
                    .header-child input[type="text"]{
                        border: none;
                    }
                `}
            </style>
            </ContextProvider>
        )
    }
}
