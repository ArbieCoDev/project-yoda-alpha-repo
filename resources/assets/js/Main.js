import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './Main.scss';
import MainRouter from './components/MainRouter';
import WebFontLoader from 'webfontloader';

WebFontLoader.load({
google: {
    families: ['Roboto:300,400,500,700', 'Material Icons'],
},
});

class Main extends Component {
    render() {
        return (
         <MainRouter />
        );
    }
}
 
export default Main;
 
/* The if statement is required so as to Render the component on pages that have a div with an ID of "root";  
*/
 
if (document.getElementById('root')) {
    ReactDOM.render(<Router><MainRouter /></Router>, document.getElementById('root'));
}