function texto(x) {
    if (x !== "") {
        l = + document.getElementById('nmrcao').innerHTML
        if (l == "1") {
            if (cadastros.indexOf(x) < 0) {
                if (tent > 1) {
                    alert('Você não existe no nosso sistema, você possui mais '+tent+' tentativas.')
                } else if (tent > 0) {
                    alert('Você não parece saber o que está fazendo, você possui mais '+tent+' tentativa.')
                } else {
                    alert('Suas tentativas acabarm, Adeus.')
                }
                document.getElementById('bobor').innerHTML = "Insira o codinome do usuário."
                document.getElementById('bobor').style = "font-weight: 900; color: #3f0000;"
                document.getElementById('tent')
                tent--
                if (tent < 0) {
                    document.open()
                    setInterval(saia, 0.000001)
                    document.getElementById('omaga').style = "width: 0; height: 0; color: transparent; background-color = transparent;"
                    document.getElementById('textob').value = null
                }
                return false
            }
            else {
                //if da senha
                sen = parseInt(cadastros.indexOf(x) % 2)
                if (sen == 0) { //não é par
                    tananan = cadastros.indexOf(x) + 1
                }
                else {
                    tananan = cadastros.indexOf(x)
                }
                if (Senhas[tananan] == 'morto') {
                    alert('você já não está mais entre nós.')
                    document.getElementById('textob').value = null
                    return false
                }
                if (Senhas[tananan] == 'lixo') {
                    alert('você não é bem vindo aqui.')
                    document.getElementById('textob').value = null
                    return false
                }
                if (Senhas[tananan] == 'inex') {
                    alert('Você já não existe mais.')
                    document.getElementById('textob').value = null
                    return false
                }
                x = ['Entrar como ' + x + '?']
            }
        }
        else if (l == "2") {
            if (x == Senhas[tananan]) {
                salvar(x)
                document.getElementById('textob').value = null
                return false
            }
            else{
                salvar(x)
                document.getElementById('textob').value = null
            if (tent > 1) {
                alert('Você não existe no nosso sistema, você possui mais '+tent+' tentativas.')
            } else if (tent > 0) {
                alert('Você não parece saber o que está fazendo, você possui mais '+tent+' tentativa.')
            } else {
                alert('Suas tentativas acabarm, Adeus.')
            }
            tent--
            return false
        }
        }
        else if (l == "3") {
            x = [x + " é o código?"]
        }
        document.getElementById('botoes').style = "width: 60%;"
        document.getElementById('botoes').style = "height: 4vh;"
        document.getElementById('sim').value = "Sim"
        //document.getElementById('sim').onclick = "salvar(x = document.getElementById('textob').value)"
        document.getElementById('nao').value = "Não"
        document.getElementById('sim').style = "background-color: grey;"
        document.getElementById('nao').style = "background-color: grey;"
        document.getElementById('sim').class = "botao"
        document.getElementById('nao').class = "botao"
    }
    else {
        l = + document.getElementById('nmrcao').innerHTML
        if (l == "1") {
            x = "Insira o codinome do usuário."
        }
        else if (l == "2") {
            x = "Senha"
        }
        else if (l == "3") {
            x = "Insira o código aleatório de via única"
        }
        document.getElementById('sim').value = " "
        document.getElementById('nao').value = " "
        document.getElementById('sim').style = "background-color: transparent; border: 0px; width: 0px; height: 0px;"
        document.getElementById('nao').style = "background-color: transparent; border: 0px; width: 0px; height: 0px;"
        document.getElementById('sim').class = "nada"
        document.getElementById('nao').class = "nada"
        document.getElementById('textob').value = ''
    }
    document.getElementById('bobor').innerHTML = x
}


function salvar(x) {
    cont = document.getElementById('nmrcao').innerHTML
    if (cont == "1") {
        a = []
        numerga = cadastros.indexOf(x)
    }
    CheckSpace = a.indexOf(" ")
    CheckNum = + x - x
    if (cont == "1" && CheckNum === 0 || CheckSpace !== -1) {
        alert('Não identificamos nossos agentes com números, QU#M # VOC#?')
        cont--
        texto('')
    }
    if (cont == "2" && x !== Senhas[tananan]) {
        document.getElementById('bobor').innerHTML = "Insira sua senha CORRETAMENTE"
        document.getElementById('sim').value = " "
        document.getElementById('nao').value = " "
        document.getElementById('sim').style = "background-color: transparent; border: 0px; width: 0px; height: 0px;"
        document.getElementById('nao').style = "background-color: transparent; border: 0px; width: 0px; height: 0px;"
        document.getElementById('sim').class = "nada"
        document.getElementById('nao').class = "nada"
        document.getElementById('botoes').style = "width: 0;"
        document.getElementById('botoes').style = "height: 0;"
        document.getElementById('textob').value = ''
        return false
    }
    if (cont > 2 && CheckNum === 0) {
        alert('Por favor insira caracteres não numéricos.')
        cont--
        texto('')
    }

    a[cont - 1] = x
    cont++
    x = null
    if (cont < 3) {
        document.getElementById('nmrcao').innerHTML = + cont
        document.getElementById('textob').value = null
        document.getElementById('mostrar').innerHTML = a
        texto('')
    }
    else {
        document.getElementById('textob').value = null
        document.getElementById('mostrar').innerHTML = null
        texto('')
        document.getElementById('nmrcao').innerHTML = null
        document.getElementById('bobor').innerHTML = 'Bem vindo agente '+cadastros[numerga]+'.'
        document.getElementById('textob').style = "background-color: transparent; border: 0px 0px 0px 0px; border-color: transparent; width: 0px; height: 0px;"
        document.getElementById('Confirmar').style = "background-color: transparent; border: 0px 0px 0px 0px; border-color: transparent; color: transparent; width: 0px; height: 0px;"
        document.getElementById('botoes').style = "width: 0;"
        document.getElementById('botoes').style = "height: 0;"
    }
}


function matematica(x) {
    y = document.getElementById('x2').value
    if (x === '' || y === '') {
        alert('Preencha os dois campos')
        return false;
    }
    x = +x
    y = +y
    var divisao = x / y
    var soma = x + y
    var multi = x * y
    var sub = x - y
    final = ["a divisão é: " + divisao + "", "<br> a multiplicação é: " + multi + " ", "<br> a soma é: " + soma + " ", "<br> a subtração é: " + sub + "<br> "]
    document.getElementById('matematicar').innerHTML = final
    x = ''
}

Senhas = ['Infeliz', '6969', 'Adão', 'lixo', 'Veríssimo', 'Olhos sempre abertos', 'Kaiser', 'inex', 'Gaspar', 'morto','Angel Of The Night','inex','Lionel','morto','Romero','morto','fagner','morto','egnafer','morto','jefer','morto','Siqueira','irreg','lala','gl1.5asp']

cadastros = ['Infeliz', 'infeliz', 'Adão', 'adão', 'Veríssimo', 'veríssimo', 'Kaiser', 'kaiser', 'Gaspar', 'gaspar','Angel Of The Night','angel of the night','lionel','Lionel','Romero','romero','fagner','Fagner','Egnafer','egnafer','jefferson','Jefferson','Siqueira','siqueira','Br05ki']

conter = 0
tent = 2

function saia() {
    document.write('Saia. \n Saia. \n Saia. \n Saia. \n Saia. \n Saia. \n Saia. \n Saia. \n Saia. \n Saia. Saia. \n Saia. \n Saia. \n Saia. \n Saia. \n Saia. \n Saia. \n Saia. \n Saia. \n Saia. Saia. \n Saia. \n Saia. \n Saia. \n Saia. \n Saia. \n Saia. \n Saia. \n Saia. \n Saia. Saia. \n Saia. \n Saia. \n Saia. \n Saia. \n Saia. \n Saia. \n Saia. \n Saia. \n Saia. Saia. \n Saia. \n Saia. \n Saia. \n Saia. \n Saia. \n Saia. \n Saia. \n Saia. \n Saia. Saia. \n Saia. \n Saia. \n Saia. \n Saia. \n Saia. \n Saia. \n Saia. \n Saia. \n Saia. Saia. \n Saia. \n Saia. \n Saia. \n Saia. \n Saia. \n Saia. \n Saia. \n Saia. \n Saia. Saia. \n Saia. \n Saia. \n Saia. \n Saia. \n Saia. \n Saia. \n Saia. \n Saia. \n Saia. Saia. \n Saia. \n Saia. \n Saia. \n Saia. \n Saia. \n Saia. \n Saia. \n Saia. \n Saia. \n Saia. \n Saia. \n Saia. \n Saia. \n Saia. \n Saia. \n Saia. \n Saia. \n Saia. \n Saia. \n ')
    conter++
    if (conter == 150) {
        for (lele = 0; lele = 1 / 0; lele++)
            document.write('Morra')
    }
}