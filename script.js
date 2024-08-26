function showContent(contentId) {
    const panes = document.querySelectorAll('.tab-pane');
    panes.forEach(pane => {
        pane.classList.remove('active');
    });

    document.getElementById(contentId).classList.add('active');

    const links = document.querySelectorAll('.nav-menu a');
    links.forEach(link => {
        link.classList.remove('active');
    });

    document.querySelector(`a[href="#${contentId}"]`).classList.add('active');
}
