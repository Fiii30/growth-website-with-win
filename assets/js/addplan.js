let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

const expenseName = document.getElementById("expenseName");
const expensePrice = document.getElementById("expensePrice");
const expenseDescription = document.getElementById("expenseDescription");
const addExpense = document.getElementById("addExpense");
const resetData = document.getElementById("resetData");
const expenseTable = document.getElementById("expenseTable");
const totalPrice = document.getElementById("totalPrice");
const backButton = document.getElementById("backButton");

backButton.addEventListener("click", function() {
    window.location.href = "../page/community.html";
});

function renderExpenses() {
    expenseTable.innerHTML = "";
    let total = 0;

    for (let i = 0; i < expenses.length; i++) {
        const expense = expenses[i];
        total += expense.price;

        expenseTable.innerHTML += `
            <tr>
                <td>${expense.name}</td>
                <td>Rp ${expense.price.toLocaleString("id-ID")}</td>
                <td>${expense.description}</td>
                <td>
                    <button type="button" onclick="deleteExpense(${i})">
                        Hapus
                    </button>
                </td>
            </tr>
        `;
    }

    totalPrice.textContent = total.toLocaleString("id-ID");
}

addExpense.addEventListener("click", function() {
    const name = expenseName.value;
    const price = expensePrice.value;
    const description = expenseDescription.value;

    if (name === "" || price === "") {
        alert("Nama pengeluaran dan nominal harus diisi!");
    } else {
        const newExpense = {
            name: name,
            price: Number(price),
            description: description
        };

        expenses.push(newExpense);

        localStorage.setItem("expenses", JSON.stringify(expenses));

        renderExpenses();

        expenseName.value = "";
        expensePrice.value = "";
        expenseDescription.value = "";
    }
});

resetData.addEventListener("click", function() {
    const confirmReset = confirm("Yakin ingin menghapus semua data?");

    if (confirmReset) {
        localStorage.removeItem("expenses");
        expenses = [];
        renderExpenses();

        alert("Semua data berhasil dihapus!");
    }
});

function deleteExpense(index) {
    expenses.splice(index, 1);

    localStorage.setItem("expenses", JSON.stringify(expenses));

    renderExpenses();
}

renderExpenses();