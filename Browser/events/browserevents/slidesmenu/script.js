function openUl(event) {
    if (event.target.tagName == "LI") ul.classList.toggle('bold');
    else {
        if (ul.classList == 'menu') ul.classList = "menu-open";
        else ul.className = 'menu';
    }
}

ul.addEventListener("click", openUl);