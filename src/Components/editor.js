import React from 'react';
import Workspace from './workspace';
import Toolbox from './toolbox';

import './editor.css';

class Editor extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: '',
            fontSize: 0
        };

        this.textUpdated = this.textUpdated.bind(this);
    }

    textUpdated(obj) {
        this.setState({
            text: obj.text,
            fontSize: obj.fontSize,
            font: obj.font
        });
    }

    render() {
        return (
            <div className="flex-grow">
                <div className="flex h-full">
                    <Workspace text={this.state.text} fontSize={this.state.fontSize} font={this.state.font} />
                    <Toolbox getUpdates={this.textUpdated} />
                </div>
            </div>
        )
    }
}

export default Editor;