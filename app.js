window.onload = function() {
    var stream = Rx.Observable
        .fromEvent(document.getElementById('input-text'), 'keyup')
        .map(function(e) {
            return e.target.value
        })

    stream.subscribe(function(res) {
        console.log(res)
        document.getElementById('input-model').innerText = res
    })
}