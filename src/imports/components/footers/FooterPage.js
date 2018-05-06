import React, {Component} from 'react';
import {Nav, NavItem, NavLink} from 'reactstrap';

class FooterPage extends Component {
    render() {

        const { support,aboutUs,blog,jobs,directory,profile,language, } = this.props.staticText;

        return (
            <footer className="bg-white">
                <div className=" position-fixed fixed-bottom">
                    <Nav className="d-flex justify-content-between align-items-center px-4 py-2">
                        <p className="lead m-0">G-<strong>Guide</strong></p>
                        <NavItem>
                            <NavLink href="#" className="text-dark">{aboutUs}</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#" className="text-dark">{support}</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#" className="text-dark">{blog}</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#" className="text-dark">{jobs}</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#" className="text-dark">{directory}</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#" className="text-dark">{profile}</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#" className="text-dark">{language}</NavLink>
                        </NavItem>
                        <h5 className="m-0 small">garb-guide.com/register/</h5>
                    </Nav>
                </div>
            </footer>
        );
    }
}

export default FooterPage;