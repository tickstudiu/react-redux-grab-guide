import React, { Component } from 'react';

class NavLang extends Component {

    render() {
        const { lang, handleChangeLanguage } = this.props;

        return(
            <nav className="nav justify-content-end text-white">
                <a onClick={handleChangeLanguage.bind(this, 'en')}
                   className={`nav-link ${(lang === 'en') ? 'disabled' : ''}`}
                   href="#">ENG</a>
                <a onClick={handleChangeLanguage.bind(this, 'th')}
                   className={`nav-link ${(lang === 'th') ? 'disabled' : ''}`}
                   href="#">TH</a>
            </nav>
        );
    }
}

export default NavLang;