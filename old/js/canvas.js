( function( $ ) {
  var canvas = document.getElementById('canvas');
  var url = 'https://bigbiennale.ch/wp-content/uploads/2021/05/Fond_desktop_03-1536x871.png';
  var ctx = canvas.getContext('2d');
  var img = new Image();
  img.src = url;

  document.onreadystatechange = function() {

    if (document.readyState === 'complete')
    initImage();

  };
  function initImage() {
    $('#loading').fadeOut(300);

    var width = window.innerWidth ;
    var height = window.innerHeight ;
    canvas.width = width;
    canvas.height = height;
    ctx.drawImage(img, 0, 0, width, height);

    ctx.font = width/5 +"px 'Tomato Grotesk'";
    ctx.fillStyle = '#A0D9F7';
    ctx.textAlign = "center";
    ctx.textBaseline = 'middle';
    var txt = '  \n            GO FAST';
    var lines = txt.split('\n');
    for (var i = 0; i < lines.length; i++)
        ctx.fillText(lines[i], width/5, height/5 + (i*width/10));
    $('#canvas').css('background-image' ,  'url(https://i.ibb.co/pzHNXKw/Asset-10.png)');

  }

  canvas.addEventListener('mousemove', function (e){
      var x = e.offsetX;
      var y = e.offsetY;
      ctx.globalCompositeOperation = 'destination-out';

      count = 2500,
      radius = 148;
      while (count) {
          var pt_angle = Math.random() * 2 * Math.PI;
          var pt_radius_sq = Math.random() * radius * radius;
          var pt_x = Math.sqrt(pt_radius_sq) * Math.cos(pt_angle);
          var pt_y = Math.sqrt(pt_radius_sq) * Math.sin(pt_angle);
          ctx.fillRect(pt_x + x , pt_y + y , 1, 1);
          count--;
      }

  });

  window.addEventListener('resize', function(event) {
    initImage();
  }, true);

  var scrollDown = $('#scrollDown');

  scrollDown.click(function() {
    scrollToAnchor('#siteTitle');
  });

  function scrollToAnchor(aid){
      $('html,body').animate({scrollTop: $(aid).offset().top},'slow');
  }

} )( jQuery );