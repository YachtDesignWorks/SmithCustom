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
        "yaw": -2.770046883015569,
        "pitch": 0.23596886365555036,
        "fov": 1.4236357722889479
      },
      "linkHotspots": [
        {
          "yaw": -2.460040306425464,
          "pitch": 0.03687196348053767,
          "rotation": 3.141592653589793,
          "target": "2-bow"
        },
        {
          "yaw": -2.994650802006195,
          "pitch": -0.07612166672179299,
          "rotation": 3.141592653589793,
          "target": "3-cockpit"
        },
        {
          "yaw": 2.8213557450491304,
          "pitch": 0.027919245798530667,
          "rotation": 3.141592653589793,
          "target": "4-transom"
        },
        {
          "yaw": 2.233056737807347,
          "pitch": 0.16474213793285486,
          "rotation": 7.853981633974483,
          "target": "1-rear-perspective"
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
        "yaw": -2.866688351599791,
        "pitch": 0.3028850970733181,
        "fov": 1.4236357722889479
      },
      "linkHotspots": [
        {
          "yaw": 2.9414057572404673,
          "pitch": 0.15576809762092658,
          "rotation": 3.141592653589793,
          "target": "4-transom"
        },
        {
          "yaw": -2.8982255298996797,
          "pitch": -0.024616018373365023,
          "rotation": 3.141592653589793,
          "target": "3-cockpit"
        },
        {
          "yaw": -2.5977597787432885,
          "pitch": 0.013051141152747192,
          "rotation": 3.141592653589793,
          "target": "2-bow"
        },
        {
          "yaw": -2.140491291778318,
          "pitch": 0.11036200408579688,
          "rotation": 4.71238898038469,
          "target": "0-front-perspective"
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
        "yaw": -3.0629918117517434,
        "pitch": 0.41324913432185184,
        "fov": 1.4236357722889479
      },
      "linkHotspots": [
        {
          "yaw": -2.6954832060617733,
          "pitch": 0.11628708534428256,
          "rotation": 18.06415775814132,
          "target": "4-transom"
        },
        {
          "yaw": -3.1336124618111683,
          "pitch": -0.19490057116490078,
          "rotation": 3.141592653589793,
          "target": "3-cockpit"
        },
        {
          "yaw": 2.64273021375206,
          "pitch": 0.09090505979880703,
          "rotation": 8.63937979737193,
          "target": "1-rear-perspective"
        },
        {
          "yaw": 1.113258042560421,
          "pitch": -0.19548359390943482,
          "rotation": 2.356194490192345,
          "target": "0-front-perspective"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-cockpit",
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
        "yaw": 0.06577596873764513,
        "pitch": 0.43058218528514836,
        "fov": 1.4236357722889479
      },
      "linkHotspots": [
        {
          "yaw": 0.09332863427071558,
          "pitch": -0.057130017177982495,
          "rotation": 0,
          "target": "2-bow"
        },
        {
          "yaw": 3.1303663857316906,
          "pitch": 0.15738571863156992,
          "rotation": 0,
          "target": "4-transom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-transom",
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
        "yaw": -0.0293775381927599,
        "pitch": 0.6200166980002031,
        "fov": 1.4236357722889479
      },
      "linkHotspots": [
        {
          "yaw": 3.1102017855489965,
          "pitch": 0.20995842562984102,
          "rotation": 0,
          "target": "3-cockpit"
        },
        {
          "yaw": -2.3879767399009726,
          "pitch": 0.20870893882205976,
          "rotation": 5.497787143782138,
          "target": "2-bow"
        },
        {
          "yaw": -1.2869677467039669,
          "pitch": 0.09312154139921702,
          "rotation": 3.9269908169872414,
          "target": "1-rear-perspective"
        },
        {
          "yaw": -2.1414342483609623,
          "pitch": -0.25436539789796875,
          "rotation": 3.9269908169872414,
          "target": "0-front-perspective"
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
