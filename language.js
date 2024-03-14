let defaultLanguage = 'en'
function fetchLanguageData(callback) {
    // Set default language
    let lang = defaultLanguage

    // Query for language
    const htmlTag = document.querySelector('html')
    if (htmlTag){
        const htmlTagLang = htmlTag.getAttribute('lang')
        if (htmlTagLang) lang = htmlTagLang
    }

    fetch('lang.php?lang=' + lang, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
    })
        .then(response => response.json())
        .then(data => {
            if (data.toString().length > 0) {
                callback(data)
            }
        })
        .catch(error => console.log(error))
}

// Function to replace content with language data
function replaceContent(languageData) {
    // Get all elements with lang attribute
    let elements = document.querySelectorAll('[lang]');
    elements.forEach(function(element) {
        if (element.tagName !== "HTML") {
            let key = element.innerHTML.toLowerCase();
            // Replace content with language data
            if (languageData.hasOwnProperty(key)) {
                element.textContent = languageData[key];
            }
        }
    });
}
