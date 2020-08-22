import React from 'react';
import Footer from './footer';
import './workspace.css';

class Workspace extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="w-3/4 flex flex-col relative">
                <div className="flex-grow">
                    <div className="flex justify-center items-center h-full">
                        <div className="bg-white p-2 shadow-lg">
                            <div className="w-64 h-48 border-2 border-blue-500 border-dashed">
                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                                    <text x="10" y="50%" style={{fontSize: this.props.fontSize, fontFamily: this.props.font}} fill="black" textAnchor="start">{this.props.text}</text>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Workspace;