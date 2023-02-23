<script>
//get value from price field

var price = $('span.price-item.price-item--sale.price-item--last').text();
// split value with dot(.) and make 2 array indexes
var val_before = (price.split(".")[0]);
var val_dot = (price.split(".")[1]);
// merge two splliting variables togather to display value 
var final = $('span.price-item.price-item--sale.price-item--last').html(val_before + '.' + "<sup id='dynamicForm'>" + val_dot + "</sup>" )
</script>