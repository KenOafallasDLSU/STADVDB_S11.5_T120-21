addRecordRow = (item, parentDiv) => {
    var row = document.createElement('tr');

    var loan_ID = document.createElement('td');
    var date = document.createElement('td');
    var amount = document.createElement('td');
    var status = document.createElement('td');
    var remaining = document.createElement('td');

    $(loan_ID).text(item.loan_ID);
    $(date).text(item.date);
    $(amount).text(item.amount);
    $(status).text(item.status);
    $(remaining).text(item.remaining);
    
    row.append(loan_ID);
    row.append(date);
    row.append(amount);
    row.append(status);
    row.append(remaining);
    parentDiv.append(row);
}

$(document).ready(() => {
    $('#btnSubmit').on('click', () => {
        let accountID = $('#accountID').val();

        $.post('query22/postQuery22', {accountID: accountID}, (data, status) => {
            console.log(data);

            let resultTable = $('#resultRecords');
            resultTable.empty(); // clear table data

            data.forEach((item, i) => {
                console.log(item);
                item.date = item.date.substring(0, 10);

                if (item.status === 'A') {
                    item.remaining = 'Loan Complete';
                    item.status = 'Finished';
                }
                else if (item.status === 'B')
                    item.status = 'Finished - Unpayed';
                else if (item.status === 'C')
                    item.status = 'Running';
                else if (item.status === 'D')
                    item.status = 'Running - In Debt';

                console.log(item);
                //populate table
                addRecordRow(item, resultTable);
            });
        });
    });
})
