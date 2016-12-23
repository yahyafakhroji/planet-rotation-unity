var MoonRotateSpeed : float = -15.0;
var OrbitSpeed : float = 50.0;

function Update() {
//	Transform target = transform.parent;

	// planet to travel along a path that rotates around the sun
	transform.Rotate(transform.right * OrbitSpeed * 10);
//	transform.RotateAround(transform.right, Vector3.up, 10);
}