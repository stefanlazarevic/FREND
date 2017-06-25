const btn__options = Array.from(document.getElementsByClassName('btn--options'));

const options__init = (btn__options) => {
  btn__options.forEach((_option) => {
    const option = _option.querySelector('.options');
    const option_length = option.dataset.options;
    option.style.width = `${option_length * _option.clientWidth}px`;
    switch(option.dataset.position){
      case 'left':
        option.style.left = `-${option_length * 100}%`;
      break;
    }
    _option.addEventListener('click', () => {
      if(option.style.display){
        option.style.display = option.style.display === 'block' ? 'none' : 'block';
      }else{
        option.style.display = 'block';
      }
    });
  });
}

module.exports.btn__options = btn__options;
module.exports.options__init = options__init;
