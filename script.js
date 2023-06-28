document.querySelectorAll('.neutralArea').addEventListener('click', (e) => {
   item.addEventListener('dragstart', dragStart);
   item.addEventListener('dragend', dragEnd);
});

// FUnctions Item
function dragStart() {
    e.currentTarget.classList.add('dragging');

}

function dragEnd() {
    e.currentTarget.classList.remove('dragging');

}

// Functions Area