class Exercise {
  constructor()
  {
    //array of question types
    this.questionTypes = [];
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

  clear()
  {
    this.questionTypes = [ ];
  }

  setup()
  {
    //need an array of qtypes for exercise
    //need an array of questions and a number of questions required for qtypes
    //questions need instructions, params, and maybe answer

    this.clear();

    //do this as many times as necessary
    //TODO
    this.questionTypes.push(new __REPLACE THIS WITH A VALID SUBCLASS OF QUESTION TYPE__(NUMBER OF QUESTION REQD)); //TODO
    //TODO

    this.questionTypes
    new __VALID SUBCLASS OF QUESTION__();

  }
}
