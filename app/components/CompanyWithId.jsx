import React from "react";
import Sidebar from "./DetailedSidebar.jsx";
import {Link} from "react-router";
import axios from "axios";

export default class CompanyWithId extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            company:null
        };
    }

    componentWillMount() {
      axios.get(`/api/company/${this.props.params.companyWithId}`).then( (response) => {
          this.setState({company:response.data});
          console.log(this.state);
      }).catch(function(error) {
          console.log(error);
      });
    }

    render() {
      const {company} = this.state;
      console.log(company);
        return (
            <div className="detailed-content-wrapper">
                <Sidebar>
                    <h3>{company ? company.name : ''}
                    </h3>
                    <p>Av. Nueva Tajamar 481 Torre Norte Oficina 1901, Las Condes Santiago, Chile</p>
                    <p>(503) 329 8721</p>
                    <p>www.conosur.com</p>
                    <div className="products">
                        <div className="imports">
                            Imports
                            <ul>
                                <li>
                                    <Link to="/product/111">
                                        Grapes</Link>
                                </li>
                                <li>
                                    <Link to="/product/222">
                                        Dirt</Link>
                                </li>
                                <li>
                                    <Link to="/product/444">
                                        Salt</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="exports">
                            Exports
                            <ul>
                                <li>
                                    <Link to="/product/444">
                                        Steel</Link>
                                </li>
                                <li>
                                    <Link to="/product/555">
                                        Wine</Link>
                                </li>
                                <li>
                                    <Link to="/product/666">
                                        Wood</Link>
                                </li>
                            </ul>

                        </div>
                    </div>
                </Sidebar>
                <div className="center-content">
                    <div className="header-image-wrapper"></div>
                    <div className="description-wrapper">
                        <h3>Company Description</h3>
                        <p>Our main goal is to create expressive and innovative wines from one of the world’s southernmost wine regions. Cono Sur Vineyards’ Winery was founded in 1993, with the vision of producing premium, expressive and innovative wines conveying the spirit of the New World. Our name refers to the company’s geographic position; it represents wines proudly made in South America’s Southern Cone, on whose western edge lies Chile and its gifted wine valleys. Our logo also evokes a freehand drawing of the silhouette of South America.
                        </p>
                        <p>Our quest is to present the world with the finest grape expression and character, from Chile’s varied wine regions. Right from the start Cono Sur applied the newest ideas and technology to winemaking’s traditional methods. Our main goal, therefore, is to create expressive and innovative wines from one of the world’s southernmost wine regions.</p>
                    </div>
                </div>
            </div>
        );
    }

}
