document.querySelectorAll('#dailybuttons button').forEach(button => {
    button.addEventListener('click', event => {
        const box = document.getElementById('Animation');
        const color = getComputedStyle(event.target).backgroundColor;
        box.style.animation = 'resetPosition 0.5s ease-in-out forwards';
        setTimeout(() => {
            box.style.backgroundColor = color;
            box.style.borderColor = color;
            box.style.animation = 'upAndDown 2s ease-in-out forwards';
        }, 500);
    });
});
