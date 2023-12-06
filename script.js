let name = prompt("Entrez votre nom")
if(name.length < 3)
{
    console.log("Votre nom doit contenir plus de 3 lettres")
}else{
    console.log(`Bienvenue ${name}`);
}