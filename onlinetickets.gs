function sendTickets() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("2022 PreOrder Form (201 - 700)");
  var startRow = 1;  // Row above first row of data to process
  var data = sheet.getDataRange().getValues();

  for (var i = 0 + startRow; i < 501 + startRow; ++i) {
    var row = data[i]; // this is each and individual column 
    var hasPayed = row[2];
    //var tixNum = row[3];
    var name = row[4];
    //var tixCode = row[5];
    var physorOnline = row[8];
    var tixhasbeenSent = row[9];
    //var cashorVenmo = row[11]
    //var venmo1 = row[12];
    //var venmo2 = row[13];
    //var cash1 = row[14];
    var emailAddress = row[15];
     
    if(emailAddress == 0){
      break;
    }


   
 
    
    if(hasPayed && (!tixhasbeenSent) && (physorOnline == 'ONLINE')){ // only happens if cols i is false, if they want an online tix, and if they have payed
      var subject = name + "ASU GALA 2022 - Digital Ticket Attached";
      var message = 'Hello '+ name +',\n\n\n' // the actual message
      + 'welcometogalaxxxxxxxxx you are tixnum. your six digit code is \n\n'
      + 'this is an automated email. \n\n' // or else     
      + 'end\n\n'  
      Logger.log(message);
      var cell = sheet.getRange(i+1,10); // i is rows, 9 is cols
      cell.setValue(true);
    }
    
    
    /*
    //GmailApp.sendEmail(emailAddress, subject, message);
    */
  }
}
