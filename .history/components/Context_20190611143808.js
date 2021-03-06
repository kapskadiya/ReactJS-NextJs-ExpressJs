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
                width:"100%",
                backgroundAttachment: "fixed",
                backgroundImage: "url(https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjXjMGCiuHiAhWYinAKHScmB4oQjRx6BAgBEAU&url=https%3A%2F%2Floveisinmytummy.com%2F2017%2F07%2Fdiy-food-photography-background-vol-2.html&psig=AOvVaw2SjSqH7Bou2Dr751ZAfgJj&ust=1560330413014032)"
            },
            setCart: (id) => {
                    this.setState({
                        idList: [...this.state.idList,id]
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