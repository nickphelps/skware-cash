//* ******************************************************
// renderTransactions(transactions)
//   given a list of transactions, will generate an HTML
//   string representing the transactions
//* ******************************************************
function renderTransactions (transactions) {
  var finalHTML = '<div class="buffer">TRANSACTIONS</div>'

  var transactionsHTML = transactions.map(function (transaction) {
    var transactionHTML = `
		<div class="transaction">
			<div class="name">${transaction.name}</div>
			<div class="for">${transaction.for}</div>
			<div class="date">${transaction.date}</div>
			<div class="amount">${transaction.amount}</div>
		</div>
		`
    return transactionHTML
  })// inserting the data into webpage

  finalHTML += transactionsHTML.join('')

  return finalHTML
}

//* ******************************************************
//   Displays the full transaction list on page load
//   Listens for keyboard input to filter the list of
//   transactions based on the search string.
//* ******************************************************
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('transactions').innerHTML = renderTransactions(fullTransactionData)

  document.getElementById('search-input').addEventListener('input', function (e) {
    var searchString = e.target.value
    // turn into all caps
    let searchStringUpper = searchString.toUpperCase()

    var filteredData = fullTransactionData.filter(function (transaction) {
      let capName = transaction.name.toUpperCase()
	  let capFor = transaction.for.toUpperCase()
	  let capDate = transaction.date.toUpperCase()
	  let capAmount = transaction.amount.toUpperCase()

      var foundInName = capName.indexOf(searchStringUpper) > -1
      var foundInFor = capFor.indexOf(searchStringUpper) > -1
      var foundInDate = capDate.indexOf(searchStringUpper) > -1
      var foundInAmount = capAmount.indexOf(searchStringUpper) > -1
      return foundInName || foundInFor || foundInDate || foundInAmount
    })// transaction function

    document.getElementById('transactions').innerHTML = renderTransactions(filteredData)
  })
})
