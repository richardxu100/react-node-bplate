import React, { Component } from 'react';

export default class GoogleMap extends Component {
  shouldComponentUpdate() {
    return false; // never re-render
  }

  componentWillReceiveProps(nextProps) {
    this.map.panTo({ lat: this.props.lat, lng: this.props.lng });
  }

  componentDidMount() {
    // eslint-disable-next-line
    this.map = new google.maps.Map(this.refs.map, { // instead of document.getElementById, use this.ref
      center: { lat: this.props.lat, lng: this.props.lng },
      zoom: 8
    });
  }

  render() {
    return (
      <div id="map" ref="map" />
    )
  }
}
