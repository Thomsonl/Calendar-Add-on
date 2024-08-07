function buildCreateEventsCard(e) {
    var buttonAction = CardService.newAction()
        .setFunctionName('onCreateEventsButtonClicked');
    var button = CardService.newTextButton()
        .setText('Create Events')
        .setOnClickAction(buttonAction);
    
    // Create the card section and add the button to it
    var section = CardService.newCardSection()
        .addWidget(button);
  
    // Create the card and add the section to it
    var card = CardService.newCardBuilder()
        .addSection(section)
        .build();
  
    return card;
  }