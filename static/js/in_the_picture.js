(() => {
  const app = {
    init() {
      console.log('1. Application Initialized!');
      this.cacheElements();
      this.generateUI();
    },
    cacheElements() {
      console.log('2. Cache the elements!');
      this.$inThePicture = document.querySelector('.in-the-picture__content');
    },
    generateUI() {
      console.log('3. Generate User Interface!');
      this.$inThePicture.innerHTML = this.generatePictures();
    },
    generatePictures() {
      let output = '';
      HIGHLIGHTS.forEach((highlight) => {
        output += `<article class="highlight" data-id="${highlight.id}">
          <div class="highlight__picture">
            <img src="static/img/${highlight.image}" alt="${highlight.description}" loading="lazy">
            <figcaption>${highlight.description}</figcaption>
          </div>
        </article>`
      })
      return output;
    },
  };
  app.init();
})();