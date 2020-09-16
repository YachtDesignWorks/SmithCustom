var APP_DATA = {
  "scenes": [
    {
      "id": "0-profile",
      "name": "Profile",
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
        "yaw": 1.5817276113192964,
        "pitch": 0.025453690382729377,
        "fov": 1.987716690572723
      },
      "linkHotspots": [
        {
          "yaw": 2.29881963269641,
          "pitch": 0.019186703595561738,
          "rotation": 4.71238898038469,
          "target": "1-front--view"
        },
        {
          "yaw": 1.9988724833659823,
          "pitch": -0.09573580985281716,
          "rotation": 3.9269908169872414,
          "target": "2-bow"
        },
        {
          "yaw": 1.4813854870718224,
          "pitch": -0.30235992778303,
          "rotation": 3.141592653589793,
          "target": "3-fly-bridge"
        },
        {
          "yaw": 1.2199439864177783,
          "pitch": -0.06914296286369037,
          "rotation": 2.356194490192345,
          "target": "6-transom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-front--view",
      "name": "Front -view",
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
        "yaw": 1.5591640940466966,
        "pitch": 0.010817625442541612,
        "fov": 1.087074422015193
      },
      "linkHotspots": [
        {
          "yaw": 1.735198181203038,
          "pitch": -0.06301887571559206,
          "rotation": 3.9269908169872414,
          "target": "2-bow"
        },
        {
          "yaw": 1.5800366796570442,
          "pitch": -0.32450116365138726,
          "rotation": 0,
          "target": "3-fly-bridge"
        },
        {
          "yaw": 0.7562218398705056,
          "pitch": 0.060748558692552024,
          "rotation": 0,
          "target": "0-profile"
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
        "yaw": 1.5717763548361763,
        "pitch": 0.22075588775489763,
        "fov": 1.7012753757933687
      },
      "linkHotspots": [
        {
          "yaw": 1.5751742365400618,
          "pitch": -0.5243976634873349,
          "rotation": 3.141592653589793,
          "target": "3-fly-bridge"
        },
        {
          "yaw": 0.6205888884830468,
          "pitch": 0.06402385164097346,
          "rotation": 8.63937979737193,
          "target": "0-profile"
        },
        {
          "yaw": -1.5613692142376845,
          "pitch": 0.0521230931957497,
          "rotation": 3.141592653589793,
          "target": "1-front--view"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-fly-bridge",
      "name": "Fly bridge",
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
        "yaw": 1.5730338597559879,
        "pitch": 0.7430686617178779,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.5700893013440052,
          "pitch": 0.6152797546479452,
          "rotation": 0,
          "target": "2-bow"
        },
        {
          "yaw": 1.563034516165236,
          "pitch": 0.10824536939786711,
          "rotation": 0,
          "target": "1-front--view"
        },
        {
          "yaw": -1.5712291791844706,
          "pitch": 0.820324105173885,
          "rotation": 3.141592653589793,
          "target": "6-transom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-pilot-house",
      "name": "Pilot House",
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
        "yaw": 1.566523030898722,
        "pitch": 0.3591607346771042,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.546398838806141,
          "pitch": 0.31294638313593026,
          "rotation": 0,
          "target": "5-helm"
        },
        {
          "yaw": 1.1115021724707663,
          "pitch": 0.2717071255217025,
          "rotation": 0.7853981633974483,
          "target": "7-interior---barebones_portside"
        },
        {
          "yaw": 2.015883434617029,
          "pitch": 0.2724670692531035,
          "rotation": 5.497787143782138,
          "target": "8-interior---barebones_stbside"
        },
        {
          "yaw": -1.5533582770449268,
          "pitch": 0.1869344970554856,
          "rotation": 3.141592653589793,
          "target": "6-transom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-helm",
      "name": "Helm",
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
        "yaw": 0.6991001911425965,
        "pitch": 0.4527439916645477,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.4352920474209494,
          "pitch": 0.10118572721124153,
          "rotation": 0,
          "target": "6-transom"
        },
        {
          "yaw": -0.32795117127003337,
          "pitch": 0.5178430004761516,
          "rotation": 2.356194490192345,
          "target": "7-interior---barebones_portside"
        },
        {
          "yaw": 1.6083850412472414,
          "pitch": 0.4918352552343581,
          "rotation": 3.9269908169872414,
          "target": "8-interior---barebones_stbside"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-transom",
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
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.579666942154212,
          "pitch": -1.048199035651141,
          "rotation": 3.141592653589793,
          "target": "3-fly-bridge"
        },
        {
          "yaw": 2.688810345810216,
          "pitch": 0.0655144893738342,
          "rotation": 3.141592653589793,
          "target": "0-profile"
        },
        {
          "yaw": 1.5660565409475309,
          "pitch": 0.2573856301898694,
          "rotation": 3.141592653589793,
          "target": "4-pilot-house"
        },
        {
          "yaw": 0.9306450066452996,
          "pitch": 0.012975261027690976,
          "rotation": 14.137166941154074,
          "target": "2-bow"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-interior---barebones_portside",
      "name": "Interior - Barebones_Portside",
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
        "yaw": 0.705845361440895,
        "pitch": 0.6799456351233832,
        "fov": 1.6698873496582358
      },
      "linkHotspots": [
        {
          "yaw": -2.9490420426730957,
          "pitch": -0.2558436648448019,
          "rotation": 0,
          "target": "4-pilot-house"
        },
        {
          "yaw": 2.197115032618302,
          "pitch": 0.010772559099873291,
          "rotation": 4.71238898038469,
          "target": "9-interior---salty_portside"
        },
        {
          "yaw": 2.191157859220141,
          "pitch": 0.2330449931360956,
          "rotation": 10.995574287564278,
          "target": "11-interior---arcylic_portside"
        },
        {
          "yaw": 2.1806532529384848,
          "pitch": 0.43894418122292933,
          "rotation": 4.71238898038469,
          "target": "13-interior---cabinetry_portside"
        },
        {
          "yaw": 1.287163058268824,
          "pitch": 0.26835854461778474,
          "rotation": 3.141592653589793,
          "target": "8-interior---barebones_stbside"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-interior---barebones_stbside",
      "name": "Interior - Barebones_STBside",
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
        "yaw": 2.4041738214251893,
        "pitch": 0.5136343518238764,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.9225489432027372,
          "pitch": 0.23889924095212578,
          "rotation": 3.141592653589793,
          "target": "7-interior---barebones_portside"
        },
        {
          "yaw": 0.4214503993941996,
          "pitch": -0.12252418508608898,
          "rotation": 0,
          "target": "4-pilot-house"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-interior---salty_portside",
      "name": "Interior - Salty_Portside",
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
        "yaw": 0.8021832594857781,
        "pitch": 0.458430407812239,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.33517504437655,
          "pitch": -0.2290124858585596,
          "rotation": 4.71238898038469,
          "target": "7-interior---barebones_portside"
        },
        {
          "yaw": 2.3415357679393356,
          "pitch": 0.2518668028683848,
          "rotation": 4.71238898038469,
          "target": "11-interior---arcylic_portside"
        },
        {
          "yaw": 2.3322121288568187,
          "pitch": 0.4619394134417938,
          "rotation": 4.71238898038469,
          "target": "13-interior---cabinetry_portside"
        },
        {
          "yaw": -2.844684319409673,
          "pitch": -0.23820895408405818,
          "rotation": 0,
          "target": "4-pilot-house"
        },
        {
          "yaw": 1.4006284416366235,
          "pitch": 0.2761962246755676,
          "rotation": 0,
          "target": "10-interior---salty_stbside"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-interior---salty_stbside",
      "name": "Interior - Salty_STBside",
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
          "yaw": 0.11198381672028646,
          "pitch": 0.20987789514316724,
          "rotation": 3.141592653589793,
          "target": "9-interior---salty_portside"
        },
        {
          "yaw": -1.2614191922187068,
          "pitch": -0.09913984896334327,
          "rotation": 0,
          "target": "4-pilot-house"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-interior---arcylic_portside",
      "name": "Interior - Arcylic_Portside",
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
        "yaw": 0.38304663741442724,
        "pitch": 0.40475582547202293,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.9239372729593036,
          "pitch": -0.24946687169203585,
          "rotation": 4.71238898038469,
          "target": "7-interior---barebones_portside"
        },
        {
          "yaw": 1.9320363343062965,
          "pitch": -0.0025532058009183345,
          "rotation": 4.71238898038469,
          "target": "9-interior---salty_portside"
        },
        {
          "yaw": 1.9479809250415192,
          "pitch": 0.4778661268952007,
          "rotation": 4.71238898038469,
          "target": "13-interior---cabinetry_portside"
        },
        {
          "yaw": 3.12366114168967,
          "pitch": -0.20758204868886665,
          "rotation": 0,
          "target": "4-pilot-house"
        },
        {
          "yaw": 0.9512053741134352,
          "pitch": -0.025404335487090535,
          "rotation": 0,
          "target": "12-interior---arcylic_stbside"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-interior---arcylic_stbside",
      "name": "Interior - Arcylic_STBside",
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
        "yaw": 1.6076884589444518,
        "pitch": 0.28766709250643885,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.2062390179768983,
          "pitch": -0.22084465418548405,
          "rotation": 0,
          "target": "11-interior---arcylic_portside"
        },
        {
          "yaw": 0.49588173432728055,
          "pitch": -0.18567393628151407,
          "rotation": 0,
          "target": "4-pilot-house"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-interior---cabinetry_portside",
      "name": "Interior - Cabinetry_Portside",
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
        "yaw": 0.12730592108172978,
        "pitch": 0.3868740358590017,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.0938498568114614,
          "pitch": -0.2586094791160658,
          "rotation": 4.71238898038469,
          "target": "7-interior---barebones_portside"
        },
        {
          "yaw": 2.1024524303701257,
          "pitch": 0.016084474203061916,
          "rotation": 10.995574287564278,
          "target": "9-interior---salty_portside"
        },
        {
          "yaw": 2.107473188505131,
          "pitch": 0.26215758837751224,
          "rotation": 4.71238898038469,
          "target": "11-interior---arcylic_portside"
        },
        {
          "yaw": -2.987609687120816,
          "pitch": -0.18854487281187815,
          "rotation": 0,
          "target": "4-pilot-house"
        },
        {
          "yaw": 1.1226996919011398,
          "pitch": 0.06010543661560952,
          "rotation": 0,
          "target": "14-interior---cabinetry_stbside"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-interior---cabinetry_stbside",
      "name": "Interior - Cabinetry_STBside",
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
        "yaw": 1.6128630183134138,
        "pitch": 0.31108910949093627,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.48815888382446104,
          "pitch": -0.13839949660049022,
          "rotation": 0,
          "target": "4-pilot-house"
        },
        {
          "yaw": 2.0217009583759173,
          "pitch": -0.08058768500382207,
          "rotation": 0,
          "target": "13-interior---cabinetry_portside"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "SMITH CUSTOM 53",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
