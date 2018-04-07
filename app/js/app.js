
document.getElementById('addItem').addEventListener('click', addItem);

var deleteSVG = '<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="774.266px" height="774.266px" viewBox="0 0 774.266 774.266" style="enable-background:new 0 0 774.266 774.266;" xml:space="preserve"><g><g><path d="M640.35,91.169H536.971V23.991C536.971,10.469,526.064,0,512.543,0c-1.312,0-2.187,0.438-2.614,0.875C509.491,0.438,508.616,0,508.179,0H265.212h-1.74h-1.75c-13.521,0-23.99,10.469-23.99,23.991v67.179H133.916c-29.667,0-52.783,23.116-52.783,52.783v38.387v47.981h45.803v491.6c0,29.668,22.679,52.346,52.346,52.346h415.703c29.667,0,52.782-22.678,52.782-52.346v-491.6h45.366v-47.981v-38.387C693.133,114.286,670.008,91.169,640.35,91.169z M285.713,47.981h202.84v43.188h-202.84V47.981z M599.349,721.922c0,3.061-1.312,4.363-4.364,4.363H179.282c-3.052,0-4.364-1.303-4.364-4.363V230.32h424.431V721.922z M644.715,182.339H129.551v-38.387c0-3.053,1.312-4.802,4.364-4.802H640.35c3.053,0,4.365,1.749,4.365,4.802V182.339z"/><rect x="475.031" y="286.593" width="48.418" height="396.942"/><rect x="363.361" y="286.593" width="48.418" height="396.942"/><rect x="251.69" y="286.593" width="48.418" height="396.942"/></g></g></svg>';
var completeSVG = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 26 26"> <path d="m.3,14c-0.2-0.2-0.3-0.5-0.3-0.7s0.1-0.5 0.3-0.7l1.4-1.4c0.4-0.4 1-0.4 1.4,0l.1,.1 5.5,5.9c0.2,0.2 0.5,0.2 0.7,0l13.4-13.9h0.1v-8.88178e-16c0.4-0.4 1-0.4 1.4,0l1.4,1.4c0.4,0.4 0.4,1 0,1.4l0,0-16,16.6c-0.2,0.2-0.4,0.3-0.7,0.3-0.3,0-0.5-0.1-0.7-0.3l-7.8-8.4-.2-.3z"/></svg>';

//If there is any text inside field, crete new task.

function addItem() {

	var text = document.getElementById("item").value;


	if(text){
		addPendingItem(text);
	}

	//Reset text input.
	document.getElementById("item").value = "";
}

function removeItem() {
	
	var item = this.parentNode.parentNode;
	var list = item.parentNode;
	
	list.removeChild(item);
}

function completeItem() {

	var item = this.parentNode.parentNode;
	var list = item.parentNode;

	//Get target list depending on current list of item.
	var targetList = (list.id == "pending") ? document.getElementById("completed") : document.getElementById("pending");

	list.removeChild(item);
	targetList.insertBefore(item, targetList.childNodes[0]);
}

function addPendingItem(text){

	//Get list element to add item to.
	var list = document.getElementById("pending");

	//Create element.
	var item = document.createElement("li");
	item.innerText = text;

	var buttons = document.createElement("div");
	buttons.classList.add("buttons");

	var removeButton = document.createElement("button");
	removeButton.classList.add("delete");
	removeButton.innerHTML = deleteSVG;

	//Add delete event for button.
	removeButton.addEventListener("click", removeItem);

	var completeButton = document.createElement("button");
	completeButton.classList.add("complete");
	completeButton.innerHTML = completeSVG;

	completeButton.addEventListener("click", completeItem);

	buttons.appendChild(removeButton);
	buttons.appendChild(completeButton);

	item.appendChild(buttons);


	list.insertBefore(item, list.childNodes[0]);
}
