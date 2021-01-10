addRecordRow = (item, parentDiv) => {
    var row = document.createElement('tr');

    var district = document.createElement('td');
    var sum = document.createElement('td');
    var count = document.createElement('td');

    $(district).text(item.district);
    $(sum).text(item.sum);
    $(count).text(item.count);

    row.append(district);
    row.append(sum);
    row.append(count);

    parentDiv.append(row)
}

$(document).ready(() => {
    $('#btnSubmit').on('click',() =>{
        console.log(Date());
        let kSymbol = $('#kSymbolSelect option:selected').text();
        let district = $('#districtSelect option:selected').text();

        $.post('query31/postQuery31',{kSymbol: kSymbol, district: district},(data,status) => {
            console.log(data);

            let resultTable = $('#resultRecords');
            resultTable.empty();

            data.forEach((item,i) => {
                if (item.kSymbol === null)
                    item.kSymbol = kSymbol
                
                if (item.district === null)
                    item.district = district
                
                addRecordRow(item,resultTable)
            })
        })
    })
})