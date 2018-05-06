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
        return (
            <Navbar color="primary" light expand="md">
                <NavbarBrand href="/" className="text-white text-uppercase">garb-guide</NavbarBrand>
                <NavbarToggler onClick={toggle}/>
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="#" className="text-white">TH</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#" className="text-white">ENG</NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav className="text-white">
                                <i className="fas fa-bars"></i>
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    Messenger
                                </DropdownItem>
                                <DropdownItem>
                                    Tour
                                </DropdownItem>
                                <DropdownItem>
                                    Activity
                                </DropdownItem>
                                <DropdownItem divider/>
                                <DropdownItem>
                                    Setting
                                </DropdownItem>
                                <DropdownItem>
                                    Sign out
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