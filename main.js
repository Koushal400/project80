name_of_guest_list_array = [];

function submit()
{
    var name_1 = document.getElementById("name_text_input").value;

    console.log(name_text_input);
    name_of_guest_list_array.push(name_1);
    console.log(name_of_guest_list_array);
    document.getElementById("show_submitted_name").innerHTML = name_of_guest_list_array;
}
function show()
{
    document.getElementById("name_of_guest_list_array").value =  show_name;
}