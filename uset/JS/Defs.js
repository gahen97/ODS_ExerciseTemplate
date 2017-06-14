/*jshint esversion: 6 */

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

  var questionData = [                [{class : Add, instructionsText : "Illustrate the evolution of the collection given the following add method." , parameters : {randomNumber : ODSRandom.getRandomIntInclusive(1,7)}}] ,
                                      [{class : Remove, instructionsText : "Illustrate the evolution of the collection given the following remove method." , parameters : {randomNumber : ODSRandom.getRandomIntInclusive(1,7)}}] ,
                                      [{class : Find, instructionsText : "Illustrate the evolution of the collection given the following find method." , parameters : {randomNumber : ODSRandom.getRandomIntInclusive(1,13)}}] ];
  //modeladd
  var __MODULENAME__ = Uset;

var numberOfQuestionsRequired = [10,10,4];


/*load order:
MUST BE LOADED AFTER QUESTIONS AND QUESTIONTYPES AND RANDOM
AND BEFORE EXERCISE
*/
