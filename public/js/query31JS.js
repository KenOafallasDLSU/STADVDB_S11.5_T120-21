addRecordRow = (item, parentDiv) => {
    var row = document.createElement('tr');

    var district = document.createElement('td');
    var sum = document.createElement('td');

    $(district).text(item.district);
    $(sum).text(item.sum);

    row.append(district);
    row.append(sum);

    parentDiv.append(row)
}

$(document).ready(() => {
    $('#btnSubmit').on('click',() =>{
        console.log(Date());
        let kSymbol = $('#kSymbolSelect option:selected').text();

        $.post('query31/postQuery31',{kSymbol: kSymbol},(data,status) => {
            console.log(data);

            let resultTable = $('#resultRecords');
            resultTable.empty();

            data.forEach((item,i) => {
                if (item.kSymbol === null)
                    item.kSymbol = kSymbol
                
                addRecordRow(item,resultTable)
            })
        })
    })
})