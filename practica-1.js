const fs = require('fs');


class ProductManager {
    constructor(filename) {
      this.filename=filename;
      this.products = [];
      this.idCounter = 1;
    }

    //regresa el array de productos
    getProducts() {
      return this.products;
    }

    // funcion para generar id esto es otra manera de hacerlo, yo lo hice metiendo el contador en el constructor
    generateId() {
        counter = this,products.length;
        if (counter ==0) {
            return 1;
        } else {
            return (this.products[count-1].id)+1;
        }
    }
  // funcion para agregar un producto al array
    addProduct= async (title, description, price, thumbnail, code, stock) => {

     //validar que los datos no esten vacios antes de hacer push al array
      if(!title||!description||!price||!thumbnail||!code||!stock){
        console.log("Faltan datos para agregar el producto");
        return undefined;
      }

        //revisa que el codigo no exista en el array
      if (this.products.find(p => p.code === code)) {
        console.log("El producto ya existe, no se puede agregar");
        return undefined;
      }

      // si cumple con todo lo anterior, hacemos push al array
      this.products.push({
        id: this.idCounter,
        title,
        description,
        price,
        thumbnail,
        code,
        stock});
        
      this.idCounter++;
      fs.writeFileSync(this.filename, JSON.stringify(this.products, null, 2))
    }

    // funcion para buscar un producto por id
    getProductById(id) {
      const product = this.products.find(p => p.id === id);
      if (!product) {
        console.log("Product not found.");
        return undefined;
      }
      return product;
    }
  }
 //abajo es el codigo para probar las funciones
 async function pruebaDesafio(){
  const productManager = new ProductManager('products.json');
  await productManager.addProduct("producto prueba", "Este es un producto prueba", 200, "Sin imagen", "abc123", 25);
  await productManager.addProduct("producto prueba1", "Este es un producto prueba1", 201, "Sin imagen1", "abc1231", 26);
  await productManager.addProduct("producto prueba1", "Este es un producto prueba1", 201, "Sin imagen1", "abc1231", 26);
  await productManager.addProduct("producto prueba1", "Este es un producto prueba1", 201, "Sin imagen1", "abc1231111", );
  console.log(productManager.getProducts());
  console.log(productManager.getProductById(1));
 }

 pruebaDesafio();

