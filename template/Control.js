class Control {
  constructor()
  {
    this.view = new View();
    this.exercise = new Exercise();
  }

  run()
  {
    //generates questions
    this.exercise.getQuestions();

    //generates some answers (gotta make some decides TODO)

    //draw maybe?
    this.view.draw()
    //listens for user input
  }

  bindEvent(event, handler)
  {
    this.view.bindEvent(event, handler);
  }

  onLMBDOWN(domElement){  }
  onLMBUP(domElement){  }
  onMouseOverON(domElement){  }
  onMouseOverOFF(domElement){  }
}
