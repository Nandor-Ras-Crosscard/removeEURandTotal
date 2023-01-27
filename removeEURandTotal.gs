function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createAddonMenu()
      .addItem('Check IDV2 Limit', 'removeEURandTotal')
      .addToUi();
}

function removeEURandTotal() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var data = sheet.getDataRange().getValues();
  var total = 0;
  for (var i = 0; i < data.length; i++) {
    if (data[i][2].toString().startsWith("Loading: ")) {
      var amount = data[i][3].toString().replace("EUR ", "").replace(",", "");
      total += parseFloat(amount);
    }
  }
  var nextEmptyRow = sheet.getLastRow() + 1;
  var totalCell = sheet.getRange("D" + nextEmptyRow);
  totalCell.setValue(total);
  totalCell.activate();
  
  sheet.getRange("A" + nextEmptyRow).setValue("Total Upgraded in the Last 365 Days (EUR)").setFontWeight("bold");
  sheet.getRange("A" + (nextEmptyRow+1)).setValue("Total to be upgraded (EUR)").setFontWeight("bold");
  sheet.getRange("D" + (nextEmptyRow+1)).setValue(15000-total);
}
