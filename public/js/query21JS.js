addNewRow = (item, parentDiv) => {
  var row = document.createElement('tr');
  var holder = document.createElement('td');
  var type = document.createElement('td');
  var count = document.createElement('td');

  $(holder).text(item.holder);
  $(type).text(item.type);
  $(count).text(item.count);

  row.append(holder);
  row.append(type);
  row.append(count);

  parentDiv.append(row);
};

$(document).ready(() => {

  $('#submit-btn').on('click', () => {

    let dispType = $('#disp-type-select').val();
    let cardType = $('#card-type-select').val();

    $.post('query21/postQuery21', {dispType: dispType, cardType: cardType}, (data, status) => {
      let resultsTable = $('#results-table-body');
      resultsTable.empty();

      data.forEach((item, index) => {
        if(item.holder == null) {
          item.holder = dispType;
        }
        if(item.holder == "OWNER") {
          item.holder = dispType;
        }
        if(item.type == null) {
          item.type = cardType;
        }
        if(item.type) {
          item.type = cardType;
        }
        addNewRow(item, resultsTable);
      });
    });
  });
});