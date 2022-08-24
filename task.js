const dropdownValue = document.querySelectorAll('.dropdown__value');
const dropdownLink = document.querySelectorAll('.dropdown__link');


function closeMenu() {
    const dropdownList = document.querySelectorAll('.dropdown__list');
    dropdownList.forEach ((item) => {
        item.classList.remove('dropdown__list_active');
    })
}
  
dropdownValue.forEach((item) => {
    item.onclick = () => {
        parent = item.closest('.dropdown');
        const dropdownList = parent.querySelector('.dropdown__list');
        if (dropdownList.classList.contains('dropdown__list_active')) {
            closeMenu();
        } else {
            dropdownList.classList.add('dropdown__list_active');
        }
    }
})

    

dropdownLink.forEach((item) => {
    item.onclick = () => {
        parent = item.closest('.dropdown');
        console.log(parent);
        parent.querySelector('.dropdown__value').textContent = item.textContent;
        closeMenu();
        return false;
    }
})
