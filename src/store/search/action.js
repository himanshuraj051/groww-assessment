// import _ from 'lodash'
// const source = _.times(5, () => ({
//   title: "hnfnl",
//   description: "hello",
//   image: "faker.internet.avatar()",
//   price: "5",
// }))
// const startSearch = () => {
//     console.log("here");
//     dispatch({ type: 'START_SEARCH', query: data.value })
// }
// const searchBank = (data) => {
//     if (data.value.length === 0) {
//         dispatch({ type: 'CLEAN_QUERY' })
//         return
//       }

//       const re = new RegExp(_.escapeRegExp(data.value), 'i')
//       const isMatch = (result) => re.test(result.price)
    
//       let match =  _.filter(source, isMatch);

//       if(match.length) {
//         match = [{"title": `${match.length} results found.`}];
//       }

//       dispatch({
//         type: 'FINISH_SEARCH',
//         results: match,
//       })
// }
// export {startSearch, searchBank};