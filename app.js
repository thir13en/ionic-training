const reason = document.querySelector('#reason');
const amount = document.querySelector('#amount');
const cancelBtn = document.querySelector('#btn-cancel');
const confirmBtn = document.querySelector('#btn-confirm');
const expensesList = document.querySelector('#expenses-list');
const expensesOutput = document.querySelector('#total-expenses');

let totalExpenses = 0;

const clear = () => {
    reason.value = '';
    amount.value = '';
};

confirmBtn.addEventListener('click', () => {
    const newItem = document.createElement('ion-item');
    newItem.textContent = reason.value + ': $' + amount.value;

    expensesList.appendChild(newItem);
    totalExpenses += +amount.value;
    expensesOutput.textContent = totalExpenses;
    clear();
});
cancelBtn.addEventListener('click', clear);
