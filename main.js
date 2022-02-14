var images = ["download (2).jpg", "download (1).jpg" , "download.jpg", "download (3).jpg", "images.jpg"];
var names = ["sukumar phade", "suraj phade", "vivaan phade", "anju phade", "swarali phade"];
var i = 0;
function update()
{
    
    var numbers_of_family_member_in_array = 5
    if(i >= numbers_of_family_member_in_array)
      {
        i=0;
       

      }
      var updatedImage = images[i]; 
      var updatedName = names[i] ;
    
  
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
    i++;
}
