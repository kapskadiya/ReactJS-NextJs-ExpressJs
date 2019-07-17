import React, { PureComponent } from 'react'

const getWholeData = (data) => {
    return data;
}

export default class WholeData extends PureComponent {
    render() {
        return (
            <div>
                {getWholeData(this.props.wholedata)}
            </div>
        )
    }
}
