var idade = 17
if (idade < 16){
    console.log('Não vota em Eleições')
}else{
    if(idade >16 && idade <18 || idade > 65){
        console.log('Voto Opcional')
    }
    else{
    console.log('Voto Obrigatório')
    }
}