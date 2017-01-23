$(document).ready(function() {
  var sampleImageData = [
    {
      url: 'https://rentini.files.wordpress.com/2013/05/mountaint-retreat-escape-from-it-all_04182012.jpg',
      title: 'Mountains',
      rating: 5
    },  
    {
      url: 'http://static.boredpanda.com/blog/wp-content/uploads/2015/04/square-round-dog-haircut-taiwan-2.jpg',
      title: 'Square Dog Haircut',
      rating: 2
    },  
    {
      url: 'https://www.askideas.com/media/13/Funny-Face-Of-Man-Photoshop-Picture-For-Whatsapp.jpg',
      title: 'Someone\'s Face',
      rating: 5
    },  
    {
      url: 'https://metrouk2.files.wordpress.com/2015/12/ad_191600615-e1451043677765.jpg?quality=80&strip=all',
      title: 'Polar Bear',
      rating: 4
    }
  ];

  var $imageLibrary = $('table tbody');

  var $img = $('#photoView img');
  var $imgTitle = $('#imgTitle');
  var $imgRating = $('#imgRating');
  var $ratingSelect = $('#ratingSelect');

  sampleImageData.forEach(function(item) {
    console.log(item.title);
    $imageLibrary.append('<tr><td>' + item.title + '</td></tr>');
  });



  var onImageLibraryEntryClick = function() {
    var title = $(this).text();
    var imageLibraryEntryClicked = sampleImageData.filter(function(item) {
      return item.title === title;
    });

    $img.attr('src', imageLibraryEntryClicked[0].url);
    $imgTitle.text(imageLibraryEntryClicked[0].title);
    $imgRating.text(imageLibraryEntryClicked[0].rating);
  };

  var onRatingSelectSubmit = function () {
    var sampleDataIndex;
    var newRating = $ratingSelect.val();
    
    $imgRating.text(newRating);

    sampleImageData.forEach(function(item, index) {
      if (item.title === $imgTitle.text()) {
        sampleDataIndex = index;
      }
    });
    
    sampleImageData[sampleDataIndex].rating = newRating;
    console.log(sampleImageData);   
  };


  $imageLibrary.on('click', 'tr', onImageLibraryEntryClick);
  $ratingSelect.on('change', onRatingSelectSubmit);



});