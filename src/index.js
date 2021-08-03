import ShuffleSort from './ShuffleSort/ShuffleSort';
import './css/style.css';

const rootElement = document.getElementById('dynamicContainer');
let shuffleSort = new ShuffleSort(rootElement);
shuffleSort.render();