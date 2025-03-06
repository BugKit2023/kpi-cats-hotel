import { ReactComponent as LogoIcon } from '../../assets/logo.svg';
import {NavigationBar} from "./NavigationBar";

const header = {
    backgroundColor: '#18282E',
    padding: '5px 15px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
}
const logo = {
    display: 'flex',
    justifyContent: 'space-start',
    alignItems: 'center',
    color: 'white',
    fontFamily: 'Roboto',
    fontSize: '20px'
}

export const Header = () => {
    return (
        <>
            <div style={header}>
                <div style={logo}>
                    <LogoIcon width={50} height={45} style={{'paddingRight': '5px'}}/>
                    <div>KOTEL</div>
                </div>
                <div>
                    <NavigationBar/>
                </div>
            </div>
        </>
    )
}