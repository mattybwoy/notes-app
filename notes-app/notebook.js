"use strict";

class NoteBook {
  constructor() {
    this._notes = [];
  }

  getText() {
    return this._text;
  }

  set(text) {
    text = document.getElementById("app");
    this._text = text;
  }

  textInput() {
    var userInput = document.getElementById('user_input').value;
    document.getElementById('myText').textContent = userInput;
  }

}