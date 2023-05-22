const resul = document.getElementById("result");
const botao = document.getElementById("analyze-button")

const achaPalavra = [{numero: null}]
n = -1


class textAnalizer {
    
    constructor() {
        this.texto = null;
    }

    
    analizar(){
        this.texto = document.getElementById("inputTexto").value
        const palavraChave = document.getElementById("input-keyword");

        const palavraChaveSC = palavraChave.toLowerCase
        const textoSC = this.texto.toLowerCase()

        const localDaPalavra = textoSC.indexOf(palavraChaveSC)

        //Verifica se tem repetições no array
        function verificaArray(array){
            if(array.length !== new Set(array).size){
                return true
            }

            return false
        }

        if (palavraChave.value == "") {
            resul.innerHTML = `<h3>Por favor insira uma palavra chave</h3>`
        }

        else {
            n += 1

            achaPalavra.push(textoSC.indexOf(palavraChaveSC, (localDaPalavra + n)))

    

           if(verificaArray = true){
            resul.innerHTML = `A palavra ${palavraChave.value} foi repetida ${achaPalavra.length} vezes`

           } else{
                this.analizar()
           }
        }
    }
}

const analizador = new textAnalizer 

botao.addEventListener ('click', function(){analizador.analizar()}) 