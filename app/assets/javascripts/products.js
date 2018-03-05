$(document).ready(function() {
  $.ajax({
    method: 'GET',
    url: "http://json-server.devpointlabs.com/api/v1/products",

  }).done(function(p) {
    var list = $('.product-data')
    p.forEach(function(prod) {
      var li = '<li data-id="' + prod.id + '">' + prod.name + '-' + prod.description + '</li>'
      list.append(li)

    })

  })
})

$(document).on('submit', '#product-form form', function(e) {
  e.preventDefault();
  var data = $(this).serializeArray();
  $.ajax({
    url: 'http://json-server.devpointlabs.com/api/v1/products',
    type: 'POST',
    dataType: 'JSON',
    data: data
  }).done(function(product) {
    var p = '<li class="product-item" data-id="' + product.id + '" data-name="' + product.name + '">' + product.
    name + '-' + product.name + '</li>';
    $('.product-data').append(product);
  }).fail(function(err) {
    alert(err.responseJSON.errors)
  });
});