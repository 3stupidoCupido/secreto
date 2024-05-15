function texto(x) {
    if (x !== "") {
        l = + document.getElementById('nmrcao').innerHTML
        if (l == "1") {
            if (cadastros.indexOf(x) < 0) {
                if (tent > 1) {
                    alert('Você não existe no nosso sistema, você possui mais ' + tent + ' tentativas.')
                    document.getElementById('bobor').style = "font-weight: 900; color: #3f0000;"
                    texto('')
                } else if (tent > 0) {
                    alert('Você não parece saber o que está fazendo, você possui mais ' + tent + ' tentativa.')
                    document.getElementById('bobor').style = "font-weight: 900; color: #460000;"
                    texto('')
                } else {
                    alert('Suas tentativas acabarm, Adeus.')
                }
                document.getElementById('bobor').innerHTML = "Insira o codinome do usuário."
                document.getElementById('tent')
                tent--
                if (tent < 0) {
                    document.open()
                    window.open("https://www.youtube.com/watch?v=W_9KR3mYkUo&list=PLmgbe3CLlM7rPCmidYHXx0y5XBdjI4Z_t&index=3")
                    setInterval(saia, 0.00001)
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
                if (Tags[tananan] == 'morto') {
                    alert('você já não está mais entre nós.')
                    document.getElementById('textob').value = null
                    return false
                }
                if (Tags[tananan] == 'lixo') {
                    alert('você não é bem vindo aqui.')
                    document.getElementById('textob').value = null
                    return false
                }
                if (Tags[tananan] == 'inex') {
                    alert('Você já não existe mais.')
                    document.getElementById('textob').value = null
                    return false
                }
                if (Tags[tananan] == 'irreg') {
                    alert('Olá forasteiro.')
                }
                x = ['Entrar como ' + x + '?']
            }
        }
        else if (l == "2") {
            if (x == Senhas[tananan]) {
                salvar(x)
                document.getElementById('textob').value = null
                document.getElementById('linko').style = "background-color: black;"
                return false
            }
            else {
                salvar(x)
                document.getElementById('textob').value = null
                if (tent > 1) {
                    alert('Essa não é a sua senha, você possui mais ' + tent + ' tentativas.')
                    document.getElementById('bobor').style = "font-weight: 900; color: #3f0000;"
                } else if (tent > 0) {
                    alert('ESSA NÃO É A SUA SENHA, você possui mais ' + tent + ' tentativa.')
                    document.getElementById('bobor').style = "font-weight: bold; color: #460000;"
                } else {
                    alert('Suas tentativas acabarm, Adeus.')
                }
                tent--
                if (tent < 0) {
                    document.open()
                    setInterval(saia, 0.000001)
                    document.getElementById('omaga').style = "width: 0; height: 0; color: transparent; background-color = transparent;"
                    document.getElementById('textob').value = null
                }
                return false
            }
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
        else if (l == "") {
            //essa é a condição pra quando acaba tudo. O login aqui já foi feito.
            logincrazy()
        }
        document.getElementById('sim').value = " "
        document.getElementById('nao').value = " "
        document.getElementById('sim').style = "background-color: transparent; border: 0px; width: 0px; height: 0px; display: none; visibility: hidden;"
        document.getElementById('nao').style = "background-color: transparent; border: 0px; width: 0px; height: 0px; display: none; visibility: hidden;"
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
        document.getElementById('sim').style = "background-color: transparent; border: 0px; width: 0px; height: 0px; display: none; visibility: hidden;"
        document.getElementById('nao').style = "background-color: transparent; border: 0px; width: 0px; height: 0px; display: none; visibility: hidden;"
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
        // document.getElementById('mostrar').innerHTML = a                      não precosa mais mostrar
        texto('')
    }
    else if (cont == 3) {
        document.getElementById('textob').value = null
        document.getElementById('mostrar').innerHTML = null
        texto('')
        document.getElementById('nmrcao').innerHTML = null

        document.getElementById('bobor').innerHTML = `Bem vindo agente ${cadastros[numerga]}, acesso de nível ${Nivel[tananan]}.`
        document.getElementById('textob').style = "background-color: transparent; border: 0px 0px 0px 0px; border-color: transparent; width: 0px; height: 0px;"
        document.getElementById('Confirmar').style = "background-color: transparent; border: 0px 0px 0px 0px; border-color: transparent; color: transparent; width: 0; height: 0;"
        document.getElementById('botoes').style = "width: 0; height: 0;"
    }
}


Nivel = ['Infeliz', '4', 'Adão', '', 'Veríssimo', '5', 'Kaiser', '', 'Gaspar', '', 'Angel Of The Night', '', 'Lionel', '', 'Romero', '', 'fagner', '', 'egnafer', '', 'jefer', '', 'Siqueira', '3', 'Yuri', '3', 'pardaldemaceió', '3', 'vini', '3', 'tia iza', '3']

Tags = ['Infeliz', 'Nível 4', 'Adão', 'lixo', 'Veríssimo', 'Chefe', 'Kaiser', 'inex', 'Gaspar', 'morto', 'Angel Of The Night', 'inex', 'Lionel', 'morto', 'Romero', 'morto', 'fagner', 'morto', 'egnafer', 'morto', 'jefer', 'morto', 'Siqueira', 'irreg', 'Yuri', 'irreg', 'pardaldemaceió', 'irreg', 'vini', 'irreg', 'tia iza', 'irreg']

Senhas = ['Infeliz', '6969', 'Adão', 'lixo', 'Veríssimo', 'olhos sempre abertos', 'Kaiser', 'inex', 'Gaspar', 'morto', 'Angel Of The Night', 'inex', 'Lionel', 'morto', 'Romero', 'morto', 'fagner', 'morto', 'egnafer', 'morto', 'jefer', 'morto', 'Siqueira', '270308', 'Yuri', 'gl1.5asp', 'pardaldemaceió', 'senhadopardaldemaceió', 'vini', '071', 'tia iza', '2206']

cadastros = ['Infeliz', 'infeliz', 'Adão', 'adão', 'Veríssimo', 'veríssimo', 'Kaiser', 'kaiser', 'Gaspar', 'gaspar', 'Angel Of The Night', 'angel of the night', 'lionel', 'Lionel', 'Romero', 'romero', 'fagner', 'Fagner', 'Egnafer', 'egnafer', 'jefferson', 'Jefferson', 'Siqueira', 'siqueira', 'Br05ki', 'Br05ki', 'Pardaldemaceió', 'pardaldemaceió', 'Maverick', 'maverick', 'bel', 'Bel']

conter = 0
tent = 2




function saia() {
    window.open("https://www.youtube.com/watch?v=TM6-l1MoMvc")
    document.write('Saia. \n Saia. \n Saia. \n Saia. \n Saia. \n Saia. \n Saia. \n Saia. \n Saia. \n Saia. Saia. \n Saia. \n Saia. \n Saia. \n Saia. \n Saia. \n Saia. \n Saia. \n Saia. \n Saia. Saia. \n Saia. \n Saia. \n Saia. \n Saia. \n Saia. \n Saia. \n Saia. \n Saia. \n Saia. Saia. \n Saia. \n Saia. \n Saia. \n Saia. \n Saia. \n Saia. \n Saia. \n Saia. \n Saia. Saia. \n Saia. \n Saia. \n Saia. \n Saia. \n Saia. \n Saia. \n Saia. \n Saia. \n Saia. Saia. \n Saia. \n Saia. \n Saia. \n Saia. \n Saia. \n Saia. \n Saia. \n Saia. \n Saia. Saia. \n Saia. \n Saia. \n Saia. \n Saia. \n Saia. \n Saia. \n Saia. \n Saia. \n Saia. Saia. \n Saia. \n Saia. \n Saia. \n Saia. \n Saia. \n Saia. \n Saia. \n Saia. \n Saia. Saia. \n Saia. \n Saia. \n Saia. \n Saia. \n Saia. \n Saia. \n Saia. \n Saia. \n Saia. \n Saia. \n Saia. \n Saia. \n Saia. \n Saia. \n Saia. \n Saia. \n Saia. \n Saia. \n Saia. \n ')
    conter++
    if (conter == 150) {
        for (lele = 0; lele = Math.pow(2, 112); lele++)
            document.write('Morra')
        window.open("https://www.youtube.com/watch?v=TM6-l1MoMvc")
    }
}

function logincrazy() {
    window.open("/secreto.html");
    window.close("index.html")
}