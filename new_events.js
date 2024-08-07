function onCreateEventsButtonClicked(e) {
    var calendar = CalendarApp.getDefaultCalendar();
    
    // Specify the date for the events (replace with dynamic value as needed)
    var eventDate = new Date('2024-08-10');
    
    // Create an array of event times and details
    var eventsDetails = [
      {title: 'Event 1', startTime: new Date(eventDate.setHours(9, 0)), endTime: new Date(eventDate.setHours(10, 0))},
      {title: 'Event 2', startTime: new Date(eventDate.setHours(11, 0)), endTime: new Date(eventDate.setHours(12, 0))},
      {title: 'Event 3', startTime: new Date(eventDate.setHours(14, 0)), endTime: new Date(eventDate.setHours(15, 0))}
    ];
    
    // Loop through the array and create events
    for (var i = 0; i < eventsDetails.length; i++) {
      var eventDetail = eventsDetails[i];
      calendar.createEvent(eventDetail.title, eventDetail.startTime, eventDetail.endTime);
    }
    
    // Return a response to refresh the UI or give feedback to the user
    return CardService.newActionResponseBuilder()
        .setNotification(CardService.newNotification()
        .setText('Events Created Successfully'))
        .build();
  }
  