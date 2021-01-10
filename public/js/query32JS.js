addRecordRow = (item, parentDiv) => {
    var row = document.createElement('tr');

    var district = document.createElement('td');
    var sum = document.createElement('td');
    var count = document.createElement('td');
    
    $(district).text(`${item.district}`)
    $(count).text(`${item.count}`);
    $(sum).text(`${item.sum}`);

    row.append(district);
    row.append(count);
    row.append(sum);
    
    parentDiv.append(row);
}

$(document).ready(() => {
    $('#btnSubmit').on('click', () => {
        let k_symbol = $('#kSymbolSelect option:selected').text();
        let startDate = $('#startDate').val();
        let endDate = $('#endDate').val();
        console.log(`k_symbol: ${k_symbol}`);
        console.log(`Start Date: ${startDate}`);
        console.log(`End Date: ${endDate}`);
        console.log(startDate > endDate);

        $.post('query32/postQuery32', {k_symbol: k_symbol, startDate: startDate, endDate: endDate}, (data, status) => {
            console.log(data);

            let resultTable = $('#resultRecords');
            resultTable.empty(); // clear table data

            if (data.length === 0) {
                addRecordRow({district: 'N/A', count: 0, sum: 0}, resultTable);
            }
            else {
                data.forEach((item, i) => {
                    console.log(item);
                    
                    //populate table
                    $('#dates').text(`Queried Dates: ${startDate} to ${endDate}`);
                    $('#charType').text(`Queried Characterization Type: ${$('#charTypeSelect option:selected').text()}`);
                    addRecordRow(item, resultTable);
                });
            }
        });
    });
})
