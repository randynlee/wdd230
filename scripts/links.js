'use strict';

const baseURL = "https://randynlee.github.io/wdd230/";
const linksURL = "https://randynlee.github.io/wdd230/data/links.json";

const learnActivities = document.getElementById('learn-activity');

const getLinks = async function() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.lessons);
  }

  const displayLinks = function(data) {
    for (let index = 0; index < data.length; index++) {
        let listEl = document.createElement('li');

        listEl.innerHTML = `${data[index].lesson}: `;
        data[index].links.forEach((link, i) => {
            let linkEl = document.createElement('a');
            linkEl.href = link.url;
            linkEl.title = link.title;
            linkEl.innerHTML = link.title;
            linkEl.target = '_blank';

            listEl.appendChild(linkEl)
        });

        learnActivities.appendChild(activityList);
    }
};

  
  getLinks();