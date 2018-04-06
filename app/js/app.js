


//If there is any text inside field, crete new task
function addItem() {

	var text = document.getElementById("item").value;
	console.log(text);
}

document.getElementById('addItem').addEventListener('click', addItem);

