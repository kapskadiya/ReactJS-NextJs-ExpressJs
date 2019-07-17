import { withRouter } from 'next/router';

const content = props => (
    <div>
        <h1>{props.router.query.title}</h1>
    </div>
)