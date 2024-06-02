const input = document.getElementById("favchap");
const button = document.querySelector("button");
const list = document.querySelector("ul");
// const clearButton = document.querySelector("#clearAll"); //

let chaptersArray = getChapters() || [];

/* button.addEventListener('click', () => {
    if (input.value != '') {
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');
        li.textContent = input.value;
        deleteButton.textContent = '❌';
        li.append(deleteButton);
        list.append(li);
        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            input.focus;
        });
        input.focus();
        input.value = '';
    }

});

clearButton.addEventListener('click', () => {
    list.innerHTML = '';
    input.focus;

}); */

function displayList(item) {
    let li = document.createElement('li');
    let deletebutton = document.createElement('button');
    li.textContent = item; 
    deletebutton.textContent = '❌';
    deletebutton.classList.add('delete');
    li.append(deletebutton);
    list.append(li);
    deletebutton.addEventListener('click', function () {
      list.removeChild(li);
      deleteChapter(li.textContent);
      input.focus();
    });
    console.log('Thank you');
  }

button.addEventListener('click', () => {
    if (input.value != '') { 
      displayList(input.value); 
      chaptersArray.push(input.value); 
      setChapterList(); 
      input.value = ''; 
      input.focus(); 
    }
  });

  chaptersArray.forEach(chapter => {
    displayList(chapter);
  });


  

  function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
  }

  function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
  }

  function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
  }