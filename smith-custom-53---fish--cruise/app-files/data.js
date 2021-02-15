var APP_DATA = {
  "scenes": [
    {
      "id": "0-salon---aft",
      "name": "Salon - Aft",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.7573878904626596,
        "pitch": 0.3349882859831972,
        "fov": 1.4256478217424775
      },
      "linkHotspots": [
        {
          "yaw": 1.554685663858507,
          "pitch": 0.5605513045592936,
          "rotation": 3.141592653589793,
          "target": "1-salon---fwd"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-salon---fwd",
      "name": "Salon - Fwd",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.57175712840702,
        "pitch": 0.5258537047410794,
        "fov": 1.4256478217424775
      },
      "linkHotspots": [
        {
          "yaw": 1.2472453206732457,
          "pitch": 0.5826702479476094,
          "rotation": 3.141592653589793,
          "target": "0-salon---aft"
        },
        {
          "yaw": -0.837449611041885,
          "pitch": 1.0581692352037049,
          "rotation": 0.7853981633974483,
          "target": "2-stb---hall"
        },
        {
          "yaw": -2.4260448534669585,
          "pitch": 1.0482100321998207,
          "rotation": 4.71238898038469,
          "target": "5-port---hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-stb---hall",
      "name": "STB - Hall",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.790413270151551,
        "pitch": 0.2688961722111678,
        "fov": 1.4256478217424775
      },
      "linkHotspots": [
        {
          "yaw": 1.7289755359639054,
          "pitch": 0.5977121537312104,
          "rotation": 0,
          "target": "4-stb---fwd-berth"
        },
        {
          "yaw": 1.500379779260948,
          "pitch": 0.26280075403542824,
          "rotation": 4.71238898038469,
          "target": "3-stb---head"
        },
        {
          "yaw": 0.0500365523471622,
          "pitch": 0.39446679510021454,
          "rotation": 4.71238898038469,
          "target": "1-salon---fwd"
        },
        {
          "yaw": 0.14758132464331375,
          "pitch": 0.256241433430322,
          "rotation": 0,
          "target": "5-port---hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-stb---head",
      "name": "STB - Head",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.1906256488919826,
          "pitch": 0.33701018319112563,
          "rotation": 1.5707963267948966,
          "target": "2-stb---hall"
        },
        {
          "yaw": -2.3506368648724703,
          "pitch": 0.47437779152356363,
          "rotation": 4.71238898038469,
          "target": "4-stb---fwd-berth"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-stb---fwd-berth",
      "name": "STB - Fwd Berth",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.535806203465329,
        "pitch": 0.3413465051754301,
        "fov": 1.4256478217424775
      },
      "linkHotspots": [
        {
          "yaw": -1.0698376418322244,
          "pitch": 0.620046862324326,
          "rotation": 0,
          "target": "2-stb---hall"
        },
        {
          "yaw": -0.7385456966648416,
          "pitch": 0.32774078940671103,
          "rotation": 1.5707963267948966,
          "target": "3-stb---head"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-port---hall",
      "name": "Port - Hall",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.010885269245378026,
          "pitch": 0.5799505155677736,
          "rotation": 0,
          "target": "7-port---fwd-berth"
        },
        {
          "yaw": 0.09904488396744604,
          "pitch": 0.19547567533217247,
          "rotation": 1.5707963267948966,
          "target": "6-port---head"
        },
        {
          "yaw": 1.5994006339301352,
          "pitch": 0.42876616441070503,
          "rotation": 7.853981633974483,
          "target": "1-salon---fwd"
        },
        {
          "yaw": 1.5993935004617317,
          "pitch": 0.2555311527537292,
          "rotation": 0,
          "target": "2-stb---hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-port---head",
      "name": "Port - Head",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.0429560210530475,
        "pitch": 0.6889287866735803,
        "fov": 1.3731268825307628
      },
      "linkHotspots": [
        {
          "yaw": -1.3076418899339508,
          "pitch": 0.47797408050416124,
          "rotation": 1.5707963267948966,
          "target": "7-port---fwd-berth"
        },
        {
          "yaw": -2.3224298816395272,
          "pitch": 0.452908951216628,
          "rotation": 10.995574287564278,
          "target": "5-port---hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-port---fwd-berth",
      "name": "Port - Fwd Berth",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.864339462671568,
        "pitch": 0.4825615983635103,
        "fov": 1.4256478217424775
      },
      "linkHotspots": [
        {
          "yaw": -1.9883762682135693,
          "pitch": 0.6602792361897443,
          "rotation": 0,
          "target": "5-port---hall"
        },
        {
          "yaw": -2.183341781926103,
          "pitch": 0.39352720552845,
          "rotation": 4.71238898038469,
          "target": "6-port---head"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Smith Custom 53 - Salt Cracker",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
