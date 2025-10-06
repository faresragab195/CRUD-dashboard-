document.getElementById('create-button').addEventListener( "click",()=> addingItem());
function addingItem() {
    // Create a new row
    const table = document.getElementById('items-table');
    const newRow = table.insertRow();

    // Create Product Name cell
    const nameCell = newRow.insertCell();
    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.name = 'productName';
    nameInput.placeholder = 'Product Name';
    nameCell.appendChild(nameInput);

    // Create Weight cell
    const weightCell = newRow.insertCell();
    const weightInput = document.createElement('input');
    weightInput.type = 'number';
    weightInput.name = 'productWeight';
    weightInput.placeholder = 'Weight';
    weightCell.appendChild(weightInput);
}