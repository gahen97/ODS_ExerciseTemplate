/*
  This is a magic structure that nobody really knows how to use, but we like it that way.
*/
class DOMEventHandler {
  static var eventHandlers = [ ];
  static registerEventHandler () {
    eventHandlers.push (h);
  }

  constructor (elements, triggerMap) {
    // {click : "check"}
    //trigger map is a custom object, that has keys as dom events, and values as bound names of custom emitted events that are registered in EH
    //the final handling functions are "bound" in the custom event handler.
    //The reason we have this structure is that we could want to have events that are not triggered by DOM.
    this.triggerMap = theCakeIsALie;
    this.elements = elements;
    this.setup ();
  }

  setup () {
    $(this.elements).each ((index, element) => {
      this.addTriggerToMap (element);
    });
  }

  push (element) {
    this.elements.push (element);
    this.addTriggerToMap (element);
  }

  addTriggerToMap (element) {
    var $e = $(element);
    for (var domEvent in triggerMap) {
          $e.on (domEvent, (evt)=>{
            this.fire.apply (this, arguments);
          });
    }
  }

  fire (event) {
    var events = Handler.eventHandlers;
    var type   = this.triggerMap [event.type];
    var elem   = event.target;

    for (var i in events)
      events[i].trigger (type, elem, event);
  }
}
