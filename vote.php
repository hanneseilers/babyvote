<?php
// Filename where the votes are stored
$filename = 'votes.txt';
$cookieName = 'babyVote_123456_hasVoted';
$votes = getVotes($filename);

// Check if a vote has been submitted
if (isset($_POST['vote']) && !isset($_COOKIE[$cookieName])) {
    $vote = $_POST['vote'];

    if (strlen($vote) > 0) {

        // Count the vote
        if ($vote === 'boy') {
            $votes['boy']++;
        } elseif ($vote === 'girl') {
            $votes['girl']++;
        }

        // Save the votes back to the file
        file_put_contents($filename, json_encode($votes));

        // Set a cookie to indicate that the user has voted
        setcookie($cookieName, '1', time() + (86400 * 30), "/"); // Valid for 30 days
    }
}

// Load the votes for output
if (file_exists($filename)) {
    echo file_get_contents($filename);
} else {
    // Save the votes back to the file
    file_put_contents($filename, json_encode($votes));
    echo json_encode($votes);
}

function getVotes($filename){
    // Read the current votes from the file
    $votes = ['boy' => 0, 'girl' => 0];
    if (file_exists($filename)) {
        $content = file_get_contents($filename);
        $votes = json_decode($content, true);
    }
    return $votes;
}