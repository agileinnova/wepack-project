import Comentario from './comentario';
import './style.css'

async function main(){
    const com = new Comentario();
    let cats = await com.obtenerCategorias();
    console.log(cats);
}

console.log("Hola Servidor!!!!");
let n1, n2;
n1 = 2;
n2 = 8;
console.log(n1 + n2 + 5);

main();