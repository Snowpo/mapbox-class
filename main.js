mapboxgl.accessToken='pk.eyJ1Ijoic25vd3BvIiwiYSI6ImNreDh3a3dpNzA4cWMzMmt0NW44enpseWoifQ.IfOtkPUIAWYYXMRTDbaU1w'


let latitude = 22.7868542, longitude = 88.3643296
var map = new mapboxgl.Map({
    container: 'map',
    style:'mapbox://style/mapbox/streets-v11',
    center:[longitude,latitude],
    zoom: 16
})

map.addControl(
    new mapboxgl.GeolocateControl({
        positionOptions:{
            enableHighAccuracy: true
        },
        trackUserLocation: true
    })
)
map.addControl(
    new MapboxDirections({
        accessToken: mapboxgl.accessToken
    }),
    'top-left'
    
)