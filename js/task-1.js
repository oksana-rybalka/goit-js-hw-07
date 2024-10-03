const categoriesNumbers = document.querySelectorAll('.item');
console.log('Number of categories:'+ categoriesNumbers.length);
categoriesNumbers.forEach(item => {
    const categoryName = item.querySelector('h2').textContent;
    const categoryElementsNumbers = item.querySelectorAll('li').length;
    console.log('Category:'+ categoryName);
    console.log('Elements:'+ categoryElementsNumbers);
}
);