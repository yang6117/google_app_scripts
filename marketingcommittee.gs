function sendEmails() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("BM/Committees/Plus one/Giveaway (1 - 100)");
  //var startRow = 22;  // Row above first row of data to process ///////////////////////////////
  //var numRows = 30;   // Number of rows to process
  // Fetch the range of cells
  var data = sheet.getDataRange().getValues();
  //var dataRange = sheet.getRange(startRow, 1, numRows, 2) // getRange(row, column, numRows, numColumns) 
  // Fetch values for each row in the Range.
  //var data = dataRange.getValues();
  for (var i = 22; i < 28; ++i) {/////////////////////////
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

    var subject = name + " - SORRY PLEASE IGNORE THE LAST EMAIL";
    var message = 'Hello '+ name +',\n\n\n' // the actual message
    /*////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      + 'You are currently scheduled ' + hrsSched + ' hour(s) for the day of Gala.\n\n'   
      //+ 'You are ticket number '+ tixnum +'. Your three digit code is '+ tixcode +'. You are currently scheduled ' + hrsSched + ' hour(s) for the day of Gala.\n\n'  
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
      */////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      //message += '\n\n';

      message += 'Please ignore that last email, I accidentally clicked the wrong button. I believe Dani is currently scheduling you all hours as of now. I apologies for any confusion!\n\n';
      /*
      message += 'As far as I am aware, your committee lead, Dani, has no hours scheduled for you. In the case if you are not volunteering for Gala,\n\n';
      
      message += 'I highly suggest that you buy a ticket or tickets before the end of the day Thursday (2/10/22) to avoid the five dollar upcharge for \n\n';

      message += 'the day of Gala. In the case if you are wanting to volunteer for Gala, please reach out to your committee lead, Dani, immediately.\n\n';

      message += 'If you are ultimately not scheduled for any hours by the end of the day Thursday (2/10/22), which is approximately 24 hours and 47\n\n';

      message += 'minutes away upon the sending of this email. If you are hoping to get into Gala without any hours dedicated towards the day of, that \n\n';

      message += 'will not be the case. ALL Board Members and ALL Committee Members are required to volunteer the minimum of two hours in order gurantee \n\n';
      
      message += 'a free entry. If you are experiencing any communication issues, please contact me ASAP at the contact info below. If you have any \n\n';

      message += 'questions or concerns please contact me immediately via Messenger/Phone. \n\n\n';
      */

      message += 'Regards, \n\n';

      message += 'XUEFENG YANG, \n'
      message += 'Asian American Student Union at the University of Minnesota \n'
      message += 'Treasurer \n'
      message += '300 Washington Ave SE, Minneapolis, MN 55455, Suite 226 \n'
      message += 'https://www.facebook.com/xuefeng.yang.3.14/ \n'
      message += '(651) 235-4264 \n\n\n'

      //message += 'This is an automated email. Please do not reply to this email.'


      

    
      + 'This is an automated email. \n\n' // or else    
       
    Logger.log(message);



    //GmailApp.sendEmail(emailAddress, subject, message);
  
  }
}
