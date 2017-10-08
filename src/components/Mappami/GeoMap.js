import React from 'react';
import { render } from 'react-dom';
import { Map, Marker, Popup, TileLayer, ImageOverlay } from 'react-leaflet';

class GeoMap extends React.Component{

    constructor(props){
        super(props)
        //this.state=props
        this.marker = this.marker.bind(this)
    }

    marker(points, key){
        console.log(points)
        return(
            <Marker position={points} key={key}>
                <Popup>
                    <span>A pretty CSS3 popup.<br/>Easily customizable.</span>
                </Popup>
            </Marker>
        );
    }

    render(){

      const position = [this.props.geoData[0].geometry.coordinates[1], this.props.geoData[0].geometry.coordinates[0]];
      const geoData = this.props.geoData;
      console.log('GEO', this.props.geoData[0].geometry.coordinates[1], this.props.geoData[0].geometry.coordinates[0]);
      const map = (
        <Map style={{
            height: '400px',
            width: '100%'
        }} center={position} zoom={14}>
            <TileLayer
            url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            {
                this.props.geoData.map((res,index) => {
                    return (
                        <Marker position={[res.geometry.coordinates[1], res.geometry.coordinates[0]]} key={index}>
                        <Popup>
                            
                            <div>
                            <span>{res.properties.Name || 'non trovato'}</span>
                                <div>
                                <img width="100%" height="100%" src={res.properties.gx_media_links} />
                               </div>
                            </div>
                        </Popup>
                    </Marker>
                    )
                })
            }
            
        </Map>
      );
      return map
    }


}

export default GeoMap;