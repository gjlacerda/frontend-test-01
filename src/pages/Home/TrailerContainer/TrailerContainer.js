import { connect } from 'react-redux'
import { operations } from 'state/trailers'
import TrailerList from 'pages/Home/TrailerList'

const mapStateToProps = state => ({
  trailers: state.trailers.list,
  nextPageToken: state.trailers.nextPageToken,
  totalResults: state.trailers.totalResults,
  loading: state.trailers.loading,
})

const mapDispatchToProps = dispatch => ({
  requestTrailers: (pageToken) => {
    dispatch(operations.requestTrailers(pageToken))
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TrailerList)
