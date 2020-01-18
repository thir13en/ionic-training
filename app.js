const reason = document.querySelector('#reason');
const amount = document.querySelector('#amount');
const cancelBtn = document.querySelector('#btn-cancel');
const confirmBtn = document.querySelector('#btn-confirm');
const expensesList = document.querySelector('#expenses-list');

confirmBtn.addEventListener('click', () => {
    const newItem = document.createElement('ion-item');
    newItem.textContent = reason.value + ': $' + amount.value;

    expensesList.appendChild(newItem);
});
