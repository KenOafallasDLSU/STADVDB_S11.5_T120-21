addRecordRow = (item, parentDiv) => {
    var row = document.createElement('tr');

    var accountID = document.createElement('td');
    var sum = document.createElement('td');
    var count = document.createElement('td');

    $(accountID).text(`${item.accountID}`)
    $(sum).text(`${item.sum}`);
    $(count).text(`${item.count}`);
    
    row.append(accountID);
    row.append(sum);
    row.append(count);
    parentDiv.append(row);
}

$(document).ready(() => {
    $('#btnSubmit').on('click', () => {
        let k_symbol = $('#charTypeSelect option:selected').text();
        let startDate = $('#startDate').val();
        let endDate = $('#endDate').val();
        console.log(`k_symbol: ${k_symbol}`);
        console.log(`Start Date: ${startDate}`);
        console.log(`End Date: ${endDate}`);
        console.log(startDate > endDate);

        $.post('query12/postQuery12', {k_symbol: k_symbol, startDate: startDate, endDate: endDate}, (data, status) => {
            console.log(data);

            let resultTable = $('#resultRecords');
            resultTable.empty(); // clear table data
            if (data.length === 0) {
                addRecordRow({accountID: 'N/A', sum: 0, count: 0}, resultTable);
            }
            else {
                data.forEach((item, i) => {
                    console.log(item);
                    
                    //populate table
                    $('#dates').text(`Queried Dates: ${startDate} to ${endDate}`);
                    $('#charType').text(`Queried Characterization Type: ${k_symbol}`);
                    addRecordRow(item, resultTable);
                });
            }
        });
    });
})
