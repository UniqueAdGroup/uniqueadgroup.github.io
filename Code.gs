function doPost(e) {

  const data = JSON.parse(e.postData.contents);

  MailApp.sendEmail({
    to: "ujjwalanurag@uniqueadgroup.com", // Change to your email
    replyTo: data.email,
    subject: "New Contact Form Submission",
    htmlBody:
      "<h2>New Contact Form</h2>" +
      "<p><b>Name:</b> " + data.name + "</p>" +
      "<p><b>Email:</b> " + data.email + "</p>" +
      "<p><b>Message:</b><br>" + data.message + "</p>"
  });

  return ContentService
    .createTextOutput("✅ Thank you! Your message has been sent.")
    .setMimeType(ContentService.MimeType.TEXT);
}
