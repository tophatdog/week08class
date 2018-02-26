function todoList() {
	const username = document.getElementById("username").value
	const comment = document.getElementById("comment").value
	// const url = document.getElementById("addurl").value

	const userNameText = document.createTextNode("Username: " + username)
	const commentText = document.createTextNode("Comment: " + comment)
// const urlText = document.createTextNode("url: " + comment)

	const newListItem = document.createElement("LI")
	newListItem.className = "list-group-item"
	const newUserName = document.createElement("H3")
	newUserName.appendChild(userNameText)
	const newComment = document.createElement("P")
	newComment.appendChild(commentText)
	// const newurl = document.createElement("P")
	// newComment.appendChild(urlText)

	newListItem.appendChild(newUserName)
	newListItem.appendChild(newComment)
	// newListItem.appendChild(newurl)
	document.getElementById("commentList").appendChild(newListItem)
}
