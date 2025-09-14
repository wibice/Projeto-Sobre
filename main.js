const trilho = document.getElementById('toggle');
const body = document.body;
const avatar = document.getElementById('avatar');

trilho.addEventListener('click', () => {
    body.classList.toggle('dark');
    trilho.classList.toggle('dark');

    if(body.classList.contains('dark')){
        avatar.src = 'assets/avatar1.jpg'; // avatar dark mode
    } else {
        avatar.src = 'assets/cat-white.jpg'; // avatar light mode
    }
});
