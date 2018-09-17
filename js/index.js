/*global console*/
var comment = document.getElementById("comment"),
    addComment = comment.nextElementSibling,
    commentsContainer = document.getElementById("comments-container"),
    commentCounter = document.getElementById("comment-counter");


addComment.addEventListener("click", function () {
    var numberOfComments = Number(commentCounter.textContent),
        date = new Date();
    numberOfComments++;
    commentCounter.textContent = numberOfComments;
    commentsContainer.style.display = "block";
    commentsContainer.innerHTML +=
        `<div>${comment.value}
            <span>${date.toLocaleTimeString()} - ${date.toLocaleDateString()}</span>
            <i class="fa fa-trash"></i>
         </div>`;
    comment.value = "";
    var deleteIcons = document.querySelectorAll(".container2 .comments div i");
    for (let i = 0; i < deleteIcons.length; i++) {
        deleteIcons[i].addEventListener("click", function () {
            this.parentElement.style.display = "none";
            numberOfComments--;
            commentCounter.textContent = numberOfComments;
        });
    }
});