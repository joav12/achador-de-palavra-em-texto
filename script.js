const resul = document.getElementById("result");
const botao = document.getElementById("analyze-button")

const achaPalavra = []
n = -1


class textAnalizer {
    
    constructor() {
        this.texto = "";
    }

    click(){
        n = 0
        const achaPalavra = []

        this.texto = document.getElementById("inputTexto").value
        const palavraChave = document.getElementById("input-keyword");

        const palavraChaveSC = palavraChave.value.toLowerCase()
        const textoSC = this.texto.toLowerCase()
        const localDaPalavra = textoSC.indexOf(palavraChaveSC)

        analizar()
       function analizar(){
    
            //Verifica se tem repetições no array
            function verificaArray(){
                if(achaPalavra.length !== new Set(achaPalavra).size){
                    return true
                }
    
                return false
            }
    
            if (palavraChave.value == "") {
                resul.innerHTML = `Por favor insira uma palavra chave`
    
            } else if(localDaPalavra == -1){
                resul.innerHTML = `Essa palavra não existe nesse texto`
    
            } else {
                n += 1
    
                //Adiciona a posição das palavras no array
                adicionaArry()
                function adicionaArry() {
                    return textoSC.split(palavraChaveSC, n).join(palavraChaveSC).length
                }
                achaPalavra.push(adicionaArry())
    
               if(verificaArray() == true){
                resul.innerHTML = `A palavra "${palavraChave.value}" foi repetida ${achaPalavra.length - 2} vezes`
   
                console.log(achaPalavra)
    
               } else{
                    analizar()
               }
            }
        }   
    }
}

const analizador = new textAnalizer 

botao.addEventListener ('click', function(){analizador.click()}) 