// @TODO: Code preview for html with syntax highlight.
const editor = {
  init: function(){
    this.cacheDOM();
    this.init_editors();
  },
  cacheDOM: function(){
    this.editors = document.querySelectorAll('.editor__container');
  },
  init_editors: function(){
    for(let editor of this.editors){
      const lines = editor.querySelectorAll('.code__line');
      this.init_codelines(lines);
    }
  },
  init_codelines: function(lines){
    lines.forEach((line, number) => {
      let th = document.createElement("TH");
      th.setAttribute('class', 'code__line-number');
      th.innerText = (number + 1);
      line.parentNode.insertBefore(th, line);
      if(line.dataset.indent) line.innerHTML = '&nbsp;'.repeat(line.dataset.indent * 2) + line.innerHTML;
    });
  }
}

module.exports.editor = editor;
