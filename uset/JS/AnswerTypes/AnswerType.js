/*jshint esversion: 6 */ 'use strict';

class AnswerType {
  constructor()
  {
    this.data = null;
  }

  setData(data)
  {
    var temp = this.data;
    this.data = data;
    return temp;
  }

  getData() { return this.data; }

  //display answer?

  check(data)
  {
    if (this.data.equals)   //if equals exists
    {
      return this.data.equals(data);
    }

    else {
      return this.data === data;
    }
  }
}
