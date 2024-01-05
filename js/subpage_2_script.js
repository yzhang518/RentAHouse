 var planInfo = [
     {"BED/BATH": "3/3",
      "SQ.FT.": 2250,
      "RENT": 3000,
      "DEPOSIT": 1000,
      "AVAILABILITY": 10
     },
     
     {"BED/BATH": "4/3.5",
      "SQ.FT.": 3548,
      "RENT": 3998,
      "DEPOSIT": 1500,
      "AVAILABILITY": 5 
     },
     
     {"BED/BATH": "4/4",
      "SQ.FT.": 3258,
      "RENT": 3500,
      "DEPOSIT": 1500,
      "AVAILABILITY": 11
     },
     
     {"BED/BATH": "4/3.5",
      "SQ.FT.": 3258,
      "RENT": 3500,
      "DEPOSIT": 1500,
      "AVAILABILITY": 11
     }, 
     
     {"BED/BATH": "3/3",
      "SQ.FT.": 2238,
      "RENT": 3000,
      "DEPOSIT": 1500,
      "AVAILABILITY": 8
     }
 ];

var headers = ["LAYOUT", "BED/BATH", "SQ.FT.", "RENT", "DEPOSIT", "AVAILABILITY" ]

var row_size = planInfo.length;
var col_size = headers.length;


function buildTable() {
    var myTable, headerRow, newRow, dataNode, cell, content, key, image, inPut;
    
    myTable = document.createElement("table");
    // add the header row
    headerRow = document.createElement("tr");
    for (var i = 0; i < col_size; i++) {
        dataNode = document.createTextNode(headers[i]);
        cell = document.createElement("th");
        cell.appendChild(dataNode);
        headerRow.appendChild(cell);
    }
    myTable.appendChild(headerRow);
    
    // add non header rows
    for (var i = 0; i < row_size; i++) {
        newRow = document.createElement("tr");
        for (var j = 0; j < col_size; j++) {
            if (j===0) {
                cell = document.createElement("td");
                newRow.appendChild(cell);
            } else {
                key = headers[j];
                content = planInfo[i][key];
                dataNode = document.createTextNode(content);
                cell = document.createElement("td");
                cell.appendChild(dataNode);
                newRow.appendChild(cell);
            }
            
        }
        myTable.appendChild(newRow);
    }
    
    // add the floor plan image to 1st column
    for (var i = 1; i <= row_size; i++) {
        cell = myTable.rows[i].cells[0];
        /*
        image = document.createElement("img");
        image.src = "yzhang518.github.io/img/plan_" + String(i) + ".jpg";
        image.id = "floorPlan" + String(i);
        
        image.style.width = "200px";
        image.style.height = "200px";
        
        cell.append(image);
        */
   var myDiv = document.createElement("div");
   myDiv.setAttribute("class", "container");

   var input = document.createElement("input");
   input.id = "zoomCheck_" + i;
   input.type = "checkbox";

   var label = document.createElement("label");
   label.setAttribute("for", "zoomCheck_" + i);
   var image = document.createElement("img");
   //image.src = "yzhang518.github.io/img/plan_" + String(i) + ".jpg";
   label.innerHTML = '<img src="yzhang518.github.io/img/plan_' + String(i) + '.jpg">';

   myDiv.appendChild(input);
   myDiv.appendChild(label);
   cell.appendChild(myDiv);
    }

    return myTable;
}


document.body.appendChild(buildTable());
