const openWeatherAPIKey = "b656168070a8417b8dde4964b33c4df3";
const fetchWeatherData = async (city) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${openWeatherAPIKey}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Weather data error:", error);
    throw error;
  }
};
const unsplashAccessKey = "xaHreyL1u-ao1WMY06UZjU2WiJE2XO6k9NqNpNLsv6E";
const fetchImages = async (description) => {
  try {
    const response = await fetch(
      `https://api.unsplash.com/search/photos?query=${description}&client_id=${unsplashAccessKey}`
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Image fetch error:", error);
    throw error;
  }
};

// Function to set the main image
const setMainImage = async (imageUrl) => {
  const photoElement = document.getElementById("photo");
  photoElement.innerHTML = `<img src="${imageUrl}" alt="Main Image">`;
};

// Function to display thumbnails
const displayThumbnails = (images) => {
  const thumbnailsContainer = document.getElementById("thumbs");
  thumbnailsContainer.innerHTML = "";
  images.forEach((image) => {
    thumbnailsContainer.innerHTML += `<img src="${image.urls.thumb}" alt="${image.alt_description}" class="thumbnail" onclick="setMainImage('${image.urls.regular}')">`;
  });
};

// Function to fetch and display images
const fetchAndDisplayImages = async (city) => {
  try {
    const weatherData = await fetchWeatherData(city);
    const description = weatherData.weather[0].description;
    const images = await fetchImages(description);

    if (images.length > 0) {
      displayThumbnails(images);
      // Setting the main image to the first image in the array
      setMainImage(images[0].urls.regular);
    } else {
      console.error("No weather images");
    }
  } catch (error) {
    console.error("Error fetching and displaying images:", error);
  }
};

// Function to update weather display
const updateWeatherDisplay = (weatherData) => {
  const conditionsElement = document.getElementById("conditions");
  conditionsElement.textContent = `Current weather: ${weatherData.weather[0].description}`;
};

// Event listener for form submission
const handleFormSubmit = async (event) => {
  event.preventDefault();
  const cityInput = document.getElementById("search-tf").value.trim();
  if (cityInput) {
    try {
      const weatherData = await fetchWeatherData(cityInput);
      updateWeatherDisplay(weatherData);
      fetchAndDisplayImages(cityInput);
    } catch (error) {
      console.error("Weather data error:", error);
    }
  } else {
    console.error("Invalid city name");
  }
};

// Adding event listener to the form
const searchForm = document.getElementById("search");
searchForm.addEventListener("submit", handleFormSubmit);

// Event listener for window load
window.addEventListener("load", async () => {
  try {
    // Fetching default weather data for London
    const defaultWeatherData = await fetchWeatherData("London");
    updateWeatherDisplay(defaultWeatherData);
    fetchAndDisplayImages("London");
  } catch (error) {
    console.error("Default data error:", error);
  }
});
