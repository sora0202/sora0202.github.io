window.onload = function() {
    const titles = document.querySelectorAll('.accordion-container > .accordion-title');
    console.log(titles);

    titles.forEach((title) => {
        const content = title.nextElementSibling;
        title.addEventListener('click', () => {
            title.classList.toggle('active');
            content.classList.toggle('open');
        })
    })
};

function init(title) {

}