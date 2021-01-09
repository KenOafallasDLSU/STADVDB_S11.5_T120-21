addRecordRow = (item, parentDiv) => {
    var row = document.createElement('tr');

    var sum = document.createElement('td');
    var district = document.createElement('td');
    var count = document.createElement('td');

    $(sum).text(item.sum);
    $(district).text(item.district);
    $(count).text(item.count);

    row.append(sum);
    row.append(district);
    row.append(count);

    parentDiv.append(row)
}

$(document).ready(() => {
    $('#btnSubmit').on('click',() =>{
        console.log(Date());
        let kSymbol = $('#kSymbolSelect').val();
        let district = $('#districtSelect').val();

        $.post('query31/postQuery31',{kSymbol: kSymbol, district: district},(data,status) => {
            console.log(data);

            let resultTable = $('#resultRecords');
            resultTable.empty();

            data.forEach((item,i) => {
                if (item.kSymbol === null)
                    item.kSymbol = kSymbol
                if (item.kSymbol === 'POJISTNE')
                    item.kSymbol = 'Insurance Payment'
                else if (item.kSymbol === 'SIPO')
                    item.kSymbol = 'Household Payment'
                else if (item.kSymbol === 'LEASING')
                    item.kSymbol = 'Leasing Payment'
                else
                    item.kSymbol = 'Loan Payment'
                
                if (item.district === null)
                    item.district = district
                
                addRecordRow(item,resultTable)
            })
        })
    })
})