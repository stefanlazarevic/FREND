const editors = document.querySelectorAll('.editor__container');

function editor__init(editor) {
  const code__lines = editor.querySelectorAll('.code__line');
  code__lines.forEach((line, number) => {
    let th = document.createElement("TH");
    th.setAttribute('class', 'code__line-number');
    th.innerText = (number + 1);
    line.parentNode.insertBefore(th, line);
    if(line.dataset.indent) line.innerHTML = '&nbsp;'.repeat(line.dataset.indent * 2) + line.innerHTML;
  });
}

function editors__init(editors) {
  editors.forEach(function(editor){
    editor__init(editor);
  });
}

module.exports.editors = editors;
module.exports.editors__init = editors__init;
