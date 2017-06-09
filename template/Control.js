class Control {
  constructor()
  {
    this.eventHandler = new EventHandler();
    this.view = new View(this.eventHandler);
    this.exercise = new Exercise();
  }

  run()
  {
    //generates questions
    this.exercise.getQuestions();

    //display instructions
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
