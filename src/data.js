// estas funciones son de ejemplo

//export const example = () => {
  //return 'example';
//};

//export const anotherExample = () => {
 // return 'OMG';
//};


//Función para mostrar la data


export const showData = (objectData) => {
  for (const property in objectData) {
    
    console.log(`${property}: ${objectData[property.name]}`);
  }  
}