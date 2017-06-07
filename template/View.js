class View {
  constructor()
  {
    this.events = new Object{};
  }

  bindEvent(event, handler)
  {
    $element.onEvent()
    this.events[event] = handler;
  }

}
