
let CustomerOrder = function (pizzaSize,toppingsSelection,crustOption,numberOfPizza){
    this.pizzaSize =pizzaSize;
    this.toppingSelection = toppingsSelection;
    this.crustOption = crustOption;
    this.numberOfPizza = numberOfPizza;
}


function PizzaSelection(pizzaSizePrize,crustOptionPrize,toppingsSelectionPrize, numberOfPizzaPrize,deliveryOption){
    this.pizzaSizePrize = pizzaSizePrize;
    this.crustOptionPrize =crustOptionPrize;
    this.toppingsSelectionPrize = toppingsSelectionPrize;
    this.numberOfPizzaPrize = numberOfPizzaPrize;
    this.deliveryOption = deliveryOption;
}

PizzaSelection.prototype.CustomerOrderBill = function() {
    return(this.numberOfPizzaPrize*(this.pizzaSizePrize+this.toppingsSelectionPrize+this.crustOptionPrize)+this.deliveryOption);
}


PizzaSelection.prototype.totalCharges

$(document).ready(function(){
    $("form#myForm").submit(function(event){
        event.preventDefault()

        let pizzaSize = $("#pizzaSize").val();
        let toppingSelection = $("#toppingSelection").val();
        let crustOption = $("#crustOption").val();
        let numberOfPizza = parseInt($("#numberOfPizza").val());

        let Customer= new CustomerOrder(pizzaSize,toppingSelection,crustOption,numberOfPizza);

        let myPizzaSizePrize = pizzaCharges();
        function pizzaCharges() {
            if(pizzaSize =="small"){
                let smallPizza = 600;
                return small;
            }
            else if(pizzaSize == "medium") {
                let medium = 800;
                return medium;
            }
            else if(pizzaSize == "large") {
                let large=1000;
                return large;
            }
        };

        let myToppingsSelectionPrize = toppingsSelectionCharges();
        function toppingsSelectionCharges(){
            if(toppingSelection=="Sausages"){
                let Sausages = 100;
                return Sausages;
            }
            else if(toppingSelection=="Cheese") {
                let Cheese = 150;
            } 
            else if(toppingSelection=="Onion") {
                let Onions = 200;
                return Onions;
            }
        };

        let myCrustOptionPrize = crustOptionCharges();
            function crustOptionCharges() {
                if(crustOption =="Crispy") {
                    let Crispy = 300;
                    return Crispy;
                }
                else if(crustOption == "Stuffed") {
                    let Stuffed = 400;
                    return Stuffed;
                }
                else if(crustOption =="Glutten_free") {
                    let Glutten_free = 500;
                    return Glutten_free;
                }

            };

            function radioChecked() {
                let myRadio = document.getElementById("radiosPizza").checked;
                if(myRadio){
                    let delivery=300;
                    return delivery;
                }
                else if(!myRadio) {
                    let notDelivered = 0;
                    return notDelivered;
                };
            };
            let pizzaCheck=radioChecked();



        let newPizzaSelection = new PizzaSelection(myPizzaSizePrize,myToppingsSelectionPrize,myCrustOptionPrize,numberOfPizza,pizzaCheck);
            $("#orderButton").click(function(){
                $(".orderCalculation").toggle();
                $("#pizzaShow").text("PizzaSize:  "+pizzaSize);
                $("#pizzaCrustShow").text("Crust: " + crustOption);
                $("#pizzaToppingsShow").text("Toppings: "+toppingSelection);
                 $(".pizzaNumber").text("Number of Pizza: "+numberOfPizza);
                  $("#totalChargesShow").text("Total Charges: "+newPizzaSelection.customerOrderBill);
            });
    });
});
function myOrder() {
    let text;
    let person = prompt("Please enter your Location:", " ");
    if (person == null || person == "") {
      text = "User cancelled the prompt.";
    } else {
      text = "Thank you the order will be deilvered to: " + person ;
    }
    document.getElementById("demo").innerHTML = text;
  }


