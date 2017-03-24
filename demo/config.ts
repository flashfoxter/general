/* tslint:disable */
export const config = {
  'generalization': {
    'type': 'old',
    'config': [
      {
        'safeZone': 0,
        'size': [1, 1],
        'className': '_general_recovery'
      },
      {
        'safeZone': 1,
        'size': [26, 26],
        'offset': [13, 13],
        'className': '_general_commercial'
      },
      {
        'safeZone': 7,
        'size': [26, 26],
        'offset': [13, 13],
        'className': '_general_mushroom'
      },
      {
        'safeZone': 1,
        'size': [6, 6],
        'offset': [3, 3],
        'className': '_general_bullet'
      },
      {
        'safeZone': 0,
        'size': [0, 0],
        'className': '_general_hidden'
      }
    ]
  },
  'markersIcons': {
    'mushroom': {
      'normal': require('base64-image-loader!modules/map/assets/marker-regular.svg'),
      'size': {
        'width': 26,
        'height': 26
      },
      'offset': {
        'x': 13,
        'y': 13
      }
    },
    'bullet': {
      'normal': require('base64-image-loader!modules/map/assets/bullet-current.svg'),
      'size': {
        'width': 6,
        'height': 6
      },
      'offset': {
        'x': 3,
        'y': 3
      }
    },
    'commercial': {
      'normal': require('base64-image-loader!modules/map/assets/marker-ad.svg'),
      'size': {
        'width': 26,
        'height': 26
      },
      'offset': {
        'x': 13,
        'y': 13
      }
    },
    'recovery': {
      'normal': require('base64-image-loader!modules/map/assets/marker-ad.svg'), // TODO
      'size': {
        'width': 26,
        'height': 26
      },
      'offset': {
        'x': 13,
        'y': 13
      }
    }
  }
};
/* tslint:enable */
