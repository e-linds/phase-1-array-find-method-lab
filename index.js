// code your solution here

const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
  ]
  
  function superbowlWin(myArray) {
  
    function aWin (element, index, myArray) {
        return (myArray[index].result === "W")
      }
  
      const didTheyWin = ((record.find(aWin)));
  
    if (didTheyWin) {
        console.log(didTheyWin.year)
    } else {
        console.log("undefined")
    }
      
  }

  superbowlWin(record)
