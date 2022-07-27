function sendEmails() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("BM/Committees/Plus one/Giveaway (1 - 100)");
  var startRow = 2;  // Row above first row of data to process
  //var numRows = 13;   // Number of rows to process
  // Fetch the range of cells
  var data = sheet.getDataRange().getValues();
  //var dataRange = sheet.getRange(startRow, 1, numRows, 2) // getRange(row, column, numRows, numColumns) 
  // Fetch values for each row in the Range.
  //var data = dataRange.getValues();
  for (var i = 0 + startRow; i < 13 + startRow; ++i) {
    var row = data[i]; // this is each and individual column 
    //var name = row[0];  // First column
    var emailAddress = row[10];  
    var name = row[3];
    var tixnum = row[2];
    var tixcode = row[1];

    var subject = name + " - DO NOT REPLY AUTOMATED TEST";
    var message = 'Hello '+ name +',\n\n' // the actual message
      + 'this is an automated email. i am currently testing automated mass emailing. please do not respond. \n\n' // or else     
      + 'xuefeng \n\n'  
    Logger.log(message);



    GmailApp.sendEmail(emailAddress, subject, message);
    /*
    if (sheet.getRange(startRow + i, 3).isBlank()) {  // Prevents sending duplicates
      GmailApp.sendEmail('yang6117@umn.edu', subject, message);
      var d = new Date();
      sheet.getRange(startRow + i, 3).setValue(d.toLocaleTimeString()); // record time of the email
      // Make sure the cell is updated right away in case the script is interrupted
      SpreadsheetApp.flush();
    }
    */
  }
}
