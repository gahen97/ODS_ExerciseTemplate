class View {
  constructor(eventHandler)
  {
    this.events = new Object{ };
    this.eventHandler = eventHandler;
  }

  bindEvent(event, handler)
  {
    $element.onEvent()
    this.events[event] = handler;
  }
}
