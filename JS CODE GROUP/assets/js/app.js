var button = document.getElementById('button')

button.onclick = function() {
    var input = document.getElementById('input').value
    var result = document.getElementById('result')
    var group = Number(input.slice(-3,-2))

    if(group === 1) {
        result.innerHTML = 'Morning group'
        document.body.style.backgroundImage = 'linear-gradient(to right, #ff512f, #f09819)'
    }

    else if(group === 2) {
        result.innerHTML = 'Afternoon group'
        document.body.style.backgroundImage = 'linear-gradient(to right, #22c1c3, #fdbb2d)'
    }

    else if(group === 3) {
        result.innerHTML = 'Evening group'
        document.body.style.backgroundImage = 'linear-gradient(to right, #0b486b, #f56217)'
    }

    else{
        result.innerHTML = 'Group not found'
        document.body.style.backgroundImage = 'linear-gradient(to right, #009fff, #ec2f4b)'
    }
}