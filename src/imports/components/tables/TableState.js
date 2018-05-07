import React, { Component } from 'react';
import {Table, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Media} from 'reactstrap';

class TableState extends Component {

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false
        };
    }

    toggle() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    };

    render() {

        return(
            <div className="my-4">
                <div className="d-flex justify-content-between bg-white align-items-center px-2 py-4 rounded-top">
                    <div className="d-flex justify-content-start align-items-center"><h1>Ongoing
                        Projects</h1><span
                        className="text-muted border-left border-secondary small lead ml-3 pl-3">32 Projects</span>
                    </div>
                    <i className="fas fa-cloud-download-alt"></i>
                </div>
                <Table borderless>
                    <thead>
                    <tr>
                        <td className="text-muted">Project</td>
                        <td className="text-muted">Deadline</td>
                        <td className="text-muted">Leader + Team</td>
                        <td className="text-muted">Budget</td>
                        <td className="text-muted">Status</td>
                    </tr>
                    </thead>
                    <tbody className="bg-white">
                    <tr className="border-left border-danger">
                        <td>
                            <p className="lead my-0">New Dashboard</p>
                            <span className="small text-muted">Google</span>
                        </td>
                        <td>
                            <p className="lead my-0">17th Oct, 17</p>
                            <span className="small text-danger">Overdue</span>
                        </td>
                        <td>
                            <Media>
                                <Media left>
                                    <img
                                        src="https://d1jiktx90t87hr.cloudfront.net/223/wp-content/uploads/2016/09/michelle-prince-profile-img.png"
                                        style={{height: "50px", width: "50px"}}
                                        className="rounded-circle mr-3 my-1"/>
                                </Media>
                                <Media body>
                                    <Media heading className="my-0">
                                        Norman Hammond
                                    </Media>
                                    <p className="text-muted">UK Design Team</p>
                                </Media>
                            </Media>
                        </td>
                        <td>
                            <p className="lead my-0">$4,670</p>
                            <span className="small text-muted">Paid</span>
                        </td>
                        <td className="d-flex justify-content-between align-items-center">
                            <p className="lead my-0"><span className="text-danger mr-2"><i
                                className="far fa-circle"></i></span>Early Stages</p>
                            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                                <DropdownToggle caret color="light">
                                    Action
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem header>Header</DropdownItem>
                                    <DropdownItem disabled>Action</DropdownItem>
                                    <DropdownItem>Another Action</DropdownItem>
                                    <DropdownItem divider/>
                                    <DropdownItem>Another Action</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <p className="lead my-0">Landing Page</p>
                            <span className="small text-muted">Airbnb</span>
                        </td>
                        <td>
                            <p className="lead my-0">2nd Jan, 18</p>
                            <span className="small text-muted">in 3 months</span>
                        </td>
                        <td>
                            <Media>
                                <Media left>
                                    <img
                                        src="http://free-profile-pics.com/profile-pictures/01232014/download/clockwork-orange-profile-picture-360x360.png"
                                        style={{height: "50px", width: "50px"}}
                                        className="rounded-circle mr-3 my-1"/>
                                </Media>
                                <Media body>
                                    <Media heading className="my-0">
                                        Joseph Mullins
                                    </Media>
                                    <p className="text-muted">External Company</p>
                                </Media>
                            </Media>
                        </td>
                        <td>
                            <p className="lead my-0">$5,740</p>
                            <span className="small text-muted">Invoice Sent</span>
                        </td>
                        <td className="d-flex justify-content-between align-items-center">
                            <p className="lead my-0"><span className="text-warning mr-2"><i
                                className="far fa-circle"></i></span>QA</p>
                            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                                <DropdownToggle caret color="light">
                                    Action
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem header>Header</DropdownItem>
                                    <DropdownItem disabled>Action</DropdownItem>
                                    <DropdownItem>Another Action</DropdownItem>
                                    <DropdownItem divider/>
                                    <DropdownItem>Another Action</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <p className="lead my-0">Customer Care Interface</p>
                            <span className="small text-muted">Uber</span>
                        </td>
                        <td>
                            <p className="lead my-0">1st Apr, 18</p>
                            <span className="small text-muted">in 5 months</span>
                        </td>
                        <td>
                            <Media>
                                <Media left>
                                    <img
                                        src="https://www.citrix.com/blogs/wp-content/uploads/2015/10/profile-360x360.jpg"
                                        style={{height: "50px", width: "50px"}}
                                        className="rounded-circle mr-3 my-1"/>
                                </Media>
                                <Media body>
                                    <Media heading className="my-0">
                                        Ina Higgins
                                    </Media>
                                    <p className="text-muted">UX Warriors</p>
                                </Media>
                            </Media>
                        </td>
                        <td>
                            <p className="lead my-0">$4,000</p>
                            <span className="small text-muted">Paid</span>
                        </td>
                        <td className="d-flex justify-content-between align-items-center">
                            <p className="lead my-0"><span className="text-dark mr-2"><i
                                className="far fa-circle"></i></span>Waiting for Client</p>
                            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                                <DropdownToggle caret color="light">
                                    Action
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem header>Header</DropdownItem>
                                    <DropdownItem disabled>Action</DropdownItem>
                                    <DropdownItem>Another Action</DropdownItem>
                                    <DropdownItem divider/>
                                    <DropdownItem>Another Action</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </td>
                    </tr>

                    <tr className="border-left border-danger">
                        <td>
                            <p className="lead my-0">UX Consulting</p>
                            <span className="small text-muted">Tapdaq</span>
                        </td>
                        <td>
                            <p className="lead my-0">23th Dec, 18</p>
                            <span className="small text-danger">Overdue</span>
                        </td>
                        <td>
                            <Media>
                                <Media left>
                                    <img
                                        src="https://www.scu.edu/media/college-of-arts-and-sciences/english/faculty/Hines_profile_photo-360x360-2.jpg"
                                        style={{height: "50px", width: "50px"}}
                                        className="rounded-circle mr-3 my-1"/>
                                </Media>
                                <Media body>
                                    <Media heading className="my-0">
                                        Stella Munoz
                                    </Media>
                                    <p className="text-muted">Dribbble Researchers</p>
                                </Media>
                            </Media>
                        </td>
                        <td>
                            <p className="lead my-0">$2,500</p>
                            <span className="small text-muted">Paid</span>
                        </td>
                        <td className="d-flex justify-content-between align-items-center">
                            <p className="lead my-0"><span className="text-success mr-2"><i
                                className="far fa-circle"></i></span>Finishing</p>
                            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                                <DropdownToggle caret color="light">
                                    Action
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem header>Header</DropdownItem>
                                    <DropdownItem disabled>Action</DropdownItem>
                                    <DropdownItem>Another Action</DropdownItem>
                                    <DropdownItem divider/>
                                    <DropdownItem>Another Action</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <p className="lead my-0">Landing Page</p>
                            <span className="small text-muted">Airbnb</span>
                        </td>
                        <td>
                            <p className="lead my-0">2nd Jan, 18</p>
                            <span className="small text-muted">in 3 months</span>
                        </td>
                        <td>
                            <Media>
                                <Media left>
                                    <img
                                        src="http://free-profile-pics.com/profile-pictures/01232014/download/clockwork-orange-profile-picture-360x360.png"
                                        style={{height: "50px", width: "50px"}}
                                        className="rounded-circle mr-3 my-1"/>
                                </Media>
                                <Media body>
                                    <Media heading className="my-0">
                                        Joseph Mullins
                                    </Media>
                                    <p className="text-muted">External Company</p>
                                </Media>
                            </Media>
                        </td>
                        <td>
                            <p className="lead my-0">$5,740</p>
                            <span className="small text-muted">Invoice Sent</span>
                        </td>
                        <td className="d-flex justify-content-between align-items-center">
                            <p className="lead my-0"><span className="text-warning mr-2"><i
                                className="far fa-circle"></i></span>QA</p>
                            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                                <DropdownToggle caret color="light">
                                    Action
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem header>Header</DropdownItem>
                                    <DropdownItem disabled>Action</DropdownItem>
                                    <DropdownItem>Another Action</DropdownItem>
                                    <DropdownItem divider/>
                                    <DropdownItem>Another Action</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </td>
                    </tr>
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default TableState;