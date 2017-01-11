const isObjLiteral = o => ( o !== null && ! Array.isArray(o) && typeof o !== 'function' && typeof o === 'object' )

/**
  Creates a reducer.
  @param {string} initialState - The initial state for this reducer.
  @param {object} handlers - Keys are action types (strings), values are reducers (functions).
  @return {object} A reducer object.
 */
export default (initialState, handlers = {}) => (state = initialState, action) => 
{
  if ( ! action || ! action.type || ! handlers[action.type] ) return state
  return handlers[action.type](state, action)
}
