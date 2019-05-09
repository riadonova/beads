import React from 'react';
import './icon-button.component.scss';

export class IconButton extends React.Component {
    render () {
        return (
           <button className={this.props.className + ' icon-button'}><img alt={this.props.children} src={this.props.icon} />{this.props.children}</button>
        );
    }
}
