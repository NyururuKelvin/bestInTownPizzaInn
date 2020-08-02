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

//  order function

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
        $("#subtotal").html('Kindly select at least one size, and a crust.')
    } else
})