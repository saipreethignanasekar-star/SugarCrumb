// Sample product dataset (small and optimized for demo)
const PRODUCTS = [
  {id:1,title:'Classic Chocolate Cake',category:'cakes',flavor:'Chocolate',price:45, img:'classic.JPG'},
  {id:2,title:'Vanilla Dream Cupcakes ',category:'cupcakes',flavor:'Vanilla',price:40, img:'newvannila.JPG'},
  {id:3,title:'Chocochip cookies',category:'cookies',flavor:'Chocolate',price:60, img:'cok.JPG'},
  {id:4,title:'Salted Caramel Brownies',category:'cakes',flavor:'Caramel',price:20, img:'caramel.JPG'},
  {id:5,title:'Redvelvet Cupcakes',category:'cupcakes',flavor:'Strawberry',price:70, img:'red.JPG'},
  {id:6,title:'Choco donut',category:'donut',flavor:'Chocolate',price:50, img:'donut.webp'}
];

// --- Render products ---
const productsEl = document.getElementById('products');
function createProductCard(p){
  const el = document.createElement('article'); el.className='card fade-in';
  el.innerHTML = `
    <img loading="lazy" src="${p.img}" alt="${p.title}">
    <div class="card-body">
      <div style="display:flex; justify-content:space-between; align-items:center">
        <div>
          <div style="font-weight:700">${p.title}</div>
          <div style="font-size:13px; color:var(--muted)">${p.flavor} • ${p.category}</div>
        </div>
        <div class="price">₹${p.price.toFixed(2)}</div>
      </div>
      <div style="display:flex; gap:8px; margin-top:6px">
        <button class="add-btn" data-id="${p.id}">Add to cart</button>
        <button class="add-btn" style="background:transparent; color:var(--brown); border:1px solid #f3e6e3">Quick view</button>
      </div>
    </div>
  `;
  return el;
}
function renderProducts(list){
  productsEl.innerHTML='';
  list.forEach(p=> productsEl.appendChild(createProductCard(p)));
  
}

// initial
renderProducts(PRODUCTS);

// --- Filters ---
const filterCategory = document.getElementById('filter-category');
const filterFlavor = document.getElementById('filter-flavor');
const clearFilters = document.getElementById('clear-filters');
function applyFilters(){
  let res = PRODUCTS.slice(); 

}
