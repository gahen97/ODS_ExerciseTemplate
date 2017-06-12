class QuestionType {
  constructor(numQuestionsRequired)
  {
    this.questions = [ ];
    this.numQuestionsRequired = numQuestionsRequired;
  }

  constructor()
  {
    this.questions = [ ];
    this.numQuestionsRequired = 0;
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

  setNumQuestionRequired(n)
  {
    var temp = this.numQuestionsRequired;
    this.numQuestionsRequired = n;
    return temp;
  }

  draw = null;

  check = null;



}
