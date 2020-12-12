/* eslint-disable react/jsx-filename-extension */
import { render } from 'react-dom';
import App from './components/App';
import './styles.css';

const mountNode = document.getElementById('root');
render(<App />, mountNode);
