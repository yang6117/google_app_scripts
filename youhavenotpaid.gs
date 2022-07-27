function uhavenotPaid() {
  var sheetSrc = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("DAY OF PREREG $20/$30 (883 - 1000)");
  var startRow = 1;  // Row above first row of data to process
  var numRows = 501;   // Number of rows to process
  // Fetch the range of cells
  var data = sheetSrc.getDataRange().getValues();
  //var dataRange = sheetSrc.getRange(startRow, 1, numRows, 2) // getRange(row, column, numRows, numColumns) 
  // Fetch values for each row in the Range.
  // var data = dataRange.getValues();
  for (var i = 0 + startRow; i < 501 + startRow; ++i) {
    var row = data[i]; ////////////////////////////////////////////////////////////////////////////// change data to i to row of nonpayer 
    var emailAddress = data[15];
    var didtheypayVenmo;
    var didtheyCash;
    var name = row[4];
    var cashorVenmo = row[11]
    var venmo1 = row[12];
    var venmo2 = row[13];
    var cash1 = row[14]; // if payed cashedbox is true
    var emailAddress = row[15];
    var amountOwed;
    var tixNum; 

    
    if(emailAddress == 0){
      break;
    }

    if(data[i+1][15] == emailAddress){ ////////////////////////////////////////////////////////////////////////////// change data to i to row of nonpayer 
      amountOwed = 25;
      tixNum = 2;
    }else{
      amountOwed = 15
      tixNum = 1;
    }

    if((venmo1 && venmo2) && (cashorVenmo == 'VENMO')){ 
      didtheypayVenmo = true;  ///////////////////////////////////////////////////////////////////////////////////////////       
      //Logger.log('paid venmo is true');
    }else if((cash1 == true) && (cashorVenmo == 'CASH')){ 
      didtheyCash = true; 
      //Logger.log('paid cash is true');
    }else if((!(venmo1 && venmo2)) && cashorVenmo == 'VENMO'){
      didtheypayVenmo = false;         
      //Logger.log('paid venmo false');
    }else if(!(cash1 == false) && (cashorVenmo == 'CASH')){
      didtheyCash = false; ///////////////////////////////////////////////////////////////////////////////////////////////////////
      //Logger.log('paid cash is false');
    }
  

    if(didtheypayVenmo == false){ ///////////////////////////////////// change didtheycash back to venmo
      //Logger.log(cashorVenmo);
      //Logger.log(emailAddress)

  

      var subject = name + " - NOTICE OF NONPAYMENT - ASU GALA 2022";
      var message = 'Hello '+ name +',\n\n\n' // the actual message


    
        + 'According to our records as of this moment, you have ordered ' +tixNum+ ' ticket(s) and have chosen the option of paying for your Gala ticket via Venmo.\n\n'  

        + 'You are receiving this email since we have not received a payment of $'+amountOwed+ ' under your name to the ASU VENMO (@ASU-Minnesota).\n\n' 

        + 'If we do not receive this payment we will not be able to grant you access into the event. If this is a mistake please respond \n\n' 

        + 'to this email with with your venmo username, or please strive to have this done at the latest of this THURSDAY MIDNIGHT (2-10-22).\n\n'

        + 'We will not send you your ticket before receving your payment. We would appreciate it whenever possible! \n\n\n'


        + 'Regards, \n\n'

        + 'XUEFENG YANG, \n'

        + 'Asian American Student Union at the University of Minnesota \n'

        + 'Treasurer \n'

        + '300 Washington Ave SE, Minneapolis, MN 55455, Suite 226 \n'

        + 'https://www.facebook.com/xuefeng.yang.3.14/ \n'

        + '(651) 235-4264 \n\n\n'

        + 'this is an automated email. \n\n' // or else     

        GmailApp.sendEmail(emailAddress, subject, message);
        
      Logger.log(emailAddress);
      Logger.log(message);
      //break; ////////////////////////////////////////////////////////////////////////////// comment out if emailing single person
      ++i;

    }
    
   

    //var subject = name + " - DO NOT REPLY AUTOMATED TEST";
    //var message = 'Hello '+ name +',\n\n' // the actual message
    //  + 'this is an automated email. i am currently testing automated mass emailing. please do not respond. \n\n' // or else     
    //  + 'xuefeng \n\n'  
    //Logger.log(message);

    //GmailApp.sendEmail(emailAddress, subject, message);
  }
}