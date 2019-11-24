export function manageFriends(state, action){
  switch (action.type) {
    case 'ADD_FRIEND':
      return {friends: state.friends.concat(action.friend)}
    default:
      return {friends: []}
  }
}
