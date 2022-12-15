let objectarray = [];
let indexvalue = 0;
let itemToDelete = null;

function addToArray() {

    console.log("print")
    let customer = {
        'date': '',
        'firstName': '',
        'lastName': '',
        'address': '',
        'postalcode': '',
        'phone': '',
        'email': '',
        'gender': '',
        'age': '',
        'home': '',
        'own':'',
        'income': '',
        'clientType': ''
    };

    customer.date = document.getElementById("current_date").value;
    customer.firstName = document.getElementById("fname").value;
    customer.lastName = document.getElementById("lname").value;
    customer.address = document.getElementById("stAddress").value;
    customer.postalcode = document.getElementById("postal").value;
    customer.phone = document.getElementById("phone").value;
    customer.email = document.getElementById("email").value;
    customer.age = document.getElementById("age").value;
    customer.income = document.getElementById("income").value;;

    let genderElement = document.querySelector("input[name=gender]:checked");
    if(genderElement != null) {
        customer.gender = genderElement.value;
    }

    let property =document.querySelector("input[name=home]:checked");
    if(property != null){
        customer.home = property.value;
    } 

    let userType = document.querySelector("input[name=current_clients]:checked");
    if(userType != null){
        customer.clientType = userType.value;
    }

    let checked = document.querySelectorAll("input[name=checkbox]:checked");
    if(checked.length > 0){
        checked.forEach(e => {
           customer.own += e.value + ", ";
        })
    }

    objectarray.push(customer);
    console.log(customer);
    customerList();
    console.log(objectarray);
    document.getElementById("form").reset();
    console.log("print")
};

function customerList() {
    let customerlist = "";
    let displayButtons = "";
    console.log(objectarray.length)
    for(var i = 0; i < objectarray.length; i++){
        let customer = {
            'date': '',
            'firstName': '',
            'lastName': '',
            'address': '',
            'postalcode': '',
            'phone': '',
            'email': '',
            'gender': '',
            'age': '',
            'home': '',
            'own':'',
            'income': '',
            'clientType': ''
        };
        
        customer = objectarray[i];
        customerlist = 
            customer.firstName + " " + 
            customer.lastName + "<br>" + 
            customer.address + " <br>" +   
            customer.postalcode + "<br>" + 
            customer.phone + "<br>" + 
            customer.email;
            
            if(customer.date != ''){
                customerlist += "<br>" +  "Date: " + customer.date;
            }
            if(customer.gender != ''){
                customerlist += "<br>" +  "Gender: " + customer.gender; 
            }
            if(customer.age != ''){
                customerlist += "<br>" +  customer.age + " years old"; 
            }
            if(customer.home != ''){
                customerlist += "<br>" + customer.home + " a property";
            }
            if(customer.own != ''){
                customerlist += "<br>" + "Items owned: " + customer.own;
            }
            if(customer.income != ''){
                customerlist += "<br>" + "Annual Income: " +  "$ " + customer.income;
            }
            if(customer.clientType != ''){
                customerlist += "<br>" + "First time user? " + customer.clientType;
            }
            
            
            
            displayButtons += "<div class=list_content><input type=radio name=listitem ";
            displayButtons += " value=" + i + " ";
        displayButtons += " onclick=setItemToDelete(this.value)> ";
        displayButtons += customerlist + "</div>" + "<br>";
    }

    document.getElementById("customerList").innerHTML = displayButtons;
}

function setItemToDelete(index){
    
    console.log(index);

    document.getElementById("submit").disabled = true;
    document.getElementById("delete").disabled = false;

    itemToDelete = index;

}

function deleteItem(){

    document.getElementById("submit").disabled = false;
    document.getElementById("delete").disabled = true;

    console.log(itemToDelete);

    if(itemToDelete !== null){
        objectarray.splice(itemToDelete, 1)
    }

    customerList();
}