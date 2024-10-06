import React from 'react';
import componentStyle from '../styles/components.module.scss'
import Input from './input-text';
import Button from './button';
import logo from '../assets/logo.png'
interface InputStyle {
}

const SubscribeBanner: React.FC<InputStyle> = () => {


  return (
    <>
        <div className={componentStyle.kickPlusPlaceholder}>
                <div>
                    <p className={componentStyle.h1}>JOIN OUR KICKSPLUS CLUB & GET 15% OFF</p>
                    <p className={componentStyle.captionBold5}>Sign up from free! Join the community.</p>

                    <div className={componentStyle.subscribeEmail}>
                        <Input type="email" name="email" inputPlaceholder='Email address' errorMessage="" />
                        <Button style={componentStyle.buttonEnable} content="SUBMIT" type="submit"/>
                    </div>

                </div>

                <div>
                    <img alt={logo} src={logo}/>
                </div>
            </div>

    </>
  );
};

export default SubscribeBanner;
