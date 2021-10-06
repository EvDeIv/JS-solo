function toCleanMurkup() {
  const countryList = document.querySelector('.countries-list');
  const countryCardContainer = document.querySelector('.cardContainer');
  if (countryList !== null) {
    countryList.remove();
  }
  if (countryCardContainer !== null) {
    countryCardContainer.remove();
  }
}

export default toCleanMurkup;
