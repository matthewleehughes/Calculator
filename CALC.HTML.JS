<!DOCTYPE html>
<html>
    <head>
        TIP CALCULATOR
    </head>
    
    <body>
        <div>
            How much was the total bill? $<input id=totalBill type="number">
                                          
        </div>
        <div>
            What percentage would you like to tip?<input id=percentTip type="number">
        </div>
        <div>
           <h2>
               <button onclick="tipCalculation()">Calculate Tip</button>
           </h2>
        </div>
            <h3> Total Tip 
                
            </h3>
        <div id=totalTip>
            
        </div>

    <script>
      function tipCalculation () {
    var totalBill = document.getElementById("totalBill");
    var percentTip = document.getElementById("percentTip");
   
    var totalTip = (totalBill.valueAsNumber*percentTip.valueAsNumber);
    document.getElementById("totalTip").innerHTML = "$" + totalTip;
    
    };
    </script>
    </body>

</html>
