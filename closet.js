
<script src="https://www.gstatic.com/firebasejs/5.5.4/firebase.js"></script>
<script>
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCDDyJREURkTMDEMLEpGWQP7uxGID7LeDA",
    authDomain: "collaton-27bf5.firebaseapp.com",
    databaseURL: "https://collaton-27bf5.firebaseio.com",
    projectId: "collaton-27bf5",
    storageBucket: "collaton-27bf5.appspot.com",
    messagingSenderId: "610600623506"
  };
  firebase.initializeApp(config);
</script>

$('#menu').on('mouseenter', () => {
	$('#menu').css('width', '15%').css('opacity','0.7');
})
$('#menu').on('mouseleave', () => {
	$('#menu').css('width', '10%').css('opacity','1');
})
