const input = document.getElementById("inputFoto")
const preview = document.getElementById("preview")
const texto = document.getElementById("textoUpload")

input.addEventListener("change", function(){

    const arquivo = this.files[0]

    if(arquivo){
        const leitor = new FileReader()

        leitor.onload = function(e){
            preview.src = e.target.result
            preview.style.display = "block"
            texto.style.display = "none"
        }

        leitor.readAsDataURL(arquivo)
    }

})