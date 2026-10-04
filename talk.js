let selectedLanguage = null;

let selectedInterest = null;

const optionButtons = document.querySelectorAll(”.option-button”);

const findButton = document.querySelector(”#find-button”);

/* SELECT OPTIONS */

optionButtons.forEach(function(button) {

button.addEventListener("click", function() {

    const type = button.dataset.type;

    const value = button.dataset.value;



    /* LANGUAGE */

    if (type === "language") {

        selectedLanguage = value;


        document
            .querySelectorAll('[data-type="language"]')
            .forEach(function(languageButton) {

                languageButton.classList.remove("selected");

            });


        button.classList.add("selected");

    }



    /* INTEREST */

    if (type === "interest") {

        selectedInterest = value;


        document
            .querySelectorAll('[data-type="interest"]')
            .forEach(function(interestButton) {

                interestButton.classList.remove("selected");

            });


        button.classList.add("selected");

    }

});
});

/* FIND SOMEONE */

findButton.addEventListener(“click”, function() {

if (!selectedLanguage) {

    alert("Please choose a language first.");

    return;

}


if (!selectedInterest) {

    alert("Please choose an interest first.");

    return;

}


alert(
    "Searching for someone...\n\n" +
    "Language: " + selectedLanguage +
    "\nInterest: " + selectedInterest
);
});

