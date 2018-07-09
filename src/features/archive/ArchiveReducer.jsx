import { createReducer } from '../../app/common/util/reducerUtil';
import { CREATE_ARCHIVE, DELETE_ARCHIVE, UPDATE_ARCHIVE } from './archiveConstants';

const initialState = [
  {
    id: '1',
    title: 'Trip to Tower of London',
    date: '2018-03-27',
    category: 'Lesson',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
    city: 'London, UK',
    venue: "Tower of London, StKatharine's & Wapping, London",
    hostedBy: 'Bob',
    hostPhotoURL: 'https://randomuser.me/api/portraits/men/20.jpg',
    attendees: [
      {
        id: 'a',
        name: 'Bob',
        photoURL: 'https://randomuser.me/api/portraits/men/28.jpg'
      },
      {
        id: 'b',
        name: 'Tom',
        photoURL: 'https://randomuser.me/api/portraits/men/26.jpg'
      }
    ]
  },
  {
    id: '2',
    title: 'Trip to Punch and Judy Pub',
    date: '2018-03-28',
    category: 'Assignment',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
    city: 'London, UK',
    venue: 'Punch & Judy, Henrietta Street, London, UK',
    hostedBy: 'Tom',
    hostPhotoURL: 'https://randomuser.me/api/portraits/men/22.jpg',
    attendees: [
      {
        id: 'b',
        name: 'Tom',
        photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
      },
      {
        id: 'a',
        name: 'Bob',
        photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
      }
    ]
  }
];

export const createArchive = (state, payload) => {
  return [...state, Object.assign({}, payload.archive)]
}

export const updateArchive = (state, payload) => {
  return [
    ...state.filter(archive => archive.id !== payload.archive.id),
    Object.assign({}, payload.archive)
  ]
}

export const deleteArchive = (state, payload) => {
  return [
    ...state.filter(archive => archive.id !== payload.archiveId)
  ]
}



export default createReducer(initialState, {
  [CREATE_ARCHIVE]: createArchive,
  [UPDATE_ARCHIVE]: updateArchive,
  [DELETE_ARCHIVE]: deleteArchive
})