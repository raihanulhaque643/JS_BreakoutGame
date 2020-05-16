const rulesBtn = document.getElementById('rules-btn');
const close = document.getElementById('close-btn');
const rules = document.getElementById('rules');



// Rules and close event handlers
rulesBtn.addEventListener('click', () => {
    rules.classList.add('show');
})

close.addEventListener('click', () => {
    rules.classList.remove('show');
})
