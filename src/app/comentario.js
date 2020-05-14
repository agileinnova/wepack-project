class Comentario{
	
    async obtenerCategorias(){
        let respuesta = await fetch("https://eonet.sci.gsfc.nasa.gov/api/v3/categories");
        let categorias = await respuesta.json();
       /* respuesta.then(async (data) => {
            console.log(await data.json());
        }) 
        
        respuesta.then( (data) => {
            data.json().then( (json) => {
                console.log(json.categories);
            })
        })*/
        
        return categorias.categories;
    }
    
}

export default Comentario;