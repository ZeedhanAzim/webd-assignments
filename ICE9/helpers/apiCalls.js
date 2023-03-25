exports.getSWAPI = (url) => {
    return fetch(url, {
        headers: { 'Content-Type': 'application/json' }
    }).then(res => {
        return res.json()
    }).then(data => {
        return data
    }).catch(err => {
        console.log('fetch error');
        console.log(err);
    });
}