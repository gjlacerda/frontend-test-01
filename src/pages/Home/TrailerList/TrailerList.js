import React, { Component } from 'react'
import styled from 'styled-components'
import TrailerItem from 'pages/Home/TrailerItem'
import Button from 'components/_common/Button'
import { marginSize } from 'utils/margin'

const ListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: ${marginSize.large};
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`

// Testar
const renderTrailers = trailers =>
  trailers.map(trailer => (
    <TrailerItem
      key={trailer.id}
      image={trailer.snippet.thumbnails.maxres.url}
      videoId={trailer.snippet.resourceId.videoId}
    />
  ))

// Testar
const renderButtonMore = ({
  trailers,
  nextPageToken,
  totalResults,
  loading,
  requestTrailers,
}) =>
  trailers.length < totalResults && (
    <ButtonWrapper>
      <Button
        onClick={() => requestTrailers(nextPageToken)}
        disabled={loading}
      >
        Load more
      </Button>
    </ButtonWrapper>
  )

class TrailerList extends Component {
  componentDidMount() {
    const { trailers, requestTrailers } = this.props
    if (!trailers.length) {
      requestTrailers()
    }
  }

  render() {
    const {
      trailers,
      nextPageToken,
      totalResults,
      loading,
      requestTrailers,
    } = this.props

    return (
      <React.Fragment>
        <ListWrapper>
          {renderTrailers(trailers)}
        </ListWrapper>
        {renderButtonMore({
          trailers,
          nextPageToken,
          totalResults,
          loading,
          requestTrailers,
        })}
      </React.Fragment>
    )
  }
}

export default TrailerList
