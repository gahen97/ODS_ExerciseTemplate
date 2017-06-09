class EventHandler {
  constructor()
  {
    this.events = { };
  }

  bind(event, handler)
  {
    if (!this.events[event])      //if this,events doesn't contain event
    {
      this.events[event] = []
    }
    this.events[event].push(handler);
  }

  unbind(event)
  {
    this.events[event] = [ ];
  }

  trigger(event)
  {
    var doThis = this.events[event]
    if (doThis)
    {
      for (var i = 0; i < doThis.length; i++) {
        doThis[i]();
      }
    }
  }
}
