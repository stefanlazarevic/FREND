const accordion_single = {
  init: function(){
    this.cacheDOM();
    this.headers_init();
  },
  cacheDOM: function(){
    this.accordions = document.querySelectorAll('[data-accordion="single"]');
  },
  headers_init: function(){
    for(let accordion of this.accordions){
      let accordion_headers = accordion.querySelectorAll('.accordion__header');
      this.panel_init(accordion_headers);
    }
  },
  panel_init: function(accordion_headers){
    for(let accordion_header of accordion_headers){
      let panel = accordion_header.querySelector('.accordion__content');
      accordion_header.addEventListener('click', this.eventBind.bind(this, panel, accordion_headers));
    }
  },
  eventBind: function(panel, accordion_headers){
    if(this.panel_opened(panel)){
      this.panel_close(panel);
    }else{
      for(let accordion_header of accordion_headers){
        let panel = accordion_header.querySelector('.accordion__content');
        this.panel_close(panel);
      }
      this.panel_open(panel);
    }
  },
  panel_opened: function(panel) {
    return panel.style.maxHeight;
  },
  panel_open: function(panel){
    panel.style.maxHeight = panel.scrollHeight + "px";
  },
  panel_close: function(panel){
    panel.style.maxHeight = null;
  }
}

const accordion_multiple = {
  init: function(){
    this.cacheDOM();
    this.headers_init();
  },
  cacheDOM: function(){
    this.accordions = document.querySelectorAll('[data-accordion="multiple"]');
  },
  headers_init: function(){
    for(let accordion of this.accordions){
      let accordion_headers = accordion.querySelectorAll('.accordion__header');
      this.panel_init(accordion_headers);
    }
  },
  panel_init: function(accordion_headers){
    for(let accordion_header of accordion_headers){
      let panel = accordion_header.querySelector('.accordion__content');
      accordion_header.addEventListener('click', this.eventBind.bind(this, panel));
    }
  },
  eventBind: function(panel){
    this.panel_opened(panel) ? this.panel_close(panel) : this.panel_open(panel);
  },
  panel_opened: function(panel) {
    return panel.style.maxHeight;
  },
  panel_open: function(panel){
    panel.style.maxHeight = panel.scrollHeight + "px";
  },
  panel_close: function(panel){
    panel.style.maxHeight = null;
  }
}

module.exports.accordion_single = accordion_single;
module.exports.accordion_multiple = accordion_multiple;
