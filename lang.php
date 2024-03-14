<?php
// Directory containing translation files
$translationsDirectory = 'translations/';

// Default language if none is provided
$defaultLanguage = 'en';

// Check if a language code is provided, otherwise use the default one
$language = isset($_GET['lang']) ? $_GET['lang'] : $defaultLanguage;

// Path to the translation file
$translationFile = $translationsDirectory . $language . '.json';

// Check if the translation file exists, otherwise return nothing
if (file_exists($translationFile)) {
    // Read and output the translation file
    echo file_get_contents($translationFile);
}
