function verificarCarro(){
    let carro = document.getElementById("carro").value.toLowerCase();
switch(carro){
    case 'hatch':
        console.log('Compra efetuada com sucesso !');
        break;
    case 'sedan' :
        console.log('Tem certeza que não prefere um modelo hatch ?'); 
        break;
    case 'caminhonete':
        console.log('Tem certeza que não prefere um modelo hatch ?');
        break;
    case 'motocicleta':
        console.log('Tem certeza que não prefere um modelo hatch ?');
         break;
    default:
        console.log('Não trabalhamos com este tipo de automóvel aqui.');
        break;
}
}

