class Exercise {
  constructor (questions, instructions)
  {
    this.model = new Model();
    this.questions = questions;     //array
    this.instructions = instructions;
  }

  getQuestions()
  {
    return this.questions;
  }

  //querytype is string
  getQuestions(queryType)
  {
    return this.questions[queryType];
  }
}
