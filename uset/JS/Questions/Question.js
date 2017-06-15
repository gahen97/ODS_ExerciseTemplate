/*jshint esversion: 6 */ 'use strict';

class Question {

  constructor(questionData)
  {
    this.answer = questionData.answer || undefined;
    this.parameters = questionData.parameters || { };
    this.instructions = questionData.instruction ? new Instructions(questionData.instruction) : null;
    this.id = questionData.id || Question.nextId++;
  }

  getAnswer()
  {
    return this.answer;
  }

  setAnswer(answer)
  {
    var temp = this.answer;
    this.answer = answer;
    return temp;
  }

  getInstructions()
  {
    return this.instructions;
  }

  getParameters()
  {
    return this.parameters;
  }

  setParameters(param)
  {
    var temp = this.parameters;
    this.parameters = param;
    return temp;
  }

  getId()
  {
    return this.id;
  }

  static getNextId()
  {
    return Question.nextId;
  }

  static setNextId(i)
  {
    var temp = Question.nextId;
    Question.nextId = i;
    return temp;
  }

  setId(i)
  {
    var temp = this.id;
    this.id = i;
    return temp;
  }

  //check
}

Question.nextId = 0;
