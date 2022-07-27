function sendEmails() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("BM/Committees/Plus one/Giveaway (1 - 100)");
  var startRow = 22;  // Row above first row of data to process ///////////////////////////////
  //var numRows = 30;   // Number of rows to process
  // Fetch the range of cells
  var data = sheet.getDataRange().getValues();
  //var dataRange = sheet.getRange(startRow, 1, numRows, 2) // getRange(row, column, numRows, numColumns) 
  // Fetch values for each row in the Range.
  //var data = dataRange.getValues();
  for (var i = 0 + startRow; i < 29 + startRow; ++i) {/////////////////////////
    var row = data[i];
    //var name = row[0];  // First column
    var emailAddress = row[10]; 
    var plusOne = row[6];
    var freeTix = row[5]; 
    var hrsSched = row[4];
    var name = row[3];
    var tixnum = row[2];
    var tixcode = row[1];

    if(hrsSched == ''){
      hrsSched = 0;
    }

    var subject = name + " - GALA 2022 ONLINE TICKETS";
    var message = 'Hello '+ name +',\n\n\n' // the actual message
      + 'You are ticket number '+ tixnum +'. Your three digit code is '+ tixcode +'. You are currently scheduled ' + hrsSched + ' hour(s) for the day of Gala.\n\n'   

      if(freeTix == 'YES'){
        message += 'You do not need to pay to enter Gala as you are volunteering the minimum of 2 hours. \n\n';
      }else{
        message += 'You will have to pay in order to enter Gala. You are not volunteering the minimum of 2 hours. \n\n';
      }
      var alsolol = ''
      if(freeTix == 'NO'){
        alsolol = " also";
      }

      if(plusOne == 'YES'){
        message += 'You are allowed a plus one since you are volunteering the minimum of 4 hours. \n\n'
        + 'Since you have a plus one, please make sure to update the "BM/Committees/Plus one/Giveaway (1 - 100)" \n\n'
        + 'sheet which is on the GALA 2022 Ticket MASTER SHEET \n\n'
      }else{
        message += 'You are' + alsolol + ' not allowed a plus one since you are not volunteering the minimum of 4 hours. \n\n'
      }
      
      message += 'If any of the above info seems wrong please make sure to update the "BM/Committees/Plus one/Giveaway (1 - 100)"   \n\n'
      
      message += 'sheet which is on the GALA 2022 Ticket MASTER SHEET, or update your committee lead about your availability.        \n\n' 

      message += 'If you have any questions please either Slack me, or contact me via Messenger/Phone. \n\n\n'


      message += 'Regards, \n\n'

      message += 'XUEFENG YANG, \n'
      message += 'Asian American Student Union at the University of Minnesota \n'
      message += 'Treasurer \n'
      message += '300 Washington Ave SE, Minneapolis, MN 55455, Suite 226 \n'
      message += 'https://www.facebook.com/xuefeng.yang.3.14/ \n'
      message += '(651) 235-4264 \n\n\n'

      //message += 'This is an automated email. Please do not reply to this email.'


      

      //+ 'freetix.' + freeTix + ' \n\n' // or else    
      //+ 'this is an automated email. i am currently testing automated mass emailing. please do not respond. \n\n' // or else    
      //+ 'xuefeng \n\n'  
    Logger.log(message);



    //GmailApp.sendEmail(emailAddress, subject, message);
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
