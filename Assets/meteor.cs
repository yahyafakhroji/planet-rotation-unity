using UnityEngine;
using System.Collections;

public class meteor : MonoBehaviour {

	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
		float z = Input.GetAxis("Horizontal") * 15.0f; // might be negative, just test it
		Vector3 euler = transform.localEulerAngles;
		euler.z = Mathf.Lerp(euler.z, z, 2.0f * Time.deltaTime);
		transform.localEulerAngles = euler;
	}
}
