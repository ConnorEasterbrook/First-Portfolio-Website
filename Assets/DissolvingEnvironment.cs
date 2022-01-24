using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class DissolvingEnvironment : MonoBehaviour
{
    public GameObject parentObject; // The parent object of environment objects. Used to get the environment
    private List <GameObject> nearbyEnvironment = new List<GameObject>(); // List that contains all environment objects. Used to simply track those closest to the player
    private Vector3 initialScale; // Required for distance size change calculation. Registers the inital localScale
    private float scaleMultiplier = 2.5f; // Used in the distance size change calculation.

    // Start is called before the first frame update
    void Start()
    {
        // For each environment object within the parent object
        foreach (Transform children in parentObject.transform)
        {
            if (children.tag == "Floor")
            {
                initialScale = children.transform.localScale; // Take a note of the set localScale of the environment tiles
                nearbyEnvironment.Add (children.gameObject); // Add environment objects to the list
            }
        }
    }

    // Update is called once per frame
    void Update()
    {
        for (int i = 0; i < nearbyEnvironment.Count; i++)
        {
            // Establish the transform of the current environment object in the list
            Transform currentEnvironmentObject = nearbyEnvironment [i].transform;

            // Calculate the distance of Player from environment objects
            float distanceFromEnvironment = Vector3.Distance (transform.position, currentEnvironmentObject.position);
            
            // Decide what happens based on the distance from the environment object
            if (distanceFromEnvironment <= 2f)
            {
                currentEnvironmentObject.localScale = initialScale; // Set default localScale
                currentEnvironmentObject.localPosition = new Vector3 (currentEnvironmentObject.localPosition.x, 0.0f, currentEnvironmentObject.localPosition.z); // Set default localPosition
            }
            else if (distanceFromEnvironment <= 12.5f)
            {
                currentEnvironmentObject.localScale = initialScale / distanceFromEnvironment * scaleMultiplier; // Set scale to vary based on distance. Below sets the height based on distance
                currentEnvironmentObject.localPosition = new Vector3 (currentEnvironmentObject.localPosition.x, distanceFromEnvironment / 6.0f, currentEnvironmentObject.localPosition.z);
            }
            else
            {
                currentEnvironmentObject.transform.localScale = new Vector3 (0.0f, 0.0f, 0.0f); // Set scale to vary based on distance. Below sets the height based on distance
                currentEnvironmentObject.localPosition = new Vector3 (currentEnvironmentObject.localPosition.x, distanceFromEnvironment / 6.0f, currentEnvironmentObject.localPosition.z);
            }
        }
    }

    // On exiting test runs or end of game
    private void OnDisable()
    {
        nearbyEnvironment.Clear();
    }
}
