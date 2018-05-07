import React, {Component} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';

class NavbarDashBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };

    render() {
        const {toggle} = this;
        const {isOpen} = this.state;
        const {msg, tour, activity, setting, signOut} = this.props.staticText;
        const {lang, handleChangeLanguage} = this.props;

        return (
            <Navbar color="primary" light expand="md">
                <NavbarBrand href="/" className="text-white text-uppercase">garb-guide</NavbarBrand>
                <NavbarToggler onClick={toggle}/>
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>

                        <NavItem>
                            <NavLink href="#"
                                     className={`nav-link ${(lang === 'en') ? 'disabled' : 'text-white'}`}
                                     onClick={handleChangeLanguage.bind(this, 'en')}>ENG</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#"
                                     className={`nav-link ${(lang === 'th') ? 'disabled' : 'text-white'}`}
                                     onClick={handleChangeLanguage.bind(this, 'th')}>TH</NavLink>
                        </NavItem>

                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav className="text-white">
                                <i className="fas fa-bars"></i>
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    {msg}
                                </DropdownItem>
                                <DropdownItem>
                                    {tour}
                                </DropdownItem>
                                <DropdownItem>
                                    {activity}
                                </DropdownItem>
                                <DropdownItem divider/>
                                <DropdownItem>
                                    {setting}
                                </DropdownItem>
                                <DropdownItem>
                                    {signOut}
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                </Collapse>
            </Navbar>
        );
    }
}

export default NavbarDashBoard;