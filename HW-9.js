var inquirer = require("inquirer");
var fs = require('fs');

// array of questions for user
const questions = 
[
    "Enter Project Title: ",
    "Enter Project Description: ",
    "Enter Installation instructions: ",
    "Enter Usage instructions: ",
    "Enter License information: ",
    "Enter information about Contributions: ",
    "Enter information about Tests: ",
    "Provide contact information how users can reach you for any Questions: "
];
const myTOC = 
[
    "* [Installation](#installation)",    
    "* [Usage](#usage)",    
    "* [Credits](#credits)",    
    "* [License](#license)"
];   
for(var ctr=0;ctr<myTOC.length;ctr++)
{    
    fs.appendFile("README.md", myTOC[ctr]+'\n', function(error, data) 
    {
    if (error) 
    {
        return console.log("Oops...");
    }
    else
    {
        console.log("Success");
    }  
    });
}