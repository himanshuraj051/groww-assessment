import _ from 'lodash'
// import faker from 'faker'
import React, { useState } from 'react'
import { Search } from 'semantic-ui-react'


const initialState = {
  loading: false,
  results: [],
  value: '',
}

function exampleReducer(state, action) {
  switch (action.type) {
    case 'CLEAN_QUERY':
      return initialState
    case 'START_SEARCH':
      return { ...state, loading: true, value: action.query }
    case 'FINISH_SEARCH':
      return { ...state, loading: false, results: action.results }
    case 'UPDATE_SELECTION':
      return { ...state, value: action.selection }

    default:
      throw new Error()
  }
}

function SearchContainer(props) {
  const source = props.data;
  let type = props.category;


  type = type.toString().toLowerCase();

//   console.log('sur', source)

  const [state, dispatch] = React.useReducer(exampleReducer, initialState)
  const { loading, results, value } = state

  const timeoutRef = React.useRef()
  const handleSearchChange = React.useCallback((e, data) => {
    if(data)
    props.filterSearch(data.value);
  }, [])

  return (
        <Search
          loading={loading}
          placeholder='Search...'
          onResultSelect={(e, data) =>
            dispatch({ type: 'UPDATE_SELECTION', selection: data.result.title })
          }
          onSearchChange={handleSearchChange}
          results={results}
          value={value}
        />
  )
}

export default SearchContainer;