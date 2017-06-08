class CustomEventHandler {
  constructor()
  {
    this.odsEvents = { };
  }

  bind(odsEvent, handlingFunction)
  {
    if (!this.odsEvents[odsEvent])      //if this,events doesn't contain event
    {
      this.odsEvents[odsEvent] = []
    }
    this.odsEvents[odsEvent].push(handlingFunction);
  }

  unbind(event)
  {
    this.odsEvents[event] = [ ];
  }

  trigger(event)
  {
    var doThis = this.odsEvents[event]
    if (doThis)
    {
      for (var i = 0; i < doThis.length; i++) {
        doThis[i]();
      }
    }
  }
}
