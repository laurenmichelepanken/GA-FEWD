// 1. Create .on("click", function() {} ) handlers for each of the thumbnails: #first, #second, #third, #fourth
// 2. Use .attr() to change the `src` attribute of #bigimage to correspond to image that was clicked
      
$('.thumbnails .zoom').click(function(e){
      e.preventDefault();

      var photo_fullsize =  $(this).find('img').attr('src');

      $('.woocommerce-main-image img').attr('src', photo_fullsize);

    });