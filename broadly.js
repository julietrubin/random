// Author: Juliet Rubin

var request = require('request');

var roomNumberToCount = {};
var numberOfClasses;
var currentNumberOfClassesProcessed = 0;

function findStudentAverage(error, response, body) {
  if (!error && response.statusCode == 200) {
    request(JSON.parse(body).url, findStudentAverageFromUrl);
  }
}

function findStudentAverageFromUrl(error, response, body) {
  if (!error && response.statusCode == 200) {
    var classes = JSON.parse(body).classes; 
    numberOfClasses = classes.length;
    classes.forEach(function(url){request.get(url, processPageData)});
  }
}

function getClassCount(c){
  var count = 0;  
  c.students.forEach(function(student){
    if (student.age >= 25){
      count++;
    }               
  })
  return count;
}

function processPageData(error, response, body){
  if (error || !response.statusCode == 200) {
    console.log("Error processing page data");
    return;
  }
  var data = JSON.parse(body);
  var count = getClassCount(data);
  roomNumberToCount[data.room] = roomNumberToCount.hasOwnProperty(data.room) ? 
    count + roomNumberToCount[data.room] : count;
  if (data.hasOwnProperty('next')){
    request(data.next, processPageData);
  }  
  else {
    currentNumberOfClassesProcessed++; 
    if (currentNumberOfClassesProcessed === numberOfClasses){
      // we finished processing the data and now can caculate the average
      var total = Object.values(roomNumberToCount).reduce((a, b) => a + b);
      console.log("The averge number of students age >= 25 " +
                  "in a class is: " + total/numberOfClasses);
    }
  }
}

request("http://challenge.broadly.com/", findStudentAverage);