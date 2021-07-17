const draggable_list = document.getElementById('draggable-list');
const check = document.getElementById('check');

const richestPeople = [
'Jeff Bezos',
'Elon Musk',
'Bernard Arnault',
'Bill Gates',
'Mark Zuckerberg',
'Larry Page',
'Sergey Brin',
'Warren Buffett',
'Steve Ballmer',
'Larry Ellison'
]

//Store list items

const listItems = [];

let dragStartIndex;

createList()

//Insert list items into the DOM

function createList(){
    [...richestPeople]
    .forEach((person, index)=>{
        const listItem = document.createElement('li');
        listItem.setAttribute('data-item', index);
        listItem.innerHTML = `
        <span class="number">${index + 1}</span>
        <div class="draggable" draggable=true>
            <p class="person-name">${person}</p>
            <i class="fas fa-grip-lines"></i>
        </div>
        `;
        listItems.push(listItems);
        draggable_list.appendChild(listItem);
    })
}