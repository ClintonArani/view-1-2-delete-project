document.addEventListener('DOMContentLoaded', () => {
    const deleteBtn = document.getElementById('delete');
    const viewOneBtn = document.getElementById('view-one');
    const viewAllBtn = document.getElementById('view-all');
    const cards = document.querySelectorAll('.main-box > .card');
    const checkboxes = document.querySelectorAll('.card-check');

    // Function to delete checked cards
    const deleteCheckedCards = () => {
        checkboxes.forEach((checkbox, index) => {
            if (checkbox.checked) {
                cards[index].classList.add('hidden');
                cards[index].classList.remove('visible');
            }
        });
    };

    // Function to view only one checked card
    const viewOneCheckedCard = () => {
        let found = false;
        checkboxes.forEach((checkbox, index) => {
            if (checkbox.checked && !found) {
                cards[index].classList.add('visible');
                cards[index].classList.remove('hidden');
                found = true;
            } else {
                cards[index].classList.add('hidden');
                cards[index].classList.remove('visible');
            }
        });
    };

    // Function to view all cards
    const viewAllCards = () => {
        cards.forEach(card => {
            card.classList.add('visible');
            card.classList.remove('hidden');
        });
    };

    // Attach event listeners
    deleteBtn.addEventListener('click', deleteCheckedCards);
    viewOneBtn.addEventListener('click', viewOneCheckedCard);
    viewAllBtn.addEventListener('click', viewAllCards);
});
