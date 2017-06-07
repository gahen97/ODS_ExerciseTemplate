class Question {

  constructor(category, question)
  {
    this.category = category;
    this.question = question  //TODO rename attribute?
    this.answer = answer;     //TODO maybe not gonna use we'll see
  }

  getCategory()
  {
    return this.category;
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
}
