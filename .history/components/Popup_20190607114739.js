import s from './popup.module.css';

export default function Popup() {
        return (
            <div className={s.popup}>
                <div className={s.popup_heading}>
                    <p>ShowCase Helpline</p>
                </div>
                <div className={s.popup_content}>
                    <ul>
                        <li>
                            <p>Sorry, we aren't online at the moment. Leave a message and we'll get back to
                                you.
                            </p>
                        </li>
                        <li>
                            <p className={s.popup_contact}>Contact us here
                                <a href="">9925035402</a>
                            </p>
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
