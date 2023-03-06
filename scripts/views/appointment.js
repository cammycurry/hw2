((app) => {
  let selected;

  // Add the following methods to app.appointmentView....
  // ** load(tutorId, day)
  //      - store tutorId and day on selected variable above
  //      - load appointmentView using app._changeView
  // ** save()
  //      - select DOM elements for name (input) and notes (textarea)
  //      - create new Appointment using values on selected variables and the form values submitted
  //      - pass appointment to app.scheduler.saveAppointment
  //      - clear the two form element values
  //      - navigate back to calendar using app.calendarView.load with the selected tutorId
  app.appointmentView = {
    load: function (tutorId, day) {
      selected = {
        tutorId: tutorId,
        day: day,
      };

      document.getElementById("cancel").addEventListener("click", function () {
        app.homeView.load();
      });

      document.getElementById("book").addEventListener("click", function () {
        app.appointmentView.save();
      });

      app._changeView("appointmentView");
    },
    save: function () {
      const name = document.querySelector("input").value;
      const notes = document.querySelector("textarea").value;
      const appointment = new app.Appointment(
        selected.tutorId,
        selected.day,
        name,
        notes
      );
      app.scheduler.saveAppointment(appointment);
      document.querySelector("input").value = "";
      document.querySelector("textarea").value = "";
      app.calendarView.load(selected.tutorId);
    },
  };
})(app || (app = {}));
