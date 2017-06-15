/*jshint esversion: 6 */ 'use strict';

class Question {

  constructor(questionData)
  {
    this.parameters = questionData.parameters || { };
    this.instructions = questionData.instruction ? new Instructions(questionData.instruction) : null;
    this.id = questionData.id || Question.nextId++;
    this.div = null;
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

  getDiv() { return this.div; }

  setDiv(div)
  {
    var temp = this.div;
    this.div = div;
    return temp;
  }

  display(div)
  {
    this.setDiv(div);

    var questionText = this.constructor.name;

    questionText = questionText.charAt(0).toLowerCase() + questionText.substring(1);

    $(".questionSpan",div).text(questionText);

    this.instructions.display(div);
  }

  displayAnswer()
  {
    model.display(this.div);
  }

  //check
}

Question.nextId = 0;
