var ProductNamespace;
(function (ProductNamespace) {
    function ProductDetails(product) {
        console.log("Product details are: Name = " + product.name + ", Price = " + product.price + ", ExpiryDate = " + product.expiryDate + " ");
    }
    ProductNamespace.ProductDetails = ProductDetails;
    ;
})(ProductNamespace || (ProductNamespace = {}));
/// <reference path="interface.ts" />
var product = { name: "French fries", price: 25.50, expiryDate: "2017.12.31" };
ProductNamespace.ProductDetails(product);
