import React, { Component } from "react"
import { taxRates } from "./taxRates"
import { budgetRates } from "./budgetRates"

export default class Display extends Component {
    constructor(){
        super();

        this.state = {
            income: 0,
            state: ""
        }
    }

    displayBudget = (budget) => {
        if (this.state.income === 0){
            return <div></div>
        }
        let dividend = ((this.state.income - (this.state.income * taxRates[(this.state.state).toUpperCase()]))
            * budgetRates[budget]).toFixed(0);
        return(
            <div>{dividend}</div>
        )
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render = () => {
        return(
            <div>
                <h1>Budget Tracker</h1>
                <p>Enter your yearly income and state to estimate how much you should be allocating your expenses!</p>
                <div id="inputs">
                    <label>
                        <div className="label">Income:</div>
                        <input type="number" name="income" onChange={this.handleChange} value={this.state.income} required/>
                    </label>
                    <label>
                        <div className="label">State (Enter "DC" if you live in Washington, DC):</div>
                        <input type="text" name="state" onChange={this.handleChange} value={this.state.state} maxLength="2" required />
                    </label>
                </div>
                <div id="allocations">
                    <div className="row">
                        <div className="cell topic">
                            Housing
                        </div>
                        <div className="cell budget">
                            { this.displayBudget("housing") }
                        </div>
                    </div>
                    <div className="row">
                        <div className="cell topic">
                            Transportation
                        </div>
                        <div className="cell budget">
                            { this.displayBudget("transportation") }
                        </div>
                    </div>
                    <div className="row">
                        <div className="cell topic">
                            Utilities
                        </div>
                        <div className="cell budget">
                            { this.displayBudget("utilities") }
                        </div>
                    </div>
                    <div className="row">
                        <div className="cell topic">
                            Food
                        </div>
                        <div className="cell budget">
                            { this.displayBudget("food") }
                        </div>
                    </div>
                    <div className="row">
                        <div className="cell topic">
                            Savings
                        </div>
                        <div className="cell budget">
                            { this.displayBudget("savings") }
                        </div>
                    </div>
                    <div className="row">
                        <div className="cell topic">
                            Debt
                        </div>
                        <div className="cell budget">
                            { this.displayBudget("debt") }
                        </div>
                    </div>
                    <div className="row">
                        <div className="cell topic">
                            Medical
                        </div>
                        <div className="cell budget">
                            { this.displayBudget("medical") }
                        </div>
                    </div>
                    <div className="row">
                        <div className="cell topic bottomCell">
                            Other
                        </div>
                        <div className="cell budget bottomCell">
                            { this.displayBudget("other") }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}