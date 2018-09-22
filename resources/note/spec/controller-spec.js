function ControllerTests() {
  
  let mockList = {
    allNotes: function() { return ['mock note text', 'another mock notes text'] }
  };

  let mockListView = {
    html: function() { return '<ul><li>first note</li><li>secondNote</li></ul>' }
  };

  let mockDocumentElement = {
    innerHTML: ''
  };

  let controller = new NoteController(mockList, mockListView);
  
  (function() {
  test.isEqual(controller.constructor.name, "NoteController")
  })();

  controller.updateView(mockDocumentElement);
  
  (function() {
    test.isEqual(mockDocumentElement.innerHTML, '<ul><li>first note</li><li>secondNote</li></ul>')
  })();

};

ControllerTests();
