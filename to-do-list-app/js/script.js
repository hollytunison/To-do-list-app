function newItem() {


    //Adding a new item to the list:
    let li = $('<li></li>');
    let inputValue = $('#input').val();
    li.append(inputValue);

    if (inputValue === '') {
        alert("You must write something!");
    } else {
        $('#list').append(li);
    }

    //Crossing an item out:
    li.on('dblclick', function crossOut() {
        li.toggleClass('strike');
    })

    //Adding a delete button "X":
    let crossOutButton = $("<crossOutButton></crossOutButton>");
    crossOutButton.append(document.createTextNode("X"));
    li.append(crossOutButton);

    crossOutButton.on("click", deleteListItem);

    //Adding class delete (Display: NONE) from CSS:
    function deleteListItem() {
        li.addClass('delete')
    }

    //Reordering items:
    $('#list').sortable();
}