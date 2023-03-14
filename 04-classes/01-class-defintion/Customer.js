var Customer = /** @class */ (function () {
    function Customer(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return Customer;
}());
var mycustomer = new Customer("hello", "world");
console.log(mycustomer.firstName);
console.log(mycustomer.lastName);
