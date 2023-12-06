let name = prompt("Entrez votre nom")

if(name.length < 3 ){
    console.log(`votre nom ${name} est trop court`)
}else{
    console.log(`bienvenue ${name}`)
}