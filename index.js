import dayjs from 'dayjs';

const time = document.getElementById('time');
const date = document.getElementById('date');
const locationEl = document.getElementById('location');

// Check if geolocation is supported by the browser
if ("geolocation" in navigator) {
  // Prompt user for permission to access their location
  navigator.geolocation.getCurrentPosition(
    // Success callback function
    (position) => {
      // Get the user's latitude and longitude coordinates
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;

      // Do something with the location data, e.g. display on a map
      var requestOptions = {
        method: 'GET',
        };

        fetch(`https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lng}&format=json&apiKey=d7dbd5617d454d6185416ceff3c8f15d`)
        .then(response => response.json())
        .then(result => {
            const first = result.results?.[0];
            if (first) {
            const city = first.city || "";
            const country = first.country || "";
            locationEl.innerText = `${city}, ${country}`.trim();
            } else {
            locationEl.innerText = "Unknown location";
            }
        })
        .catch(error => console.log('error', error));
    },
    // Error callback function
    (error) => {
      // Handle errors, e.g. user denied location sharing permissions
      console.error("Error getting user location:", error);
      locationEl.innerText = "Antarctica";
    }
  );
} else {
  // Geolocation is not supported by the browser
  console.error("Geolocation is not supported by this browser.");
    location.ElinnerText = "Antarctica";
}

setInterval(() => {
    time.innerText = dayjs().format('HH:mm:ss');
    date.innerText = dayjs().format('dddd, D MMMM, YYYY');
}, 1000);