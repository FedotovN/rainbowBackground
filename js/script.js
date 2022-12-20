const doc = document
let values = ['0','1','2','3','4','5','6',
                '7','8','9','A','B','C','D', 'E', 'F'],
    bckg = doc.body.style
    button = doc.getElementById("colorChangingButton")
count = [0,0,0,0,0,0]

setInterval(()=>{
    for(let i = 0; i < 6; i++){
        for(let j = 0; j<1; j++){
            let rand = Math.round(Math.random() * 15)
            count[i+j] = values[rand]
        }
    }
    bckg.backgroundColor = "#" + count.join("")
}, 150)

      