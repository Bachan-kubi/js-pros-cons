// document.addEventListener('DOMContentLoaded', () => {
//     const numeratorInput = document.getElementById('numerator');
//     const denominatorInput = document.getElementById('denominator');
//     const calculateButton = document.getElementById('calculate');
//     const resultElement = document.getElementById('result');

//     calculateButton.addEventListener('click', () => {
//         const numerator = parseFloat(numeratorInput.value);
//         const denominator = parseFloat(denominatorInput.value);

//         try {
//             if (isNaN(numerator) || isNaN(denominator)) {
//                 throw new Error('Please enter valid numbers.');
//             }

//             const result = divideNumbers(numerator, denominator);
//             resultElement.textContent = `Result: ${result}`;
//         } catch (error) {
//             resultElement.textContent = `Error: ${error.message}`;
//         }
//     });

//     function divideNumbers(numerator, denominator) {
//         if (denominator === 0) {
//             throw new Error('Division by zero is not allowed.');
//         }
//         return numerator / denominator;
//     }
// });


document.addEventListener('DOMContentLoaded', () => {
    let accountBalance = 1000;
    const balanceElement = document.getElementById('balance');
    const amountInput = document.getElementById('amount');
    const depositButton = document.getElementById('deposit');
    const withdrawButton = document.getElementById('withdraw');
    const messageElement = document.getElementById('message');

    balanceElement.textContent = `$${accountBalance}`;

    depositButton.addEventListener('click', () => {
        const amount = parseFloat(amountInput.value);
        performTransaction('deposit', amount);
    });

    withdrawButton.addEventListener('click', () => {
        const amount = parseFloat(amountInput.value);
        performTransaction('withdraw', amount);
    });

    function performTransaction(type, amount) {
        try {
            if (isNaN(amount) || amount <= 0) {
                throw new Error('Please enter a valid positive amount.');
            }

            if (type === 'withdraw' && amount > accountBalance) {
                throw new Error('Insufficient funds.');
            }

            if (type === 'withdraw' && amount > 500) {
                throw new Error('You cannot withdraw more than $500 at a time.');
            }

            if (type === 'deposit' && amount > 10000) {
                throw new Error('You cannot deposit more than $10,000 at a time.');
            }

            if (type === 'deposit' && amount + accountBalance > 15000) {
                throw new Error('Account balance cannot exceed $15,000.');
            }

            if (type === 'withdraw') {
                accountBalance -= amount;
            } else if (type === 'deposit') {
                accountBalance += amount;
            }

            balanceElement.textContent = `$${accountBalance}`;
            messageElement.textContent = `${type.charAt(0).toUpperCase() + type.slice(1)} successful: $${amount}`;
        } catch (error) {
            messageElement.textContent = `Error: ${error.message}`;
        }
    }
});
