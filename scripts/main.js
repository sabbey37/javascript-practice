console.log("Hello World!");

function hello(name) {
    if (!name) {           // if not whom...
        name = "World";
    }
    return "Hello, " + name + "!";
}

function madlib(name, subject) {
    return name + "'s favorite subject in school is " + subject + ".";
}

function tipAmount(bill, service) {
    if (service == "good") {
        return bill * .20;
    } else if (service == "fair") {
        return bill * .15;
    } else if (service == "bad") {
        return bill * .10;
    } else {
        return undefined;
    }
}

function totalAmount(bill, service) {
    var tip = tipAmount(bill, service);
    return bill + tip;
}

function splitAmount(bill, service, people) {
    var total = totalAmount(bill, service);
    return total / people;
}