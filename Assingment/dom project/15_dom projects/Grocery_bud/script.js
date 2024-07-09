// script.js

document.addEventListener('DOMContentLoaded', () => {
    const submitButton = document.getElementById('submit');
    const clearButton = document.getElementById('clear');
    const inputField = document.getElementById('grocery-input');
    const itemList = document.getElementById('item-list');

    // Function to add a new item
    function addItem() {
        const itemText = inputField.value.trim();
        if (itemText === '') return;

        const itemDiv = document.createElement('div');
        itemDiv.classList.add('item');

        const itemInput = document.createElement('input');
        itemInput.type = 'text';
        itemInput.value = itemText;
        itemInput.disabled = true;

        const iconsDiv = document.createElement('div');
        iconsDiv.classList.add('icons');

        const editIcon = document.createElement('i');
        editIcon.classList.add('fa-solid', 'fa-pen-to-square');
        editIcon.style.color = '#51eb0f';
        editIcon.addEventListener('click', () => editItem(itemInput));

        const deleteIcon = document.createElement('i');
        deleteIcon.classList.add('fa-solid', 'fa-trash');
        deleteIcon.style.color = '#f4062a';
        deleteIcon.addEventListener('click', () => deleteItem(itemDiv));

        iconsDiv.appendChild(editIcon);
        iconsDiv.appendChild(deleteIcon);

        itemDiv.appendChild(itemInput);
        itemDiv.appendChild(iconsDiv);

        itemList.appendChild(itemDiv);

        inputField.value = '';
    }

    // Function to edit an item
    function editItem(input) {
        if (input.disabled) {
            input.disabled = false;
            input.focus();
        } else {
            input.disabled = true;
        }
    }

    // Function to delete an item
    function deleteItem(item) {
        item.remove();
    }

    // Function to clear all items
    function clearItems() {
        itemList.innerHTML = '';
    }

    submitButton.addEventListener('click', addItem);
    clearButton.addEventListener('click', clearItems);

    // Allow pressing Enter to add item
    inputField.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            addItem();
        }
    });
});
