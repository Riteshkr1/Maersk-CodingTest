import ShuffleSort from './ShuffleSort/ShuffleSort';
import './css/style.css';

const rootElement = document.getElementById('dynamicContainer');
var conv = new ShuffleSort(rootElement);
conv.render();