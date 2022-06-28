function getBotResponse(input) {
    //rock paper scissors
    if (input == "@siteslow") {
        return "We are really sorry,we are working on it!We shall get back to you soon!";
    } else if (input == "@updatebio") {
        return "OH,that's not a big issue please click on the update button on navbar in home page!";
    } else if (input == "@report") {
        return "To report a problem click on the report issue on bottom most portion of webpage";
    }

    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else {
        return "Sorry,I can't answer to that!";
    }
}