using UnityEngine;
using System.Collections;

public class Spin : MonoBehaviour {

	// Use this for initialization
	void Start () {
		StartCoroutine(Example());
	}
	
	// Update is called once per frame
	void Update () {
		transform.Translate(Vector3.forward * 2 * Time.deltaTime);
	}

	IEnumerator Example() {
		yield return new WaitForSeconds(5);
	}
}
