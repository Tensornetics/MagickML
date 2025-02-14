export default
{
    "class": "event",
    "description": "A Event for storing the and recalling at a later point of time",
    "invertedIndexConfig": {
        "indexTimestamps": true
    },
    "vectorizer": "text2vec-contextionary",   // vectorizer to use for data objects added to this class
    "moduleConfig": {
      "text2vec-contextionary": {  
        "vectorizeClassName": true            // include the class name in vector calculation (default true)
      }
    },
    "properties": [
      {
        "dataType": [
          "string"
        ],
        "description": "Type of the event",
        "name": "type"
      },
      {
        "dataType": [
          "string"
        ],
        "description": "Describes the data found in the event.",
        "name": "content"
      },
      {
        "dataType": [
          "string"
        ],
        "description": "The name of the sender of the event.",
        "name": "sender"
      },
      {
        "dataType": [
          "string[]"
        ],
        "description": "The entities which are related to the client.",
        "name": "entities"
      },
      {
        "dataType": [
          "string"
        ],
        "description": "Name of the client from which event was created.",
        "name": "client"
      },
      {
        "dataType": [
          "string"
        ],
        "description": "Name of the channel through which event was created.",
        "name": "channel"
      },
      {
        "dataType": [
          "string"
        ],
        "description": "Type of the channel through which event was created.",
        "name": "channelType"
      },
      {
        "dataType": [
          "int"
        ],
        "description": "The ID of the agent.",
        "name": "agentId"
      },{
        "dataType": [
          "string"
        ],
        "description": "The date at which the event was created",
        "name": "date"
      },{
        "dataType": [
          "string"
        ],
        "description" : "The Observer",
        "name": "observer"
      }

    ],
    "vectorIndexType": "hnsw",
    "vectorIndexConfig": { 
          "skip": false,
          "cleanupIntervalSeconds": 300,
          "maxConnections": 64,
          "efConstruction": 128,
          "ef": -1,
          "dynamicEfMin": 100,
          "dynamicEfMax": 500,
          "dynamicEfFactor": 8,
          "vectorCacheMaxObjects": 2000000,
          "flatSearchCutoff": 40000,
          "distance": "cosine"
      }
}