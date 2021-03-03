function contar() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if(ini.value.lenght == 0 || fim.value.lenght == 0 || passo.value.lenght == 0){
        res.innerHTML = 'Impossível Contar'
    }else{
        res.innerHTML = 'Contando: '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if(p == 0){
            res.innerHTML = 'Impossível Contar'
        }

        if( i < f){
            for(let count = i; count <= f; count += p){
                res.innerHTML += ` ${count} \u{1F449}`
            }
            
        } else{
            for(let count = i; count <= f; count -= p){
                res.innerHTML += ` ${count} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}