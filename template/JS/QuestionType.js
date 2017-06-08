class QuestionType {
  constructor()
  {
    this.model = null;
    this.questions = questions;
    this.numQuestionsRequired = numQuestionsRequired;
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

  getModel()
  {
    return this.model;
  }

  draw = null;

  check = null;

  setup()
  {
    this.questions = new Array("add", "Illustrate the evolution of the data structure")
  }
}
