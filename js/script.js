// getSize function
 
 function getSize (size) {
    if (size === 0) {
        return "Pizza Pie"
   }else if (size === 1) {
        return "Regular"
    }else if (size === 2) {
        return "Medium"
    }else if (size === 3) {
     return "large"
   }
 };

//  Order function

$(document).ready(function(){
    $('#submit').click(function(event){
        event.preventDefault();
        var type = $('#type').val();
        var size = parseInt($("input[name='size']:checked").val());
        var crust = parseInt($("input[name='crust']:checked").val());
        var amount = parseInt($("#number").val());
        var price=[200, 500, 800,1000];
        var sumToppings=0;
        $("input[name='topping']:checked").each(function(){
          sumToppings+=parseInt($(this).val());
    })

    var subTotal = ((price[size]) + crust + sumToppings)* amount;

    if (size =='undefined'|| (price[size]) == 'undefined' || crust == 'NaN' || sumToppings == '' || subTotal == 'NaN'){         
        $("#subtotal").html('Kindly select at least one size, one crust and a topping')
    } else{
        $("#subtotal").html("<strong>Your Pick:</strong>" + "<br/>"+"Type:" + type + "<br/>"+ " Size: " + getSize(size)+ "<br/>"+" No. of Pizzas ordered " + amount+ "<br/>"+ " Price: Kshs " + price[size] + "<br/>" + " crust: Kshs. " + crust + "<br/>"+ " Toppings: Kshs "+ sumToppings + "<br/>"+" <strong> Total: Kshs </strong>" + subTotal);
        $(".deliver").show();
    }
});

    $("#checkout").click(function(){
        alert("Thank you for shopping with us, Kindly pick up your order at the counter near by.")
        
      });
});

// Delivery

$("#delivery").click(function(){
    $(".delivery").show()
  });
  //validate delivery form
  $("#confirm").click(function(){
    event.preventDefault()
    var town=["CBD", "Hurlingham", "Muthaiga", "Ngong Road", "South B", "WestLands", "Thika Road"]
    var charges=[50,100,150,100,100, 50, 100]
    var name = $("#name").val();
    var contact = $("#contact").val();
    var location = town[$("#location").val()];
    var street = $("#street").val();
    var delivery = charges[$("#location").val()];
    if (name == '' || contact == '' || location == ''|| street== '' ){
      alert("Kindly fill all the fields");        
    } else {
      alert('Hello ' +name + " we have received your order. And will be deliverd to "+ street +' Street, ' + location + " in less than 30 Min. Delivery charges: Ksh "+delivery);
      $("#summary").html("Your order summary is as follows: <br/> Type:" + type + "<br/>" + " Size: " + getSize(size) + "<br/>" + " Price: Kshs " + price[size] + "<br/>"+ " crust: Kshs " + crust + "<br/>"+ " Toppings: Kshs "+ sumToppings + "<br/>" +" Total: Kshs " + subTotal);
     }

  });