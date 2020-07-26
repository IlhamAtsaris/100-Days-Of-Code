import DataSource from '../data/data-source.js';
import "../Component/search-bar.js";
import "../Component/club-list.js";

const main = () => {
    const searchElement = document.querySelector("search-bar");
    const clubListElement = document.querySelector("club-list");
  
    const onButtonSearchClicked = () => {
       DataSource.searchClub(searchElement.value)
        .then(renderResult)
        .catch(fallbackResult)
    };
  
    const renderResult = result => {
        clubListElement.clubs= result
    }
  
    const fallbackResult = message => {
        clubListElement.renderError(message);
    }
  
    searchElement.clickEvent = onButtonSearchClicked;
 };


 export default main;