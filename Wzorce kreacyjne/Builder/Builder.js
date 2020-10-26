"use strict";
class ConcreteBuilder1 {
    constructor(product) {
        this.product = product;
        this.reset();
    }
    reset() {
        this.product = new Product1();
    }
    producePartA() {
        this.product.parts.push('PartA1');
    }
    producePartB() {
        this.product.parts.push('PartB1');
    }
    producePartC() {
        this.product.parts.push('PartC1');
    }
    getProduct() {
        const result = this.product;
        this.reset();
        return result;
    }
}
class Product1 {
    constructor() {
        this.parts = [];
    }
    listParts() {
        console.log(`Product parts: ${this.parts.join(', ')}\n`);
    }
}
class Director {
    constructor(builder) {
        this.builder = builder;
    }
    buildMinimalViableProduct() {
        this.builder.producePartA();
    }
    buildFullFeaturedProduct() {
        this.builder.producePartA();
        this.builder.producePartB();
        this.builder.producePartC();
    }
}
function clientCode() {
    const product = new Product1();
    const builder = new ConcreteBuilder1(product);
    const director = new Director(builder);
    console.log('Standard basic product:');
    director.buildMinimalViableProduct();
    builder.getProduct().listParts();
    console.log('Standard full featured product:');
    director.buildFullFeaturedProduct();
    builder.getProduct().listParts();
    console.log('Custom product:');
    builder.producePartA();
    builder.producePartC();
    builder.getProduct().listParts();
}
clientCode();
