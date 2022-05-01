function insert(x) {

    number = document.querySelector('.result').innerHTML
    document.querySelector('.result').innerHTML = number + x

}

function clean() {

    document.querySelector('.result').innerHTML = ''

} 

function remove() {

    let result = document.querySelector('.result').innerHTML

    document.querySelector('.result').innerHTML = result.substring(0, result.length -1)

}

function calculate() {
    
    let result = document.querySelector('.result').innerHTML 

    if (result) {
        
        document.querySelector('.result').innerHTML = eval(result)

    } else {

        document.querySelector('.result').innerHTML = ''

    }

}