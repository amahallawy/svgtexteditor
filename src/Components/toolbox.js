import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Config from '../config';

import './toolbox.css';

class Toolbox extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: '',
            fontSize: Config.default.fontSize,
            font: Config.default.font
        }

        this.updateText = this.updateText.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleOptionButtons = this.handleOptionButtons.bind(this);
    }

    handleSubmit() {
        this.props.getUpdates(this.state);
    }

    updateText(e) {
        console.log(e.target.value);
        switch(e.target.id) {
            case 'input-text':
                this.setState({ text: e.target.value }, this.handleSubmit);
                break;
            case 'input-font-size':
                this.setState({ fontSize: e.target.value }, this.handleSubmit);
                break;
            case 'input-font-family':
                this.setState({ font: e.target.value }, this.handleSubmit);
                break;
            default:
                break;
        }
    }

    handleOptionButtons(e) {
        console.log(e.currentTarget.isactive);
    }

    render() {
        return (
            <div className="w-1/4 bg-white rounded p-4 m-4 shadow-lg">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="input-text">{Config.label.text}</label>
                    <input className="shadow apperance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500" 
                        id="input-text" type="text" placeholder="Text" onChange={this.updateText}/>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="input-font-family">{Config.label.font}</label>
                    <div className="relative">
                        <select id="input-font-family" className="shadow appearance-none w-full border border-gray-200 text-gray-700 py-2 px-3 pr-8 rounded leading-tight focus:outline-none focus:border-blue-500"
                            onChange={this.updateText}>
                            {Config.fonts.map((item, pos) => {
                                return (
                                    <option key={pos} value={item}>{item}</option>
                                );
                            })}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <FontAwesomeIcon icon={'angle-down'}/>
                        </div>
                    </div>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="input-color">{Config.label.color}</label>
                    <div className="relative">
                        <select id="input-color" className="shadow appearance-none w-full border border-gray-200 text-gray-700 py-2 px-3 pr-8 rounded leading-tight focus:outline-none focus:border-blue-500"></select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <FontAwesomeIcon icon={'angle-down'}/>
                        </div>
                    </div>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="input-font-size">{Config.label.fontSize}</label>
                    <input className="apperance-none w-3/4 py-2 text-gray-700 leading-tight focus:outline-none align-middle" id="input-font-size" type="range" min="1" max="100" value={this.state.fontSize} onChange={this.updateText}/>
                    <span className="inline-block relative shadow w-1/5 apperance-none border rounded py-2 px-3 text-gray-700 leading-tight ml-2 text-center">{this.state.fontSize}</span>
                </div>

                <div className="mb-4 flex justify-between">
                    <div className="w-1/2">
                        <label className="block text-gray-700 text-sm font-bold mb-2">{Config.label.align}</label>
                        <div className="flex justify-start">
                            <button id="align-left" className="text-align bg-gray-200 rounded shadow-md py-1 px-2 mr-4 hover:bg-gray-400" 
                                type="button" onClick={this.handleOptionButtons} isactive={0}>
                                <FontAwesomeIcon icon={'align-left'}/>
                            </button>
                            <button id="align-center" className="text-align bg-gray-200 rounded shadow-md py-1 px-2 mr-4 hover:bg-gray-400" 
                                type="button" onClick={this.handleOptionButtons}>
                                <FontAwesomeIcon icon={'align-center'}/>
                            </button>
                            <button id="align-right" className="text-align bg-gray-200 rounded shadow-md py-1 px-2 hover:bg-gray-400" 
                                type="button" onClick={this.handleOptionButtons}>
                                <FontAwesomeIcon icon={'align-right'}/>
                            </button>
                        </div>
                    </div>

                    <div className="w-1/2 ml-auto">
                        <label className="block text-gray-700 text-sm font-bold mb-2">{Config.label.style}</label>
                        <div className="flex">
                            <button id="text-bold" className="text-align bg-gray-200 rounded shadow-md py-1 px-2 mr-4 hover:bg-gray-400" 
                                type="button" onClick={this.handleOptionButtons}>
                                <FontAwesomeIcon icon={'bold'}/>
                            </button>
                            <button id="text-italic" className="text-align bg-gray-200 rounded shadow-md py-1 px-2 mr-4 hover:bg-gray-400" 
                                type="button" onClick={this.handleOptionButtons}>
                                <FontAwesomeIcon icon={'italic'}/>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">{Config.label.position}</label>
                    <div className="flex justify-between">
                        <div className="w-1/2">
                            <label className="text-gray-700 text-sm font-bold mr-2 w-1/4" htmlFor="position-x">{Config.label.x}</label>
                            <input className="shadow apperance-none border rounded w-3/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500" id="position-x" type="text" placeholder="X value"/>
                        </div>
                        <div className="w-1/2 ml-auto">
                            <label className="text-gray-700 text-sm font-bold mr-2 w-1/4" htmlFor="position-y">{Config.label.y}</label>
                            <input className="shadow apperance-none border rounded w-3/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500" id="position-y" type="text" placeholder="Y value"/>
                        </div>
                    </div>
                </div>

                <div className="flex justify-evenly">
                    <button id="save-image" className="text-align bg-blue-700 text-gray-300 border-b-4 border-blue-900 rounded shadow-md py-1 px-2 transition-all duration-300 hover:bg-blue-900 hover:text-white hover:border-b-0" type="button">
                        <FontAwesomeIcon icon={['far', 'image']}/> {Config.label.imageButton}
                    </button>
                    <button id="show-code" className="text-align bg-blue-700 text-gray-300 border-b-4 border-blue-900 rounded shadow-md py-1 px-2 transition-all duration-300 hover:bg-blue-900 hover:text-white hover:border-b-0" type="button">
                        <FontAwesomeIcon icon={'code'}/> {Config.label.codeButton}
                    </button>
                </div>
            </div>
        )
    }
}

export default Toolbox;