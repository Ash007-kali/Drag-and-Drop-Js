

//first pick all the droppable items.

const droppable = document.querySelectorAll('.droppable')
const draggable = document.querySelector('.draggable')


draggable.addEventListener('dragstart', startDrag);
draggable.addEventListener('dragend', endDrag);


function startDrag() {
    console.log('started dragging');
    this.classList.add('hold');
    this.classList.add('draggingcurrently');

}

function endDrag() {
    console.log('ended dragging');
    this.classList.remove('hold');
    this.classList.remove('draggingcurrently');
}


//handle drop events

droppable.forEach( (item) => {
    console.log(item);
    item.addEventListener('dragover', dragOver)
    item.addEventListener('dragenter', dragEnter)
    item.addEventListener('drop', dragDrop)
} )

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
}

function dragDrop(e) {
    console.log(e);
    let item = document.querySelector(".draggingcurrently")
    this.append(item);
}