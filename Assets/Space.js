var PlanetRotateSpeed : float = -25.0;
var OrbitSpeed : float = 10.0;
 
function Update() {
    // planet to spin on it's own axis
    transform.Rotate(transform.up * PlanetRotateSpeed * Time.deltaTime);
 
    // planet to travel along a path that rotates around the sun
    transform.RotateAround (Vector3.zero, Vector3.up, OrbitSpeed * Time.deltaTime);
}