const reason = document.querySelector('#reason');
const amount = document.querySelector('#amount');
const cancelBtn = document.querySelector('#btn-cancel');
const confirmBtn = document.querySelector('#btn-confirm');
const expensesList = document.querySelector('#expenses-list');
const expensesOutput = document.querySelector('#total-expenses');
const alertCtrl = document.querySelector('ion-alert-controller');

let totalExpenses = 0;

const clear = () => {
    reason.value = '';
    amount.value = '';
};

confirmBtn.addEventListener('click', () => {
    const newItem = document.createElement('ion-item');
    newItem.textContent = reason.value + ': $' + amount.value;

    if (
        reason.value.trim().length <= 0 ||
        amount.value <= 0 ||
        amount.value.trim().length <= 0
    ) {
        console.log('wired');
        alertCtrl.create({
            header: 'Invalid inputs',
            message: 'Please enter a valir reason and amount',
            buttons: ['OK']
        }).then(
            alertEl => alertEl.present()
        );
    } else {
        expensesList.appendChild(newItem);
        totalExpenses += +amount.value;
        expensesOutput.textContent = totalExpenses;
        clear();
    }
});
cancelBtn.addEventListener('click', clear);
