const categoriesOfItems = document.querySelectorAll('.item');

categoriesOfItems.forEach((category) => itemCounter(category));

function itemCounter (category) {
    (category.addEventListener('click', onClickCounter));
}

function onClickCounter(event) {
    event.preventDefault();
    const itemsCount = event.currentTarget.children[1].children.length;
    const categoryName = event.currentTarget.children[0].innerHTML;
    console.log(`Категория: ${categoryName}
Количество элементов: ${itemsCount}`);   
}