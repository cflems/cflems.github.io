function printPage(e) {
    const body = document.querySelector('body');
    body.classList.add('printable');
    window.print();
    body.classList.remove('printable');
    return false;
}
