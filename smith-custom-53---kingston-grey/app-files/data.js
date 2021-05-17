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
        }
      ],
      "faceSize": 875,
      "initialViewParameters": {
        "yaw": -3.049202512162097,
        "pitch": 0.4175335841519505,
        "fov": 1.4210867929104314
      },
      "linkHotspots": [
        {
          "yaw": -3.0596241019849586,
          "pitch": 0.044873016812553956,
          "rotation": 0,
          "target": "1-transom"
        },
        {
          "yaw": 2.571861730060986,
          "pitch": -0.2297837962302367,
          "rotation": 3.141592653589793,
          "target": "3-persp---rear"
        },
        {
          "yaw": 1.0506559387884273,
          "pitch": -0.409383439615592,
          "rotation": 9.42477796076938,
          "target": "2-persp---front"
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
        }
      ],
      "faceSize": 875,
      "initialViewParameters": {
        "yaw": 3.0521409596790807,
        "pitch": 0.09342268200844472,
        "fov": 1.4210867929104314
      },
      "linkHotspots": [
        {
          "yaw": -1.0840666549841504,
          "pitch": -0.4442259440988323,
          "rotation": 3.141592653589793,
          "target": "3-persp---rear"
        },
        {
          "yaw": -2.3895581715522187,
          "pitch": -0.2609592502096483,
          "rotation": 3.141592653589793,
          "target": "2-persp---front"
        },
        {
          "yaw": 3.0224031061694694,
          "pitch": 0.05466864915124603,
          "rotation": 0,
          "target": "0-bow"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-persp---front",
      "name": "Persp - Front",
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
        }
      ],
      "faceSize": 875,
      "initialViewParameters": {
        "yaw": -2.9782613268131026,
        "pitch": 0.5840601376280539,
        "fov": 1.4210867929104314
      },
      "linkHotspots": [
        {
          "yaw": -2.494532684304719,
          "pitch": 0.28303908062452265,
          "rotation": 3.141592653589793,
          "target": "0-bow"
        },
        {
          "yaw": 2.8368268682828077,
          "pitch": 0.13797890958940684,
          "rotation": 3.141592653589793,
          "target": "1-transom"
        },
        {
          "yaw": 2.3097158425647173,
          "pitch": 0.07663526984622493,
          "rotation": 2.356194490192345,
          "target": "3-persp---rear"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-persp---rear",
      "name": "Persp - Rear",
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
        }
      ],
      "faceSize": 875,
      "initialViewParameters": {
        "yaw": 3.0249105541018384,
        "pitch": 0.3391445260489334,
        "fov": 1.4210867929104314
      },
      "linkHotspots": [
        {
          "yaw": -2.942512505298799,
          "pitch": 0.0709093513996617,
          "rotation": 3.141592653589793,
          "target": "0-bow"
        },
        {
          "yaw": -2.3431955119886076,
          "pitch": -0.054973727006037976,
          "rotation": 3.9269908169872414,
          "target": "2-persp---front"
        },
        {
          "yaw": 2.5591134449744715,
          "pitch": 0.21459787596033308,
          "rotation": 3.141592653589793,
          "target": "1-transom"
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
