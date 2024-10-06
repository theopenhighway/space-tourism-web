import logo from '../assets/favicon-32x32.png'
import componentStyle from '../styles/components.module.scss'

// import DropDownMenu from './drop-down';

interface HeaderStyle {
    style?: string;
    content?: string[];
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}


const Header: React.FC<HeaderStyle> = ({content, style}) => {
    return (
        <>
        <header>
            <div className={style}>
                
                <div>
                    <img className={componentStyle.logo} alt={logo} src={logo}/>
                </div>

                <div className={componentStyle.line}></div>
            
                <div>
                    {
                        content?.map((text, index) => {
                            return (
                                <p key={index} className={componentStyle.h8}> {text}</p>
                            )
                        })
                    }
                    <p></p>
                </div>

                
                
            </div>
        </header>
        </>
    )
}

export default Header;