cont = 0

document.addEventListener('keyup', function(e) {
    if (e.key === "Enter") {
        if (document.getElementById('sim').style = "background-color: grey;" && document.getElementById("nmrcao").innerHTML == 1 && cont > 0){
            const btn = document.querySelector("#sim")

        btn.click();
        }
        else{
        const btn = document.querySelector("#confirmar")

        btn.click();
        cont++
        }
    }
}
);