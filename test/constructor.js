module('constructor');

test('create slick-it from document.createElement', function() {
  var div = document.createElement('div', 'slick-it');
  equal('DIV', div.nodeName);
  equal('slick-it', div.getAttribute('is'));
});

test('create slick-it from constructor', function() {
  var div = new window.SlickItElement();
  equal('DIV', div.nodeName);
  equal('slick-it', div.getAttribute('is'));
});

test('ignores elements without a path attr', function() {
  var div = document.createElement('div', 'slick-it');
  equal(div.textContent, '');
});
