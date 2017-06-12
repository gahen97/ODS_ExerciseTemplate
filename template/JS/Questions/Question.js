class Question {

  constructor(instruction)
  {
    //this.question = question  //TODO rename attribute?
    this.answer = answer;
    this.instructions = new Instruction(instruction);
    this.parameters = { };
  }

  getQuestion()
  {
    return this.question;
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

  displayInstructions()
  {
    this.getInstructions().display();
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

  setup = null;
}
