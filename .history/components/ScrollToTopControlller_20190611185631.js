import React, {Component} from 'react'

export default class ScrollToTopControlller extends Component {
    constructor() {
        super();

        this.state = {
            intervalId: 0
        };
    }

    scrollStep() {
        if (window.pageYOffset === 0) {
            clearInterval(this.state.intervalId);
        }
        window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
    }

    scrollToTop() {
        // window.scroll(0, 0);
        let intervalId = setInterval(this.scrollStep.bind(this), this.props.delayInMs);
        this.setState({intervalId: intervalId});
    }

    render() {
        return (
          <>
            <button
                title='Back to top'
                className='scroll'
                onClick={() => {
                this.scrollToTop();
            }}>
              <i className="fa fa-arrow-up" aria-hidden="true">Up</i>
            </button>
            <style jsx>{
              `
              .scroll {
                opacity: 0.3;
                background-color: aqua;
                width: 40px;
                height: 40px;
                position: fixed;
                bottom: 10px;
                right: 10px;
                border-radius: 5px;
                border: none;
                }
                .scroll:hover {
                  opacity: 1;
                }
              
              `
            }</style>
            </>
        )
    }
}
