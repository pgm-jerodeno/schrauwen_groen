(() => {
  const app = {
    init() {
      console.log('1. Application Initialized!');
      this.cacheElements();
      this.generateUI();
    },
    cacheElements() {
      console.log('2. Cache the elements!');
      this.$references = document.querySelector('.references');
    },
    generateUI() {
      console.log('3. Generate User Interface!');
      this.$references.innerHTML = this.generateReferencesPrivate();
      this.$references.innerHTML += this.generateReferencesBusiness();
      this.$references.innerHTML += this.generateReferencesPublic();
    },
    generateReferencesPrivate() {
      let output = `<div class="private" id="private"><div class="container">
      <h2>Privé-omgeving</h2>
      <div class="row">`;
      REFERENCES.forEach((reference) => {
        if (reference.type == 'private') {
          output += `<article class="reference" data-id="${reference.id}">
          <div class="reference__picture">
            <img src="static/img/${reference.image}" alt="${reference.description}" loading="lazy">
            <figcaption>${reference.description}</figcaption>
          </div>
        </article>`
        }
      })
      output += '</div></div></div>'
      return output;
    },
    generateReferencesBusiness() {
      let output = `<div class="b2b" id="b2b"><div class="container">
      <h2>Zakelijke omgeving</h2>
      <div class="row">`;
      REFERENCES.forEach((reference) => {
        if (reference.type == 'b2b') {
          output += `<article class="reference" data-id="${reference.id}">
          <div class="reference__picture">
            <img src="static/img/${reference.image}" alt="${reference.description}" loading="lazy">
            <figcaption>${reference.description}</figcaption>
          </div>
        </article>`
        }
      })
      output += '</div></div></div>'
      return output;
    },
    generateReferencesPublic() {
      let output = `<div class="public" id="public"><div class="container">
      <h2>Openbare omgeving</h2>
      <div class="row">`;
      REFERENCES.forEach((reference) => {
        if (reference.type == 'public') {
          output += `<article class="reference" data-id="${reference.id}">
          <div class="reference__picture">
            <img src="static/img/${reference.image}" alt="${reference.description}" loading="lazy">
            <figcaption>${reference.description}</figcaption>
          </div>
        </article>`
        }
      })
      output += '</div></div></div>'
      return output;
    }
  };
  app.init();
})();