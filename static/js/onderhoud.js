(() => {
  const app = {
    init() {
      console.log('1. Application Initialized!');
      this.cacheElements();
      this.generateUI();
    },
    cacheElements() {
      console.log('2. Cache the elements!');
      this.$services = document.querySelector('.services');
      this.$references = document.querySelector('.references');
    },
    generateUI() {
      console.log('3. Generate User Interface!');
      this.$services.innerHTML = this.generateServicesOnderhoud();
      this.$references.innerHTML = this.generateReferences();
    },
    generateServicesOnderhoud() {
      let output = '';
      SERVICES.forEach((service) => {
        if (service.type == 'onderhoud') {
          output += `<article class="service" data-id="${service.id}">
          <div class="service__picture"><img src="${service.picture}" alt="${service.title}" loading="lazy"></div>
          <h2>${service.title}</h2>
          <p>${service.synopsis}</p>
          <div class="button-wrapper"><a class="button" href="#">Meer informatie</a></div>
          </article>`
        }
      })
      return output;
    },
    generateReferences() {
      let output = `<div class="container">
      <h2>Onze referenties</h2>
      <div class="row">`;
      for (let i = 0; i < 6; i++) {
        output += `<article class="reference" data-id="${REFERENCES[i].id}">
        <div class="reference__picture">
          <img src="static/img/${REFERENCES[i].image}" alt="${REFERENCES[i].description}" loading="lazy">
          <figcaption>${REFERENCES[i].description}</figcaption>
        </div>
        </article>`
      }
      output += '</div></div>'
      return output;
    }
  };
  app.init();
})();