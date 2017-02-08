import React, { Component } from 'react';
import './bulma.css';

export class InSide extends Component
{
    state = {
        count: ''
    }

    update = (event) =>
    {
        this.setState({count: event.target.value});
    }


    render()
    {
        var list = [];
        for(var i = 0; i < this.state.count; i++)
        {
            list.push(<div className="column notification is-primary has-text-centered App-body">Number1. {(i+1)}</div>);
        }
        return (
            <div className="column bg-bg">
            <p className="control">
                <span className="select">
                    <select onChange={this.update}>
                    <option value="0">02452</option>
                    <option value="1">154545</option>
                    <option value="2">2555</option>
                    <option value="3">3775</option>
                    <option value="4">4575</option>
                    <option value="5">55722</option>
                    <option value="6">675775</option>
                    </select>
                </span>
                </p>
                  {list}
            </div>
        );
    }
}
