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
    .map( a => ({value: a, sort: Math.random()}))
    .sort((a, b) => a.sort - b.sort)
    .map(a =>  a.value)
    .forEach((person, index)=>{
        const listItem = document.createElement('li');
        // console.log(person)
        listItem.setAttribute('data-index', index);

        listItem.innerHTML = `
        <span class="number">${index + 1}</span>
        <div class="draggable" draggable="true">
            <p class="person-name">${person}</p>
            <i class="fas fa-grip-lines"></i>
        </div>
        `;

        listItems.push(listItem)

        draggable_list.appendChild(listItem);
    })

    addEventListener();
}

function dragStart(){
    // console.log('Event: ', 'dragstart')
    dragStartIndex = +this.closest('li').getAttribute('data-index');
    // console.log(dragStartIndex)
}

function dragEnter(){
    this.classList.add('over')
    // console.log('Event: ', 'dragenter')
}

function dragLeave(){
    this.classList.remove('over')
    // console.log('Event: ', 'dragleave')
}

function dragOver(e){
    e.preventDefault();
    // console.log('Event: ', 'dragover')
}

function dragDrop(){
    const dragEndIndex = +this.getAttribute('data-index');
    swapItems(dragStartIndex, dragEndIndex);
    this.classList.remove('over');
    // console.log('Event: ', 'drop')
}

//Swap list items that are drag and drop

function swapItems(fromIndex, toIndex){
    const itemOne = listItems[fromIndex].querySelector('.draggable');
    const itemTwo = listItems[toIndex].querySelector('.draggable');

    listItems[fromIndex].appendChild(itemTwo);
    listItems[toIndex].appendChild(itemOne);
}

//Check the order of list items

function checkOrder(){
    listItems.forEach((listItem, index)=>{
        const personName = listItem.querySelector('.draggable').innerText.trim();

        if(personName !== richestPeople[index]){
            listItem.classList.add('wrong');
        } else {
            listItem.classList.remove('wrong');
            listItem.classList.add('right');
        }
    })
}

function addEventListener(){
    const draggables = document.querySelectorAll('.draggable');
    const dragListItems = document.querySelectorAll('.draggable-list li')

    draggables.forEach(draggable=>{
        draggable.addEventListener('dragstart', dragStart);
    })

    dragListItems.forEach(item=>{
        item.addEventListener('dragover', dragOver);
        item.addEventListener('drop', dragDrop);
        item.addEventListener('dragenter', dragEnter);
        item.addEventListener('dragleave', dragLeave);
    })
}


check.addEventListener('click', checkOrder);








