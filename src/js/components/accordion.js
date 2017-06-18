const accordion__multiple = document.querySelectorAll('[data-accordion="multiple"]');
const accordion__single = document.querySelectorAll('[data-accordion="single"]');

// Helper functions.
function showPanel(panel){
  panel.style.maxHeight = panel.scrollHeight + "px";
}

function hidePanel(panel){
  panel.style.maxHeight = null;
}

function panelOpened(panel){
  return panel.style.maxHeight;
}

function closePanels(acc__headers){
  for (let h__index = 0; h__index < acc__headers.length; h__index++) {
    acc__headers[h__index].querySelector('.accordion__content').style.maxHeight = null
  }
}

const accordion__init = (accordion, type = 'single') => {
  // Loop trough all accordions.
  for(let a__index = 0; a__index < accordion.length; a__index++){
    const acc__headers = accordion[a__index].querySelectorAll('.accordion__header');
    // Loop trough all headers.
    for(let h__index = 0; h__index < acc__headers.length; h__index++){
      // Attach event listener on each header.
      acc__headers[h__index].addEventListener('click', function(){
        const panel = this.querySelector('.accordion__content');
        if(type == "single"){
          if(panelOpened(panel)) hidePanel(panel)
          else{
            closePanels(acc__headers);
            showPanel(panel);
          }
        }else if(type == "multiple"){
          panelOpened(panel) ? hidePanel(panel) : showPanel(panel);
        }
      });
    }
  }
}

module.exports.accordion__init = accordion__init;
module.exports.accordion__multiple = accordion__multiple;
module.exports.accordion__single = accordion__single;
