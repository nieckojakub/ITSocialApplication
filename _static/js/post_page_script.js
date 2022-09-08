function setPost() {
    const homeButton = document.getElementById("homeButton")
    const forumButton = document.getElementById("forumButton")
    const messagesButton = document.getElementById("messagesButton")
    const forumParent = forumButton.parentElement.parentElement
    const homeParent = homeButton.parentElement.parentElement
    const messagesElement = messagesButton.parentElement.parentElement
    homeParent.classList.remove('nav__btn-active')
    forumParent.classList.remove('nav__btn-active')
    messagesElement.classList.remove('nav__btn-active')
    homeParent.style.border = 'none'
    forumParent.style.border = 'none'
}

setPost()