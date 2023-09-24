import { ElectonicProduct } from "../Data/ElectonicProduct.js";
import { fatucherProducts } from "../Data/fatucherProducts.js";


let input_serch = document.getElementById('serch_input')
let form_serch = document.getElementById('serch_form');
let reacent_searchel = document.querySelector('.reacent_search')


let recentArray = ["phone, mobalie"]
form_serch.addEventListener("submit", (e) => {
    e.preventDefault()
    recentArray.unshift(input_serch.value)
    console.log(recentArray);
    renderRecent()
})

function renderRecent() {
    let reacent_serch_html = ''
    recentArray.forEach(element => {
        reacent_serch_html += `
        <div class="recent_list">
                    <i class="fa-solid fa-clock-rotate-left"></i>
                     <p>${element}</p>
                   </div>`

    })
    reacent_searchel.innerHTML = reacent_serch_html;
}
renderRecent();

/************  FatucherProducts project Data  *****************/

let featurProduct_list = document.querySelector('.featurProduct_list');
let featurProductlist_html = "";

fatucherProducts.forEach(el => {
    featurProductlist_html += `
    <div class="featurProduct_items">
                    <a href="${el.linke}">
                    <div class="featurProduct_img">
                        <img src="${el.img}">
                    </div>
                    <p class="featurProduct_name">
                        ${el.name}
                        ${el.subNavigation ? `<i class="fa-solid fa-angle-down"></i>` : ""}
                    </p>
                </a>
                </div>
    `
})
featurProduct_list.innerHTML = featurProductlist_html
// console.log(featurProductlist_html);

// ***************** best_electonic_box  **************
let best_electonic_boxElem = document.querySelector('.best_of_electonic_items')
let best_electonic_boxhtml = "";

ElectonicProduct.forEach(element => {
    best_electonic_boxhtml += `           
                  <div class="best_of_electonic_items" data-product-id=${element.id} >
                       <div class="best_of_electonic_more_part">
                         <img src="${element.img}"alt="">
                           <p>${element.name}</p>
                           <p>${element.Price}</p>
                     </div>
                </div>
`
})
best_electonic_boxElem.innerHTML = best_electonic_boxhtml;

// bestElectronicsBoxElem.forEach(function(index){
//     index.innerHTML = best_electonic_boxhtml
//     console.log(index);
// })


setTimeout(function () {

    let open_btn = document.querySelectorAll('[data-product-id]');

    let close_btn = document.querySelector('#close_btn');
    open_btn.forEach(function (node) {
        node.addEventListener('click', function (elem) {
            let prodId = elem.target.closest(".best_of_electonic_items").getAttribute('data-product-id');
            getProductById(prodId);

            document.body.classList.add('popup_active');
        },false)
    })
}, 100);

function getProductById(id) {

    console.log(ElectonicProduct[id])
    let popUpElement = document.getElementById("popup");
    popUpElement.querySelector('p').innerHTML =
        `<div class="" >
            <div class="">
                <img src="${ElectonicProduct[id].img}"alt="">                
            </div>

            <div class=""> 
                <p>${ElectonicProduct[id].name}</p>
                <p>${ElectonicProduct[id].Price}</p>
                ${ElectonicProduct[id].name}
            </div>
        </div>`
}

