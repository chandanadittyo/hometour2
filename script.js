var panorama, viewer, container,panorama2,scene;
lon = 0, onMouseDownLon = 0,
lat = 0, onMouseDownLat = 0,
phi = 0, theta = 0;
var id;
var isUserInteracting = false;
var stoprotate=false;  
let DefaultID;
container = document.querySelector( '#container' );

scene = new THREE.Scene();

panorama = new PANOLENS.ImagePanorama( 'static_assets/360_front_door.jpg' );
panorama.position.set(-100,10,10);
viewer = new PANOLENS.Viewer( { container: container,

 } );
animate();
viewer.add( panorama );
console.log('initial state');

document.addEventListener( 'mousedown', onDocumentMouseDown, false );
document.addEventListener( 'mousemove', onDocumentMouseMove, false );
document.addEventListener( 'mouseup', onDocumentMouseUp, false );

function onDocumentMouseDown( event ) {
     
    
    document.getElementById('container').style.cursor ='grabbing';
    

}


function onDocumentMouseUp( event ) {
    

    document.getElementById('container').style.cursor ='grab';

}

function onDocumentMouseMove( event ) {
    
    // if ( isUserInteracting === true ) {
        

    //     lon = ( onPointerDownPointerX - event.clientX ) * 0.1 + onPointerDownLon;
    //     lat = ( event.clientY - onPointerDownPointerY ) * 0.1 + onPointerDownLat;
    //     console.log("data checked");

    // }
}


function autoRotate(){
    var stoprotate=false;    
    $('#container').click(function(){ 
    stoprotate=true;
    });  
    viewer.addUpdateCallback(function() {      
    if(!stoprotate){
      lon +=0.001
      lat = Math.max( -85, Math.min( 85, lat ) );
      phi = THREE.Math.degToRad( -90 - lat );
      theta = THREE.Math.degToRad( lon );
    viewer.scene.rotation.y = lon 
  
    //console.log(viewer.scene.rotation.y += 0.001 );
    }        
    });
    }

infospot = new PANOLENS.Infospot( 
    200, 
    PANOLENS.DataImage.Info
  );

  infospot.position.set( 2000, 200, -2000 );
  panorama.add(infospot)

  infospot.addEventListener( "click", function(){
    $("#exampleModalLong").modal()
    document.querySelector('.modal-body').innerHTML=house.front_door.info
  } );
  
  function showPopup(){
    infospot.addEventListener( "click", function(){
        $("#exampleModalLong").modal()
        document.querySelector('.modal-body').innerHTML=DefaultID.info
        
      } );
  }
   
  var test= infospot.addEventListener( 'hover', function( event ){

   

  } );

var button = document.getElementById("audioIcon");
var audio = document.getElementById("player");

button.addEventListener("click", function(){
  if(audio.paused){
    audio.play();
    
  } else {
    audio.pause();
  }
});



  function changeImg() {
    var image = document.getElementById('audioIcon');
    
    if (image.src.match("img/icon/on.png")) {
        
        image.src = "img/icon/off.png";
        
    }
    else {
        image.src = "img/icon/on.png";
        
    }
    
}
  function nextMenu(){
    const nextDivValue = document.getElementById('next_text');
    let receiveText =  nextDivValue.innerText
    let reoveSpace = receiveText.replace(/\s/g, '_');
    let lowerCase = reoveSpace.toLowerCase()
    let pagebutton= document.getElementById(lowerCase);
    pagebutton.click();
    
    
}
function animate() {

    id= requestAnimationFrame( autoRotate );
  
      
  
  }
 function changeScene(){
    
     var houseData= Object.getOwnPropertyNames(house);
    
    if( houseData.includes(event.target.id,[ houseData])){
        if(scene.children >= 0){ 
            console.log('check1');
            scene.remove(scene.children[0]);
            cancelAnimationFrame(id)
            animate()
            console.log('animation deleted');
        }
        
        viewer.remove(panorama)
        DefaultID = house[`${ event.target.id}`]
        
        document.getElementById('next_text').innerHTML = DefaultID.adjacentRooms;
        panorama = new PANOLENS.ImagePanorama( DefaultID.img );
        panorama.position.set(-100,10,10);
        infospot = new PANOLENS.Infospot( 
            200, 
            PANOLENS.DataImage.Info
          );
          var positionValue=  (DefaultID.position) 
          infospot.position.set(positionValue[0],positionValue[1],positionValue[2]);
          //console.log(positionValue[0],positionValue[1],positionValue[2]);
          panorama.add(infospot)
        viewer.add(panorama);
        

        viewer.setPanorama(panorama);
        showPopup();
        console.log(scene.children.length);
        
             

    

    }
    

}

