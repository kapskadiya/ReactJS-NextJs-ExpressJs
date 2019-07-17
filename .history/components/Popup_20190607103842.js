import './popup.module.css';

export function Popup() {
    return (
        <div className="popup">
            <div className="popup_heading">
                <p>ShowCase Helpline</p>
            </div>
            <div className="popup_content">
                <ul>
                    <li>
                        <p>Sorry, we aren't online at the moment. Leave a message and we'll get back to
                            you.
                        </p>
                    </li>
                    <li>
                        <p>Contact us here <a>9925035402</a></p>
                    </li>
                    <li>
                        <p>Introduce Yourself</p>
                        <input type="text" placeholder="Name, Email"/>
                    </li>
                </ul>
            </div>
        </div>
    )
}