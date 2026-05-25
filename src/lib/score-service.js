
export async function submitScore(userId, uEmail, gameName, ratio)
{
    fetch('/api/scores', {
    method: 'POST',
    body: JSON.stringify({
        user: {id: userId, email: uEmail},
        gameTitle: gameName,
        score: ratio
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
    })
    .then((response) => response.json())
    .then((json) => console.log(json));
}

