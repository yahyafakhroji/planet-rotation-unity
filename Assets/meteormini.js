#pragma strict

var speed = 1.0;
var smooth = 2.0;
var tiltAngle = 30.0;
var ySpeed = -5.0;
private var yRotation = 0;
 
 function Update () {
      transform.Translate(Vector3.forward * Time.deltaTime * speed);
      
      var tiltAroundZ = Input.GetAxis("Horizontal") * tiltAngle;
      var tiltAroundX = Input.GetAxis("Vertical") * tiltAngle;
      yRotation += Input.GetAxis("Horizontal") * ySpeed;
      var target = Quaternion.Euler (tiltAroundX, yRotation, tiltAroundZ);
      
      transform.rotation = Quaternion.Slerp(transform.rotation, target, Time.deltaTime * smooth);
 }