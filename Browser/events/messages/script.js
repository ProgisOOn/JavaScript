function handler() {
    let divMessage = this.closest('.message');
    divMessage.style.display = "none";
    // divMessage.style.visibility = "hidden";
}

[].forEach.call(btnClose, function(el) {
    el.addEventListener("click", handler);
});
