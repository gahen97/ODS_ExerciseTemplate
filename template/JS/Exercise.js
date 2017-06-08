class Exercise {
  constructor (questionType)
  {
    //array of question types
    this.questionTypes = questionTypes;
  }

  getQuestionTypes()
  {
    return this.questionTypes;
  }

  setQuestionTypes(toSet)
  {
    var temp = this.questionTypes;
    this.questionTypes = toSet;
    return temp;
  }

  setup()
  {
    this.questionTypes.setup();
  }
}
