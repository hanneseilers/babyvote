# BabyVote

A simple and interactive web application for gender reveal voting. Friends and family can vote on whether they think the baby will be a boy or a girl, with results displayed in real-time through an animated barometer.

## Features

- **Simple Voting Interface**: Two-button interface for voting Boy or Girl
- **Vote Tracking**: Uses cookies to prevent duplicate voting (30-day validity)
- **Real-Time Results**: Visual barometer showing vote distribution
- **Multi-Language Support**: Built-in support for English and German
- **Responsive Design**: Bootstrap-based responsive layout
- **No Database Required**: Stores votes in a simple JSON file

## Requirements

- Web server with PHP support (PHP 5.6+)
- Modern web browser with JavaScript enabled

## Installation

1. Clone or download this repository to your web server
2. Ensure the web server has write permissions for the directory (to create `votes.txt`)
3. Access `index.html` through your web browser

## Usage

1. Open the application in a web browser
2. Click on either the **BOY** or **GIRL** button to cast your vote
3. View the results displayed as a barometer showing vote distribution
4. Once voted, users cannot vote again (tracked via cookie)

## Customization

### Change Language

Modify the `lang` attribute in `index.html`:
```html
<html lang="en">  <!-- For English -->
<html lang="de">  <!-- For German -->
```

### Add New Languages

1. Create a new JSON file in the `translations/` directory (e.g., `fr.json`)
2. Copy the structure from `en.json` or `de.json`
3. Translate the values accordingly

### Modify Cookie Name

Change the `$cookieName` variable in `vote.php` to customize the cookie identifier.

## File Structure

- `index.html` - Main HTML page
- `vote.php` - Backend voting logic and vote storage
- `functions.js` - Client-side voting functions and UI updates
- `language.js` - Language detection and content replacement
- `lang.php` - Language file loader
- `translations/` - Language translation files
- `assets/` - CSS and Font Awesome resources

## License

This project is provided as-is for personal use.
