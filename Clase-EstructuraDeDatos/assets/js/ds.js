class Pila{
    //Definir constructor, que será el representante de este objeto
    constructor(){
        this.pila = [];
    }
    //METODOS DEL OBJETO "PILA"
    //Agregar un elemento -> Necesito saber que elemento agregar
    add(element){
        this.pila.push(element);
        return this.pila;
    }
    //Eliminar un elemento
    delete(){
        return this.pila.pop();
    }
    //Saber el tamaño de la pila (la cantidad de elementos)
    getSize(){
        return this.pila.length;
    }
    //Leer un elemento
    getElement(){
        return this.pila[this.pila.length - 1];
    }
    //leer todo los elementos
    getElements(){
        console.log(this.pila);
    }
}

class Cola{
    //Definir constructor, que será el representante de este objeto
    constructor(){
        this.cola = [];
    }
    /*METODOS DEL OBJETO "COLA"*/
    //Agregar un elemento -> Necesito saber que elemento agregar
    add(element){
        this.cola.push(element);
        return this.cola;
    }
    //Eliminar un elemento
    delete(){
        return this.cola.pop();
    }
    //Saber el tamaño de la pila (la cantidad de elementos)
    getSize(){
        return this.cola.length;
    }
    //Leer un elemento
    getElement(){
        return this.cola[this.cola.length - 1];
    }
    //leer todo los elementos
    getElements(){
        console.log(this.cola);
    }
}

class Arbol{
    constructor(node){
        this.node = node;
        this.descendents = [];
    }
    add(node){
        this.descendents.push(node);
        return this.descendents;
    }
    addElement(element){
        this.node=element;
        return this.node;
    }

}