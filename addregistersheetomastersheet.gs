function addRegistoMaster() {
  var sheetSrc = SpreadsheetApp.openById("1R5tc-DJvr54p78EKw1BDTXF8yReOcnZI8ERQ6GY_0pM").getActiveSheet(); // sheet that we're taking information from. all variables are dependent on that sheet. 
  var sheetDest = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("DAY BEFORE PREREG $15/$25 (201 - 882)");//////////////////////////////////////////////////////////////////////////////
  var data = sheetSrc.getDataRange().getValues();
  var ticketnum = 1;

  for (var client=1; client < 684; client++) { // client is individual ticket seller. clients can have 
    //var cell = sheetDest.getRange(i+1,5);
    //cell.setValue(data[i][2]);

    
    // if client has bought 1 ticket #####################################################################
    if(data[client][5] == 1){  // cols a = 0. basically if srcSheet cols 5 is equal to 1, then statement is true. 
      ticketnum++; 
      // cell00 is sheetDest. ticketnum is row in sheetDest that we want to put info from data into. second # in getrange(var1, var2) is 
      var cell00 = sheetDest.getRange(ticketnum,16); // cols we want to put data in. var2 is 16
      cell00.setValue(data[client][1])

      if(data[client][6] == "Venmo"){
        var cell0 = sheetDest.getRange(ticketnum,12);
        cell0.setValue("VENMO");
      }else if(data[client][6] == "Unpaid (Cash)"){
        var cell0 = sheetDest.getRange(ticketnum,12);
        cell0.setValue("CASH");
      }

      if(data[client][9] == "Digital Ticket - Ticket(s) will be sent to the email/x500 used to register in this Google Form."){
        var cell0 = sheetDest.getRange(ticketnum,9);
        cell0.setValue("ONLINE")
      }else if(data[client][9] == "Physical Ticket - Ticket(s) will have to be picked up in Memorial Union - Room 226, from the time of 9AM-5PM on February 7 - 10, 2022"){
   
        var cell0 = sheetDest.getRange(ticketnum,9);
        cell0.setValue("PHYS")
      }
      
      //Logger.log(data[client][9]);
      var cell0 = sheetDest.getRange(ticketnum,5);
      cell0.setValue(data[client][2]);
    }
    // if client has bought 2 tickets #####################################################################
    if(data[client][5] == 2){ 
      
      if(data[client][9] == "Digital Ticket - Ticket(s) will be sent to the email/x500 used to register in this Google Form."){
        var cell0 = sheetDest.getRange(ticketnum+1,9);
        cell0.setValue("ONLINE")
      }else if(data[client][9] == "Physical Ticket - Ticket(s) will have to be picked up in Memorial Union - Room 226, from the time of 9AM-5PM on February 7 - 10, 2022"){
        var cell0 = sheetDest.getRange(ticketnum+1,9);
        cell0.setValue("PHYS")
      }
      
      var cell1 = sheetDest.getRange(ticketnum+1,5);
      cell1.setValue(data[client][2]);
      ticketnum++;
      if(data[client][6] == "Venmo"){
        var cell0 = sheetDest.getRange(ticketnum,12);
        cell0.setValue("VENMO");
      }else if(data[client][6] == "Unpaid (Cash)"){
        var cell0 = sheetDest.getRange(ticketnum,12);
        cell0.setValue("CASH");
      }

      var cell00 = sheetDest.getRange(ticketnum,16); // email
      cell00.setValue(data[client][1])

      if(data[client][9] == "Digital Ticket - Ticket(s) will be sent to the email/x500 used to register in this Google Form."){
        var cell0 = sheetDest.getRange(ticketnum+1,9);
        cell0.setValue("ONLINE")
      }else if(data[client][9] == "Physical Ticket - Ticket(s) will have to be picked up in Memorial Union - Room 226, from the time of 9AM-5PM on February 7 - 10, 2022"){
    
        var cell0 = sheetDest.getRange(ticketnum+1,9);
        cell0.setValue("PHYS")
      }
      var cell2 = sheetDest.getRange(ticketnum+1,5);
      cell2.setValue(data[client][2]);
      ticketnum++;
      if(data[client][6] == "Venmo"){
        var cell0 = sheetDest.getRange(ticketnum,12);
        cell0.setValue("VENMO");
      }else if(data[client][6] == "Unpaid (Cash)"){
        var cell0 = sheetDest.getRange(ticketnum,12);
        cell0.setValue("CASH");
      }

      var cell00 = sheetDest.getRange(ticketnum,16); // email
      cell00.setValue(data[client][1])

    }
    // if client has bought 4 tickets #####################################################################
    if(data[client][5] == 4){ 
      if(data[client][9] == "Digital Ticket - Ticket(s) will be sent to the email/x500 used to register in this Google Form."){
        var cell0 = sheetDest.getRange(ticketnum+1,9);
        cell0.setValue("ONLINE")
      }else if(data[client][9] == "Physical Ticket - Ticket(s) will have to be picked up in Memorial Union - Room 226, from the time of 9AM-5PM on February 7 - 10, 2022"){
      
        var cell0 = sheetDest.getRange(ticketnum+1,9);
        cell0.setValue("PHYS")
      }
      var cell3 = sheetDest.getRange(ticketnum+1,5);
      cell3.setValue(data[client][2]);
      ticketnum++;
      if(data[client][6] == "Venmo"){
        var cell0 = sheetDest.getRange(ticketnum,12);
        cell0.setValue("VENMO");
      }else if(data[client][6] == "Unpaid (Cash)"){
        var cell0 = sheetDest.getRange(ticketnum,12);
        cell0.setValue("CASH");
      }

      var cell00 = sheetDest.getRange(ticketnum,16); // email
      cell00.setValue(data[client][1])

      if(data[client][9] == "Digital Ticket - Ticket(s) will be sent to the email/x500 used to register in this Google Form."){
        var cell0 = sheetDest.getRange(ticketnum+1,9);
        cell0.setValue("ONLINE")
      }else if(data[client][9] == "Physical Ticket - Ticket(s) will have to be picked up in Memorial Union - Room 226, from the time of 9AM-5PM on February 7 - 10, 2022"){
      
        var cell0 = sheetDest.getRange(ticketnum+1,9);
        cell0.setValue("PHYS")
      }
      var cell4 = sheetDest.getRange(ticketnum+1,5);
      cell4.setValue(data[client][2]);
      ticketnum++;
      if(data[client][6] == "Venmo"){
        var cell0 = sheetDest.getRange(ticketnum,12);
        cell0.setValue("VENMO");
      }else if(data[client][6] == "Unpaid (Cash)"){
        var cell0 = sheetDest.getRange(ticketnum,12);
        cell0.setValue("CASH");
      }

      var cell00 = sheetDest.getRange(ticketnum,16); // email
      cell00.setValue(data[client][1])

      if(data[client][9] == "Digital Ticket - Ticket(s) will be sent to the email/x500 used to register in this Google Form."){
        var cell0 = sheetDest.getRange(ticketnum+1,9);
        cell0.setValue("ONLINE")
      }else if(data[client][9] == "Physical Ticket - Ticket(s) will have to be picked up in Memorial Union - Room 226, from the time of 9AM-5PM on February 7 - 10, 2022"){
       
        var cell0 = sheetDest.getRange(ticketnum+1,9);
        cell0.setValue("PHYS")
      }
      var cell5 = sheetDest.getRange(ticketnum+1,5);
      cell5.setValue(data[client][2]);
      ticketnum++;
      if(data[client][6] == "Venmo"){
        var cell0 = sheetDest.getRange(ticketnum,12);
        cell0.setValue("VENMO");
      }else if(data[client][6] == "Unpaid (Cash)"){
        var cell0 = sheetDest.getRange(ticketnum,12);
        cell0.setValue("CASH");
      }

      var cell00 = sheetDest.getRange(ticketnum,16); // email
      cell00.setValue(data[client][1])

      if(data[client][9] == "Digital Ticket - Ticket(s) will be sent to the email/x500 used to register in this Google Form."){
        var cell0 = sheetDest.getRange(ticketnum+1,9);
        cell0.setValue("ONLINE")
      }else if(data[client][9] == "Physical Ticket - Ticket(s) will have to be picked up in Memorial Union - Room 226, from the time of 9AM-5PM on February 7 - 10, 2022"){
        var cell0 = sheetDest.getRange(ticketnum+1,9);
        cell0.setValue("PHYS")
      }
      var cell6 = sheetDest.getRange(ticketnum+1,5);
      cell6.setValue(data[client][2]);
      ticketnum++;
      if(data[client][6] == "Venmo"){
        var cell0 = sheetDest.getRange(ticketnum,12);
        cell0.setValue("VENMO");
      }else if(data[client][6] == "Unpaid (Cash)"){
        var cell0 = sheetDest.getRange(ticketnum,12);
        cell0.setValue("CASH");
      }

      var cell00 = sheetDest.getRange(ticketnum,16); // email
      cell00.setValue(data[client][1])

    }
   

    //Logger.log('client after if statements is          ' + i);
    //Logger.log('name : ' + data[i][2]);
    //Logger.log('numtickets : ' + data[i][5]);
    //Logger.log('formofpayment : ' + data[i][6]);
    //Logger.log('physoronline : ' + data[i][9]);
  }


 //getrange(row, col)
 //var cell = sheetDest.getRange(5,1);
 //cell.setValue(2);
}
