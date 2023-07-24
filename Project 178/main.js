let latitude = 22.7868542, longitude=88.3643296;
mapboxgl.accessToken = 'pk.eyJ1IjoiYXBvb3J2ZWxvdXMiLCJhIjoiY2ttZnlyMDgzMzlwNTJ4a240cmEzcG0xNyJ9.-nSyL0Gy2nifDibXJg4fTA';
var map=new mapboxgl.Map({
    container:"map",
    center:[longitude, latitude],
    zoom:4,
    style: 'mapbox://styles/mapbox/streets-v11'
});

var img1=document.querySelector("#amber")
var marker1=new mapboxgl.Marker({
    element:img1
})
.setLngLat([75.85133, 26.985547])
.addTo(map)

map.addControl(
    new MapBoxGeocoder({
        accessToken:mapboxgl.accessToken,
        mapboxgl:mapboxgl
    })
);