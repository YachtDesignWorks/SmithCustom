var APP_DATA = {
  "scenes": [
    {
      "id": "0-birdeye---front",
      "name": "Birdeye - Front",
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
        "yaw": 1.5789925831159,
        "pitch": 0.17158675913260346,
        "fov": 1.0718579243699315
      },
      "linkHotspots": [
        {
          "yaw": 1.1446921216787995,
          "pitch": 0.06858037702620834,
          "rotation": 2.356194490192345,
          "target": "2-bow"
        },
        {
          "yaw": 1.9980548001174254,
          "pitch": -0.11315747458787584,
          "rotation": 16.493361431346422,
          "target": "1-birdeye---rear"
        },
        {
          "yaw": 2.074605677809193,
          "pitch": 0.13931245347485977,
          "rotation": 4.71238898038469,
          "target": "4-transom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-birdeye---rear",
      "name": "Birdeye - Rear",
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
        "yaw": 1.5870478053094157,
        "pitch": 0.24272048819847214,
        "fov": 0.9509811312562579
      },
      "linkHotspots": [
        {
          "yaw": 1.9650621082988842,
          "pitch": 0.034686779676002644,
          "rotation": 3.141592653589793,
          "target": "2-bow"
        },
        {
          "yaw": 1.8233901841788258,
          "pitch": -0.1745012528043013,
          "rotation": 3.9269908169872414,
          "target": "2-bow"
        },
        {
          "yaw": 1.1864859065950064,
          "pitch": 0.15236874741569295,
          "rotation": 2.356194490192345,
          "target": "4-transom"
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
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.5755450374876485,
        "pitch": 0.30409042950786436,
        "fov": 1.2480653250783342
      },
      "linkHotspots": [
        {
          "yaw": 3.0948313947225756,
          "pitch": -0.2016145513930283,
          "rotation": 0.7853981633974483,
          "target": "0-birdeye---front"
        },
        {
          "yaw": 0.9872212941696219,
          "pitch": -0.2528914561103548,
          "rotation": 2.356194490192345,
          "target": "1-birdeye---rear"
        },
        {
          "yaw": 1.542570258668725,
          "pitch": -0.3408383573800151,
          "rotation": 3.141592653589793,
          "target": "3-flybridge"
        },
        {
          "yaw": 1.9995263810315107,
          "pitch": 0.1428854410675342,
          "rotation": 4.71238898038469,
          "target": "4-transom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-flybridge",
      "name": "Flybridge",
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
        "yaw": 1.5529071408542725,
        "pitch": 0.6360241759213459,
        "fov": 1.3456704730205973
      },
      "linkHotspots": [
        {
          "yaw": 0.8030233807714335,
          "pitch": -0.11743441803155719,
          "rotation": 2.356194490192345,
          "target": "0-birdeye---front"
        },
        {
          "yaw": 1.5423942338286079,
          "pitch": 0.13765646391540187,
          "rotation": 3.141592653589793,
          "target": "2-bow"
        },
        {
          "yaw": -2.243559586551026,
          "pitch": -0.07612101058627019,
          "rotation": 3.9269908169872414,
          "target": "1-birdeye---rear"
        },
        {
          "yaw": -1.6053520941648038,
          "pitch": 0.4810297555215417,
          "rotation": 3.141592653589793,
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
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.6097470274921069,
        "pitch": 0.1436157031935501,
        "fov": 1.3456704730205973
      },
      "linkHotspots": [
        {
          "yaw": -2.740052335529377,
          "pitch": -0.43933355335168045,
          "rotation": 3.9269908169872414,
          "target": "1-birdeye---rear"
        },
        {
          "yaw": 1.607794738834948,
          "pitch": -0.8377796690063946,
          "rotation": 3.141592653589793,
          "target": "3-flybridge"
        },
        {
          "yaw": 0.6055348660900428,
          "pitch": -0.3906481360255132,
          "rotation": 2.356194490192345,
          "target": "0-birdeye---front"
        },
        {
          "yaw": 1.862831543229822,
          "pitch": 0.10568675413593631,
          "rotation": 0,
          "target": "5-salon---aft"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-salon---aft",
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
        "yaw": 1.490850194917054,
        "pitch": 0.3850172525583524,
        "fov": 1.3456704730205973
      },
      "linkHotspots": [
        {
          "yaw": -1.4094704237941187,
          "pitch": 0.5065147239051626,
          "rotation": 0,
          "target": "4-transom"
        },
        {
          "yaw": 1.5542559724594582,
          "pitch": 0.5679073772826566,
          "rotation": 0,
          "target": "6-salon---fwd"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-salon---fwd",
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
        "yaw": 1.5688110260856778,
        "pitch": 0.4512494218385008,
        "fov": 1.3456704730205973
      },
      "linkHotspots": [
        {
          "yaw": 1.265598145083306,
          "pitch": 0.6129143636230658,
          "rotation": 0,
          "target": "5-salon---aft"
        },
        {
          "yaw": 1.3453719731551441,
          "pitch": 0.20393980711975956,
          "rotation": 0,
          "target": "4-transom"
        },
        {
          "yaw": -0.22594096295843258,
          "pitch": 1.0283145604160815,
          "rotation": 0,
          "target": "7-hall---stb"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-hall---stb",
      "name": "Hall - STB",
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
        "yaw": 2.138102276189583,
        "pitch": 0.3560200746591633,
        "fov": 1.3456704730205973
      },
      "linkHotspots": [
        {
          "yaw": 1.8465637816984888,
          "pitch": 0.34113655049769775,
          "rotation": 0,
          "target": "6-salon---fwd"
        },
        {
          "yaw": -3.1159454209418804,
          "pitch": 0.5887060294286677,
          "rotation": 0,
          "target": "9-master-berth"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-hall---port",
      "name": "Hall - Port",
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
        "yaw": -0.5934377996371616,
        "pitch": 0.44001885557227993,
        "fov": 1.3456704730205973
      },
      "linkHotspots": [
        {
          "yaw": -0.2419923900307417,
          "pitch": 0.4568655920078548,
          "rotation": 0,
          "target": "6-salon---fwd"
        },
        {
          "yaw": -0.259528393072495,
          "pitch": 0.23638366246009923,
          "rotation": 0,
          "target": "7-hall---stb"
        },
        {
          "yaw": -1.7203715662963237,
          "pitch": 0.5963311189939109,
          "rotation": 0,
          "target": "10-portside-berth"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-master-berth",
      "name": "Master Berth",
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
        "yaw": 0.8273803439868459,
        "pitch": 0.2846485895793158,
        "fov": 1.3456704730205973
      },
      "linkHotspots": [
        {
          "yaw": -1.8138720274108096,
          "pitch": 0.8835823130183762,
          "rotation": 0,
          "target": "7-hall---stb"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-portside-berth",
      "name": "Portside Berth",
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
        "yaw": 1.2826184658803381,
        "pitch": 0.32006926315354534,
        "fov": 1.3456704730205973
      },
      "linkHotspots": [
        {
          "yaw": -0.7064767840850195,
          "pitch": 0.624239729303774,
          "rotation": 5.497787143782138,
          "target": "8-hall---port"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Smith Custom 53 - Fish & Cruise",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
