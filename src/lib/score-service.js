
export async function submitScore(id, uEmail, gameTitle, ratio)
{
    fetch('/api/scores', {
    method: 'POST',
    body: JSON.stringify({
        user: {userID: id, email: uEmail},
        game: gameTitle,
        score: ratio
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
    })
    .then((response) => response.json())
    .then((json) => console.log(json));
}

