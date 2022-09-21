//npm install shal --- Api

function ocultarSenha(senha){

    var sha1 = require ("shar1");
    console.log(senha);
    var hash = shar1 (senha);
    console.log(hash);
    return hash;
}
module.exports ={ocultarSenha}