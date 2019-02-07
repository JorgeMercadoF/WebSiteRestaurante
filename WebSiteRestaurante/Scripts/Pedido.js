function handleDrag(event) {
    event.dataTransfer.effectAllowed = "copy";
    event.dataTransfer.setData("text/html", event.target.innerHTML);
}
function handleDragOver(event) {
    event.stopPropagation();
    event.preventDefault();
    event.dataTransfer.dropEffect = "copy"; // Display a "copy" cursor
}
function handleDrop(dropEvent) {
    dropEvent.stopPropagation();
    dropEvent.preventDefault();
    var data = dropEvent.dataTransfer.items;
    dropEvent.target.appendChild(data.innerHTML);
}