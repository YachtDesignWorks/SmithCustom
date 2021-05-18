var APP_DATA = {
  "scenes": [
    {
      "id": "0-bow",
      "name": "Bow",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1750,
      "initialViewParameters": {
        "yaw": -3.029300204392511,
        "pitch": 0.5128202447807446,
        "fov": 1.4236357722889479
      },
      "linkHotspots": [
        {
          "yaw": 2.5801525005903496,
          "pitch": -0.1602877688060449,
          "rotation": 8.63937979737193,
          "target": "2-rear-perspective"
        },
        {
          "yaw": -3.0715697061429506,
          "pitch": -0.22078244056276475,
          "rotation": 3.141592653589793,
          "target": "1-transom"
        },
        {
          "yaw": 0.92886132692092,
          "pitch": -0.30511075090613815,
          "rotation": 8.63937979737193,
          "target": "3-front-perspective"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-transom",
      "name": "Transom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1750,
      "initialViewParameters": {
        "yaw": 3.03691269835498,
        "pitch": 0.06646275897381138,
        "fov": 1.4236357722889479
      },
      "linkHotspots": [
        {
          "yaw": -1.3996278966447697,
          "pitch": 0.12567839491405053,
          "rotation": 3.9269908169872414,
          "target": "2-rear-perspective"
        },
        {
          "yaw": 3.0214558145783554,
          "pitch": 0.0978954017436493,
          "rotation": 0,
          "target": "0-bow"
        },
        {
          "yaw": -2.5405111469774617,
          "pitch": -0.23710370880644938,
          "rotation": 3.9269908169872414,
          "target": "3-front-perspective"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-rear-perspective",
      "name": "Rear Perspective",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1750,
      "initialViewParameters": {
        "yaw": 2.8482738293893917,
        "pitch": 0.2797275849440535,
        "fov": 1.4236357722889479
      },
      "linkHotspots": [
        {
          "yaw": 2.582072391159559,
          "pitch": 0.24237959525154906,
          "rotation": 3.141592653589793,
          "target": "1-transom"
        },
        {
          "yaw": -2.924992949759039,
          "pitch": 0.06725757093920137,
          "rotation": 3.141592653589793,
          "target": "0-bow"
        },
        {
          "yaw": -2.365672553831457,
          "pitch": 0.12787430397820998,
          "rotation": 4.71238898038469,
          "target": "3-front-perspective"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-front-perspective",
      "name": "Front Perspective",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1750,
      "initialViewParameters": {
        "yaw": -2.837037528295671,
        "pitch": 0.17132185371905884,
        "fov": 1.4236357722889479
      },
      "linkHotspots": [
        {
          "yaw": -2.4643812580284923,
          "pitch": 0.01998280837533173,
          "rotation": 3.141592653589793,
          "target": "0-bow"
        },
        {
          "yaw": 2.830952519470876,
          "pitch": 0.04170580410837488,
          "rotation": 3.141592653589793,
          "target": "1-transom"
        },
        {
          "yaw": 2.2193904784775,
          "pitch": 0.17188455481426246,
          "rotation": 7.853981633974483,
          "target": "2-rear-perspective"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Smith Custom 53 - Kingston Grey",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
