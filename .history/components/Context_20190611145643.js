import React, {Component} from 'react'
import fetch from 'isomorphic-unfetch'

export const Context = React.createContext();
export const { Provider,Consumer} = Context; 

export default class ContextProvider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            shows: [],
            showId: 1,
            isDuplicate: false,
            idList: [],
            theme: {
                themeId: 1,
                style:{
                width:"100%",
                backgroundAttachment: "fixed",
                backgroundImage: "url(http://wallpoper.com/images/00/31/33/51/black-background_00313351.jpg)"
            }},
            setCart: (id) => {
                    this.setState({
                        idList: [...this.state.idList,id]
                    })    
            },
            changeTheme: () => {
                console.log("sssssld")
                    console.log("sssssld")
                    this.setState({
                        theme:{
                            themeId: 2,
                            style:{
                                width:"100%",
                                backgroundAttachment: "fixed",
                                backgroundImage: "url(https://www.joelgrimesworkshops.com/store/backgrounds/images/signature-backgrounds/JG-Warm-Painterly-Background@2x.jpg)"
                            }
                        }
                    })
            },
            changeGalleryFromSearch: (text) => {
                console.log("text ", text);
                text = text.toLowerCase();
                var oldGallery = this.wholeGalleryData;
                var newArray = oldGallery.filter(g => g.name.toLowerCase().includes(text));
                this.setState({shows: newArray})
            },

            removeCart: (id) => {
                var currentCart = this.state.idList;
                currentCart.splice(currentCart.indexOf(id), 1);
                this.setState({
                    idList: currentCart
                })
            },
            getData: ({value}) => this.setState({count: value}),
            setList: () => this.setState((state) => {
                idList : state
                    .isList
                    .push(state.showId)
            }),
            updateIdList: ({arrayList}) => this.setState({idList: arrayList})
        }
    }

    async componentDidMount() {
        var response = await fetch('https://api.tvmaze.com/shows');
        var data = await response.json();
        this.wholeGalleryData = data;
        const shuffled = data.sort(() => 0.5 - Math.random());
        this.setState({shows: shuffled})
    }

    render() {
        return (
            <Provider value={this.state}>
                {this.props.children}
            </Provider>
        )
    }
}