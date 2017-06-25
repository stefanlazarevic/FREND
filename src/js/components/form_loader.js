const form__loaders = Array.from(document.getElementsByTagName('form'));

const form__init = (form__loaders) => {
  if(!form__loaders) {
    console.error('Missing parameter on form__init.');
    return;
  }
  form__loaders.forEach((form) => {
    form.addEventListener('submit', function(e){
      form.querySelector('[type="submit"]').setAttribute('disabled', 'true');
      if(form.dataset.loader === 'overlay'){
        const loader = document.createElement('DIV');
        const spinner = document.createElement('DIV');
        const text = document.createElement('SPAN');
        loader.setAttribute('class', 'loader');
        spinner.setAttribute('class', 'spinner');
        loader.appendChild(spinner);
        loader.appendChild(text);
        text.innerText = form.dataset.loaderMessage;
        form.appendChild(loader);
        form.classList.add('active');
      }
      else{
        const loaders = form.querySelectorAll('[data-loader="form"]');
        loaders.forEach((loader) => {
          loader.classList.add('active');
        });
      }
    });
  });
}

module.exports.form__loaders = form__loaders;
module.exports.form__init = form__init;
