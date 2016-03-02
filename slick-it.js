(function() {
  'use strict';

  function pad(num) {
    return ('0' + num).slice(-2);
  }

  // Lifecycle callbacks
  // You can use the following lifecycle callbacks with custom elements:
  //
  // createdCallback - The behavior you define occurs when the element is registered.
  // attachedCallback - The behavior occurs when the element is inserted into the DOM.
  // detachedCallback - The behavior occurs when the element is removed from the DOM.
  // attributeChangedCallback - The behavior occurs when an attribute of the element is added, changed, or removed

  var ExtendedDivPrototype;
  if ('HTMLDivElement' in window) {
    ExtendedDivPrototype = Object.create(window.HTMLDivElement.prototype);
  } else {
    throw Error('Browser obsoleto. Troque seu Browser pro dia nascer feliz.');
  }

  function SlickIt(type) {
    this.type = type;
    this.date = new Date(2015, 12, 23);
  }

  SlickIt.prototype.toString = function() {
    return 'SlickIt Object [type = ' + pad(this.type) + ' ]';
  };

  SlickIt.prototype.timeElapsed = function() {
    var ms = (new Date()).getTime() - this.date.getTime();
  };

  SlickIt.prototype.timeAgo = function() {
    var ms = (new Date()).getTime() - this.date.getTime();
  };

  var o = Object.create(ExtendedDivPrototype, {
    // foo is a regular 'value property'
    foo: { writable: true, configurable: true, value: 'hello' },
    // bar is a getter-and-setter (accessor) property
    bar: {
      configurable: false,
      // get: function() { return 10; },
      // set: function(value) { console.log('Setting `o.bar` to', value); }
      // with ES5 Accessors our code can look like this
      get function() { return 10; },
      set function(value) { console.log('setting `o.bar` to', value); }
    }
  });

  var SlickItPrototype = Object.create(ExtendedDivPrototype);

  ExtendedDivPrototype.createdCallback = function() {
    var value = this.getAttribute('datetime');
    if (value) {
      this.attributeChangedCallback('datetime', null, value);
    }
  };

  ExtendedDivPrototype.getFormattedDate = function() {
    if (this._date) {
      return new SlickIt(this._date).toString();
    }
  };

  ExtendedDivPrototype.attachedCallback = function() {
    nowElements.push(this);

    if (!updateNowElementsId) {
      updateNowElements();
      updateNowElementsId = setInterval(updateNowElements, 60 * 1000);
    }
  };

  ExtendedDivPrototype.detachedCallback = function() {
    var ix = nowElements.indexOf(this);
    if (ix !== -1) {
      nowElements.splice(ix, 1);
    }

    if (!nowElements.length) {
      if (updateNowElementsId) {
        clearInterval(updateNowElementsId);
        updateNowElementsId = null;
      }
    }
  };

  // Public: SlickItElement constructor.
  //
  //   var div = new SlickItElement()
  //   # => <div is='slick-it'></div>
  //
  window.SlickItElement = document.registerElement('slick-it', {
    prototype: SlickItPrototype,
    'extends': 'div'
  });

})();
