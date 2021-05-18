var APP_DATA = {
  "scenes": [
    {
      "id": "0-front-perspective",
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
          "target": "2-bow"
        },
        {
          "yaw": 2.830952519470876,
          "pitch": 0.04170580410837488,
          "rotation": 3.141592653589793,
          "target": "3-transom"
        },
        {
          "yaw": 2.2193904784775,
          "pitch": 0.17188455481426246,
          "rotation": 7.853981633974483,
          "target": "1-rear-perspective"
        },
        {
          "yaw": -2.995293422119385,
          "pitch": -0.08183499121863491,
          "rotation": 3.141592653589793,
          "target": "4-cockpit"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-rear-perspective",
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
          "target": "3-transom"
        },
        {
          "yaw": -2.924992949759039,
          "pitch": 0.06725757093920137,
          "rotation": 3.141592653589793,
          "target": "2-bow"
        },
        {
          "yaw": -2.365672553831457,
          "pitch": 0.12787430397820998,
          "rotation": 4.71238898038469,
          "target": "0-front-perspective"
        },
        {
          "yaw": 3.007534113370757,
          "pitch": 0.058353875208606354,
          "rotation": 3.141592653589793,
          "target": "4-cockpit"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-bow",
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
          "target": "1-rear-perspective"
        },
        {
          "yaw": -3.0715697061429506,
          "pitch": -0.22078244056276475,
          "rotation": 3.141592653589793,
          "target": "3-transom"
        },
        {
          "yaw": 1.1600278959233936,
          "pitch": -0.28521742017619545,
          "rotation": 8.63937979737193,
          "target": "0-front-perspective"
        },
        {
          "yaw": -3.0648825461374187,
          "pitch": 0.212332436305676,
          "rotation": 0,
          "target": "4-cockpit"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-transom",
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
        "yaw": -0.08385280876759893,
        "pitch": 0.49005485271915106,
        "fov": 1.3487598040662003
      },
      "linkHotspots": [
        {
          "yaw": -1.1800580143017676,
          "pitch": -0.39138767182444134,
          "rotation": 3.141592653589793,
          "target": "1-rear-perspective"
        },
        {
          "yaw": 2.9679999878583363,
          "pitch": 0.1701193759577304,
          "rotation": 0,
          "target": "4-cockpit"
        },
        {
          "yaw": -1.7515519626789882,
          "pitch": 0.18793011291310258,
          "rotation": 4.71238898038469,
          "target": "2-bow"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-cockpit",
      "name": "Cockpit",
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
        "yaw": 0.08095223505836735,
        "pitch": 0.4338183538867515,
        "fov": 1.3487598040662003
      },
      "linkHotspots": [
        {
          "yaw": -3.121349850402158,
          "pitch": 0.18078963487867483,
          "rotation": 0,
          "target": "3-transom"
        },
        {
          "yaw": 0.06825774798755546,
          "pitch": -0.019951187173649743,
          "rotation": 0,
          "target": "2-bow"
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
