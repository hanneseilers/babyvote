function vote(gender) {
    fetch('vote.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'vote=' + gender
    })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            if (data.toString().length > 0) {
                updateBarometer(data)
            }
        })
        .catch(error => console.log(error))
}

/**
 * Removes the voting area
 */
function removeVote(){
    document.getElementById('vote').remove()
}

/**
 * @returns {boolean}
 */
function hasVoted(){
    // Check if the user has already voted
    return getCookie('babyVote_123456_hasVoted')
}

function updateBarometer(votes) {
    const total = votes.boy + votes.girl
    const boyWidth = total > 0 ? (votes.boy / total * 100) : 0
    const girlWidth = total > 0 ? (votes.girl / total * 100) : 0

    const resultsDiv = document.getElementById('results')
    resultsDiv.innerHTML = `
                <div class="barometer text-white">
                    <div class="p-3 align-content-center boy" style="width: ${boyWidth}%">
                        <b><i class="fa-solid fa-mars"></i></b>
                    </div>
                </div>
                <div class="barometer text-white">
                    <div class="p-3 align-content-center girl" style="width: ${girlWidth}%">
                        <b><i class="fa-solid fa-venus"></i></b>
                    </div>
                </div>
            `;
}

function getCookie(name) {
    let cookie = {};
    document.cookie.split(';').forEach(function(el) {
        let [k,v] = el.split('=');
        cookie[k.trim()] = v;
    })
    return cookie[name];
}