addRecordRow = (item, parentDiv) => {
  var row = document.createElement('tr');

  var district = document.createElement('td');
  var type = document.createElement('td');
  var trans = document.createElement('td');
  var sum = document.createElement('td');
  var count = document.createElement('td');

  $(district).text(item.district);
  $(type).text(item.type);
  $(trans).text(item.trans);
  $(sum).text(item.sum);
  $(count).text(item.count);

  row.append(district);
  row.append(type);
  row.append(trans);
  row.append(sum);
  row.append(count);

  parentDiv.append(row);
}

$(document).ready(() => {
  console.log("Michiko Gomi")

  $('#btnSubmit').on('click', () => {
    console.log(Date())

    let cardType = $('#cardTypeSelect').val()
    let district = $("#districtSelect option:selected").text()
    let districtid = $("#districtSelect").val()
    let trans = $('#transSelect').val()

    $.post('query41/postQuery41', {cardType: cardType, district: districtid, transType: trans}, (data, status) => {
      console.log(data);

      let resultTable = $('#resultRecords');
      resultTable.empty(); // clear table data

      data.forEach((item, i) => {
        //null error checking
        if(item.trans === null)
          item.trans = trans

        if(item.district === null)
          item.district = district

        if(item.type === null)
          item.type = cardType
        if(item.type === "junior")
          item.type = "Junior"
        else if(item.type === "classic")
          item.type = "Classic"
        else if(item.type === "gold")
          item.type = "Gold"

        if(item.sum === null)
          item.sum = 0

        //populate table
        addRecordRow(item, resultTable);
      });
    });
  });
})