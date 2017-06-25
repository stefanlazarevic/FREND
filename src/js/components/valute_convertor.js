const convertor = document.querySelectorAll('[data-convertor]');
var nbs_list = {};

const convertor_init = (ajax) => {
  const nbs_api = '9376996d60bbdc0dcd7fbe800827a26f';

  ajax.get(`https://api.kursna-lista.info/${nbs_api}/kursna_lista/json`).then((res) => {
    nbs_list = res.data.result;
    console.log(nbs_list['eur'].sre);
  }).catch((err) => {
    console.error(err);
  });
}

const convert = (from, to) => {
    console.log(nbs_list);
    return Math.round(nbs_list[from].sre / nbs_list[to].sre * 10000) / 10000;
}

module.exports.convertor = convertor;
module.exports.convertor_init = convertor_init;
module.exports.convert = convert;
