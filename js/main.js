const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

//Select tab content item
function selectItem(e){
    removeBorders();
    removeShow();
    //Add border to current tab
   this.classList.add('tab-border');
   const tabContentItem = document.querySelector(`#${this.id}-content`);
   tabContentItem.classList.add('show');
}
function removeBorders(){
    tabItems.forEach(item => item.classList.remove('tab-border'));
}

function removeShow(){
    tabContentItems.forEach(item => item.classList.remove('show'));
}
// Listen for tab content item
tabItems.forEach(item  => item.addEventListener('click', selectItem));

