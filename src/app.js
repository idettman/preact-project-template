import {h, render} from 'preact'
import DummyComponent from './components/dummy-component.js';

const root = document.querySelector('main');

render(<DummyComponent/>, root);
