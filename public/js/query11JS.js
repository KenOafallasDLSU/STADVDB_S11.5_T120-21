addRecordRow = (item, parentDiv) => {
    var row = document.createElement('tr');

    var accountID = document.createElement('td');
    var date = document.createElement('td');
    var balance = document.createElement('td');

    $(accountID).text(item.accountID);
    $(date).text(`${item.startDate} to ${item.endDate}`);
    $(balance).text(`${item.balance}`);
    
    row.append(accountID);
    row.append(date);
    row.append(balance);
    parentDiv.append(row);
}

$(document).ready(() => {
    $('#btnSubmit').on('click', () => {
        let accountID = $('#accountID').val();
        let startDate = $('#startDate').val();;
        let endDate = $('#endDate').val();
        console.log(`Type Date: ${typeof(startDate)}`);
        console.log(`Account ID: ${accountID}`);
        console.log(`Start Date: ${startDate}`);
        console.log(`End Date: ${endDate}`);
        console.log(startDate > endDate);

        $.post('query11/postQuery11', {accountID: accountID, startDate: startDate, endDate: endDate}, (data, status) => {
            console.log(data);

            let resultTable = $('#resultRecords');
            resultTable.empty(); // clear table data

            data.forEach((item, i) => {
                console.log(item);
                
                if (item.balance === null)
                    item.balance = 'N/A';
                
                item.accountID = accountID;
                item.startDate = startDate;
                item.endDate = endDate;

                console.log(item);
                //populate table
                addRecordRow(item, resultTable);
            });
        });
    });
})
