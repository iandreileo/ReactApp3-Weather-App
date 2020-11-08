const API_URL_COORDS = (long, lat) => {
    return `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=f46b46433676f1bf93f401e772c8b6bb`;
} 

export default API_URL_COORDS;