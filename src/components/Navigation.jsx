import Logo from '../assets/images/logo.svg';
import CalendarIcon from '../assets/images/calendar-icon.svg';

import '../assets/styles/navigation.scss';

export default function Navigation() {
    return (
        <header>
            <nav className="navigation">
                <img src={Logo} alt="" />
                <div className="calendar-day">
                    <img src={CalendarIcon} alt="" />
                    <div className="calendar-day__current-day">
                        Day 1 <span>of 5</span>
                    </div>
                </div>
            </nav>
        </header>
    )
}
