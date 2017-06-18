const avatar = document.querySelector('[data-avatar-upload="true"]');

const avatar_init = (avatar) => {
  if(!avatar) return;
  
  const upload__input = document.createElement("INPUT");
  upload__input.setAttribute("type", "file");
  upload__input.setAttribute("class", 'avatar__upload');
  upload__input.setAttribute("name", 'avatar');
  upload__input.setAttribute("id", 'avatar');

  const upload__label = document.createElement("LABEL");
  upload__label.setAttribute("for", "avatar");
  upload__label.setAttribute("class", "avatar__label");

  const upload__text = document.createElement("SPAN");
  upload__text.setAttribute('class', 'avatar__text');
  upload__text.innerText = 'Change Photo';

  avatar.appendChild(upload__input);
  avatar.appendChild(upload__label);
  upload__label.appendChild(upload__text);

  const image = avatar.querySelector('img');

  upload__input.addEventListener('change', function(event){
    image.src = URL.createObjectURL(event.target.files[0]);
  });
}

module.exports.avatar = avatar;
module.exports.avatar_init = avatar_init;

// @TODO Cropping avatar image.
