/*jshint esversion: 6 */ 'use strict';

var DEBUG = true;
var instructionsId = "instructions";

/*

var __MODULENAME__questionTypesClassNames = [];

  var __MODULENAME__questionData = [ {className : questionClassName, instructionsText : "do this" , parameters : {} } , ]
  //model
  var __MODULENAME__ = "";

var __MODULENAME__numberOfQuestionsRequired = [ ];
*/

var questionTypesClassNames = [Operations];

//if we need to randomly select things that are in the data structure for parameters to remove:
/*var RngArr = [ ];
for (var i = 0; i < VALUE; i++) {
  RngArr[i] = ODSRandom.getRandomIntInclusive(MIN, MAX);
}

then the param to remove is ODSRandom.getRandomFromArray(RngArr);
*/

  var questionData = [
    [{class : Add, instructionsText : "Illustrate the evolution of the collection given the following add method." , parameters : {randomNumber : ODSRandom.getRandomIntInclusive(1,8)}} ,
    {class : Find, instructionsText : "Illustrate the evolution of the collection given the following find method." , parameters : {randomNumber : ODSRandom.getRandomIntInclusive(1,15)}} ,
    {class : Remove, instructionsText : "Illustrate the evolution of the collection given the following remove method." , parameters : {randomNumber : ODSRandom.getRandomIntInclusive(1,8)}}] ];
  //modeladd
  var __MODULENAME__ = Uset;

var numberOfQuestionsRequired = [[10,4,10]];


/*load order:
MUST BE LOADED AFTER QUESTIONS AND QUESTIONTYPES AND RANDOM
AND BEFORE EXERCISE
*/
