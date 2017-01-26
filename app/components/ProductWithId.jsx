import React from "react";
import Dropdown from "./DropDown";
import {Link} from "react-router";


export default class ProductWithId extends React.Component {
    constructor(props) {
        super(props);
        this.results = [
            "Carmon",
            "Casa Silva",
            "Conosur",
            "Concha y Toro",
            "Emiliana",
            "Junta",
            "Casa Silva"
        ];

        this.from = ["USA", "Chile", "France", "China", "Germany"];
        this.state = {
            selectedFrom: this.from[0]
        };
    }

    render() {
        return (
            <div className="detailed-content-wrapper">
                <div className="sidebar-wrapper">
                    <div className="sidebar">
                        <h3>Product {this.props.params.productWithId}</h3>
                        <p>Alcoholic beverage made from fermented grapes. These grapes are generally Vitis vinifera, or a hybrid with Vitis labrusca or Vitis rupestris. Grapes are fermented without the addition of sugars, acids, enzymes, water, or other nutrients. Yeast consumes the sugar in the grapes and converts it to ethanol and carbon dioxide.
                        </p>
                        <h3>From</h3>
                        <Dropdown list={this.from} selected={this.state.selectedFrom}/>
                        <h3>To</h3>
                    </div>
                </div>
                <div className="center-content">
                    <div className="header-image-wrapper"></div>
                    <h3>Import from Chile to US</h3>
                    <div className="result-wrapper">
                        {this.results.map((result, i)  => {
                            return (
                                <Link key={i}  to="/company/555"><div className="result-wrapper">
                                    <div className="result">
                                        <p>{result}</p>
                                        <p>Chilean Wine</p>
                                    </div>
                                </div></Link>
                            );
                        })}

                    </div>
                </div>
            </div>
        );
    }

}
