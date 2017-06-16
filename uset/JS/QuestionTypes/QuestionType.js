/*jshint esversion: 6 */ 'use strict';

class QuestionType {
  constructor(questionData, numQuestionsArr)
  {
    this.questions = [ ];
    this.model = new __MODULENAME__();
    this.setup(questionData, numQuestionsArr);
  }

  getQuestions()
  {
    return this.questions;
  }

  setNumQuestionRequired(n)
  {
    var temp = this.numQuestionsRequired;
    this.numQuestionsRequired = n;
    return temp;
  }

  setup(questionData, numQuestionsArr)
  {
    if (!questionData) {      //param checking
      if (DEBUG) { console.error("From inside QuestionType.setup(), falsy param."); }
      return;
    }

    var thisQuestion = null;
    for (var index in questionData)
    {
        for (var i = 0; i < numQuestionsArr[index]; i++)
        {
          thisQuestion = questionData[index];
          this.questions.push(new thisQuestion.class(thisQuestion));
        }
    }
  }

  //randomizeOrder = null

  scrambleQuestionOrder() {
    var array = this.question;
    for (var i = array.length - 1; i > 0; i--) {
        var j = ODSRandom.getRandomIntInclusive(0, i);
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}


  //draw = null;

}
