$(function () {
  // https://medium.com/geekculture/link-your-html-form-to-a-spreadsheet-via-google-forms-9024f0611d82
  //  https://formsubmit.co/
  // Get the form.
  var type = "mail";
  // Get the messages div.
  var formMessages = $(".form-messege");

  // Set up an event listener for the contact form.
  $("#contact-form").submit(function (e) {
    // Stop the browser from submitting the form.
    e.preventDefault();
    if (type.includes("mail")) {
      $.ajax({
        url: "https://formsubmit.co/ajax/info@efcofood.com",
        method: "POST",
        data: {
          name: $("Name").val(),
          email: $("#Email").val(),
          phone: $("#Phone").val(),
          city: $("#City").val(),
          country: $("#Country").val(),
          zip: $("#Zip").val(),
          product: $("#Product").val(),
          quantityType: $("#QuantityType").val(),
          quantity: $("#Quantity").val(),
          frequency: $("#Frequency").val(),
          message: $("#Message").val(),
          _subject:"Web Contact Form!",
          _autoresponse:"We have recieved your query, our team will get back to you shortly.",
          _template:"table",
          _cc: "efcofood@gmail.com"
        },
        dataType: "json",
        success: function (response) {
          // Make sure that the formMessages div has the 'success' class.
          $(formMessages).removeClass("error");
          $(formMessages).addClass("success");
          $("#contact-form button").prop("disabled", true);

          // Set the message text.
          $(formMessages).text(
            "Your details have been communicated successfuly, please wait we will get back to you !"
          );

          // Clear the form.
          $("#contact-form input,#contact-form textarea").val("");
        },
        error: function (xhr, ajaxOptions, thrownError) {
          if (xhr.status === 0) {
            $(formMessages).removeClass("error");
            $(formMessages).addClass("success");
            $("#contact-form button").prop("disabled", true);

            // Set the message text.
            $(formMessages).text(
              "Your details have been communicated successfuly, please wait we will get back to you !"
            );

            // Clear the form.
            $("#contact-form input,#contact-form textarea").val("");
          } else {
            // Make sure that the formMessages div has the 'error' class.
            $(formMessages).removeClass("success");
            $(formMessages).addClass("error");

            // Set the message text.
            $(formMessages).text(`${xhr.status} : ${thrownError}`);
          }
        },
      });
    } else if (type.includes("form")) {
      $.ajax({
        url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdRKzphnjc3wIqDAKWr03dtDaJYSh2vWq12FZERVLusUvI9bQ/formResponse",

        //add your google form generated numbers below which are also the 'names' of your inputs
        data: {
          "entry.182946552": $("Name").val(),
          "entry.1764087748": $("#Email").val(),
          "entry.445480480": $("#Phone").val(),
          "entry.175159603": $("#City").val(),
          "entry.491358080": $("#Country").val(),
          "entry.1326331600": $("#Zip").val(),
          "entry.340929605": $("#Message").val(),
        },
        type: "POST",
        dataType: "json",
        success: function (response) {
          // Make sure that the formMessages div has the 'success' class.
          $(formMessages).removeClass("error");
          $(formMessages).addClass("success");
          $("#contact-form button").prop("disabled", true);

          // Set the message text.
          $(formMessages).text(
            "Your details have been communicated successfuly, please wait we will get back to you !"
          );

          // Clear the form.
          $("#contact-form input,#contact-form textarea").val("");
        },
        error: function (xhr, ajaxOptions, thrownError) {
          if (xhr.status === 0) {
            $(formMessages).removeClass("error");
            $(formMessages).addClass("success");
            $("#contact-form button").prop("disabled", true);

            // Set the message text.
            $(formMessages).text(
              "Your details have been communicated successfuly, please wait we will get back to you !"
            );

            // Clear the form.
            $("#contact-form input,#contact-form textarea").val("");
          } else {
            // Make sure that the formMessages div has the 'error' class.
            $(formMessages).removeClass("success");
            $(formMessages).addClass("error");

            // Set the message text.
            $(formMessages).text(`${xhr.status} : ${thrownError}`);
          }
        },
      });
    }
  });

  // Set up an event listener for the contact form.
  $("#distributor-form").submit(function (e) {
    // Stop the browser from submitting the form.
    e.preventDefault();
    if (type.includes("mail")) {
      $.ajax({
        url: "https://formsubmit.co/ajax/info@efcofood.com",
        method: "POST",
        data: {
          name: $("Name").val(),
          email: $("#Email").val(),
          phone: $("#Phone").val(),
          companyName: $("#CompanyName").val(),
          companyLocation: $("#CompanyLocation").val(),
          message: $("#Message").val(),
          _subject:"Web Contact Form!",
          _autoresponse:"We have recieved your request, our team will get back to you shortly.",
          _template:"table",
          _cc: "efcofood@gmail.com"
        },
        dataType: "json",
        success: function (response) {
          // Make sure that the formMessages div has the 'success' class.
          $(formMessages).removeClass("error");
          $(formMessages).addClass("success");
          $("#contact-form button").prop("disabled", true);

          // Set the message text.
          $(formMessages).text(
            "Your details have been communicated successfuly, please wait we will get back to you !"
          );

          // Clear the form.
          $("#contact-form input,#contact-form textarea").val("");
        },
        error: function (xhr, ajaxOptions, thrownError) {
          if (xhr.status === 0) {
            $(formMessages).removeClass("error");
            $(formMessages).addClass("success");
            $("#contact-form button").prop("disabled", true);

            // Set the message text.
            $(formMessages).text(
              "Your details have been communicated successfuly, please wait we will get back to you !"
            );

            // Clear the form.
            $("#contact-form input,#contact-form textarea").val("");
          } else {
            // Make sure that the formMessages div has the 'error' class.
            $(formMessages).removeClass("success");
            $(formMessages).addClass("error");

            // Set the message text.
            $(formMessages).text(`${xhr.status} : ${thrownError}`);
          }
        },
      });
    } else if (type.includes("form")) {
      $.ajax({
        url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdRKzphnjc3wIqDAKWr03dtDaJYSh2vWq12FZERVLusUvI9bQ/formResponse",

        //add your google form generated numbers below which are also the 'names' of your inputs
        data: {
          "entry.182946552": $("Name").val(),
          "entry.1764087748": $("#Email").val(),
          "entry.445480480": $("#Phone").val(),
          "entry.175159603": $("#City").val(),
          "entry.491358080": $("#Country").val(),
          "entry.1326331600": $("#Zip").val(),
          "entry.340929605": $("#Message").val(),
        },
        type: "POST",
        dataType: "json",
        success: function (response) {
          // Make sure that the formMessages div has the 'success' class.
          $(formMessages).removeClass("error");
          $(formMessages).addClass("success");
          $("#contact-form button").prop("disabled", true);

          // Set the message text.
          $(formMessages).text(
            "Your details have been communicated successfuly, please wait we will get back to you !"
          );

          // Clear the form.
          $("#contact-form input,#contact-form textarea").val("");
        },
        error: function (xhr, ajaxOptions, thrownError) {
          if (xhr.status === 0) {
            $(formMessages).removeClass("error");
            $(formMessages).addClass("success");
            $("#contact-form button").prop("disabled", true);

            // Set the message text.
            $(formMessages).text(
              "Your details have been communicated successfuly, please wait we will get back to you !"
            );

            // Clear the form.
            $("#contact-form input,#contact-form textarea").val("");
          } else {
            // Make sure that the formMessages div has the 'error' class.
            $(formMessages).removeClass("success");
            $(formMessages).addClass("error");

            // Set the message text.
            $(formMessages).text(`${xhr.status} : ${thrownError}`);
          }
        },
      });
    }
  });
});
