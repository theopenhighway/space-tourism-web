import { Link } from 'react-router-dom';
import componentStyle from '../styles/components.module.scss'

interface FooterStyle {
    style?: string;
    content?: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    img?: string[];
}


const Footer: React.FC<FooterStyle> = ({style, img}) => {
    return (
        <>
        <footer>
            <div className={style}>
                <div>
                    <p className={componentStyle.h4}>About Us</p>
                    <p className={componentStyle.caption5}>We are the biggest hyperstore in the universe. We got you all cover with our exclusive collections and latest drops.</p>
                </div>

                <div className={componentStyle.footer1}>
                    <div>
                        <p className={componentStyle.h4}>Categories</p>
                        <Link to="#"><p className={componentStyle.caption5}>Sneakers</p> </Link>
                        <Link to="#"><p className={componentStyle.caption5}>Basketball</p> </Link>
                        <Link to="#"><p className={componentStyle.caption5}>Outdoor</p> </Link>
                        <Link to="#"><p className={componentStyle.caption5}>Golf</p> </Link>
                        <Link to="#"><p className={componentStyle.caption5}>Hiking</p> </Link>
                    </div>

                    <div>
                        <p className={componentStyle.h4}>Company</p>
                        <Link to="#"><p className={componentStyle.caption5}>About</p> </Link>
                        <Link to="#"><p className={componentStyle.caption5}>Contact</p> </Link>
                        <Link to="#"><p className={componentStyle.caption5}>Blogs</p> </Link>
                    </div>

                    <div>
                        <p className={componentStyle.h4}>Follow us</p>

                        <div>
                                {
                                img?.map((img, index) => {
                                    return (
                                        <img key={index} alt={img} src={img}/>
                                    )
                                })
                            }
                        </div>
                        
                    </div>
                    
                </div>
            </div>
        </footer>
        </>
    )
}

export default Footer;