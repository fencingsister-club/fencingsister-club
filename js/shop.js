// ==================== Product Data ====================
     2	const products = [
     3	    {
     4	        id: 1,
     5	        name: '專業重劍 - Allstar FIE',
     6	        category: 'sword',
     7	        brand: 'allstar',
     8	        price: 3500,
     9	        description: '國際劍聯認證的競賽級重劍，高品質碳鋼劍身，平衡性極佳',
    10	        icon: '🤺',
    11	        rating: 4.8,
    12	        stock: 15,
    13	        specs: ['長度: 110cm', '重量: 770g', 'FIE認證', '碳鋼劍身']
    14	    },
    15	    {
    16	        id: 2,
    17	        name: '電子花劍 - Leon Paul',
    18	        category: 'sword',
    19	        brand: 'leon-paul',
    20	        price: 4200,
    21	        description: '頂級電子花劍，靈敏度高，適合專業比賽使用',
    22	        icon: '⚔️',
    23	        rating: 4.9,
    24	        stock: 10,
    25	        specs: ['長度: 110cm', '重量: 500g', '電子劍頭', 'FIE認證']
    26	    },
    27	    {
    28	        id: 3,
    29	        name: '入門佩劍套裝',
    30	        category: 'sword',
    31	        brand: 'absolute',
    32	        price: 1800,
    33	        description: '適合初學者的佩劍套裝，包含劍身、劍柄及護手盤',
    34	        icon: '🗡️',
    35	        rating: 4.5,
    36	        stock: 25,
    37	        specs: ['長度: 105cm', '重量: 500g', '入門級', '套裝含配件']
    38	    },
    39	    {
    40	        id: 4,
    41	        name: '碳纖維面罩 - Allstar',
    42	        category: 'mask',
    43	        brand: 'allstar',
    44	        price: 2800,
    45	        description: '輕量化碳纖維面罩，視野開闊，通風性佳',
    46	        icon: '🎭',
    47	        rating: 4.7,
    48	        stock: 20,
    49	        specs: ['材質: 碳纖維', '重量: 980g', 'FIE認證', '三種尺寸']
    50	    },
    51	    {
    52	        id: 5,
    53	        name: 'FIE認證面罩 - Leon Paul',
    54	        category: 'mask',
    55	        brand: 'leon-paul',
    56	        price: 3200,
    57	        description: '最新款X-Change面罩系統，可快速更換內襯',
    58	        icon: '🎭',
    59	        rating: 4.9,
    60	        stock: 12,
    61	        specs: ['X-Change系統', '1600N防護', 'FIE認證', '可調節']
    62	    },
    63	    {
    64	        id: 6,
    65	        name: '800N擊劍服 - 女裝',
    66	        category: 'jacket',
    67	        brand: 'allstar',
    68	        price: 1500,
    69	        description: '女性專用擊劍服，符合800N防護標準，舒適透氣',
    70	        icon: '👔',
    71	        rating: 4.6,
    72	        stock: 18,
    73	        specs: ['防護: 800N', '透氣材質', '女性剪裁', '多尺寸可選']
    74	    },
    75	    {
    76	        id: 7,
    77	        name: '1600N比賽服 - 男裝',
    78	        category: 'jacket',
    79	        brand: 'leon-paul',
    80	        price: 2200,
    81	        description: '高級比賽用擊劍服，1600N防護，FIE認證',
    82	        icon: '👔',
    83	        rating: 4.8,
    84	        stock: 15,
    85	        specs: ['防護: 1600N', 'FIE認證', '男性剪裁', '彈性材質']
    86	    },
    87	    {
    88	        id: 8,
    89	        name: '專業擊劍手套',
    90	        category: 'glove',
    91	        brand: 'allstar',
    92	        price: 450,
    93	        description: '皮革手套，提供優秀握感與保護',
    94	        icon: '🧤',
    95	        rating: 4.5,
    96	        stock: 30,
    97	        specs: ['真皮材質', '防滑掌面', '加固指尖', 'S-XL尺寸']
    98	    },
    99	    {
   100	        id: 9,
   101	        name: '電子花劍手套',
   102	        category: 'glove',
   103	        brand: 'leon-paul',
   104	        price: 580,
   105	        description: '電子花劍專用手套，導電材質，FIE認證',
   106	        icon: '🧤',
   107	        rating: 4.7,
   108	        stock: 25,
   109	        specs: ['導電材質', 'FIE認證', '透氣設計', '多尺寸']
   110	    },
   111	    {
   112	        id: 10,
   113	        name: '劍袋 - 雙劍款',
   114	        category: 'accessories',
   115	        brand: 'absolute',
   116	        price: 680,
   117	        description: '可容納兩把劍的專業劍袋，防水耐用',
   118	        icon: '💼',
   119	        rating: 4.4,
   120	        stock: 40,
   121	        specs: ['容量: 2把劍', '防水材質', '肩背設計', '多層收納']
   122	    },
   123	    {
   124	        id: 11,
   125	        name: '電子劍線組',
   126	        category: 'accessories',
   127	        brand: 'allstar',
   128	        price: 350,
   129	        description: '標準電子劍線，適用於花劍和重劍',
   130	        icon: '🔌',
   131	        rating: 4.3,
   132	        stock: 50,
   133	        specs: ['長度: 2m', '標準規格', '耐用設計', '含插頭']
   134	    },
   135	    {
   136	        id: 12,
   137	        name: '護胸 - 女性專用',
   138	        category: 'accessories',
   139	        brand: 'leon-paul',
   140	        price: 420,
   141	        description: '女性擊劍專用護胸，符合安全標準',
   142	        icon: '🛡️',
   143	        rating: 4.6,
   144	        stock: 22,
   145	        specs: ['女性專用', '舒適設計', '可調節', '多尺寸']
   146	    }
   147	];
   148	
   149	// ==================== Cart Management ====================
   150	let cart = [];
   151	
   152	function updateCartCount() {
   153	    const cartCount = document.getElementById('cartCount');
   154	    if (cartCount) {
   155	        cartCount.textContent = cart.length;
   156	    }
   157	}
   158	
   159	function addToCart(productId) {
   160	    const product = products.find(p => p.id === productId);
   161	    if (product) {
   162	        const existingItem = cart.find(item => item.id === productId);
   163	        if (existingItem) {
   164	            existingItem.quantity++;
   165	        } else {
   166	            cart.push({ ...product, quantity: 1 });
   167	        }
   168	        updateCartCount();
   169	        updateCartDisplay();
   170	        showNotification('已添加到購物車！', 'success');
   171	    }
   172	}
   173	
   174	function removeFromCart(productId) {
   175	    cart = cart.filter(item => item.id !== productId);
   176	    updateCartCount();
   177	    updateCartDisplay();
   178	    showNotification('已從購物車移除', 'info');
   179	}
   180	
   181	function updateQuantity(productId, change) {
   182	    const item = cart.find(item => item.id === productId);
   183	    if (item) {
   184	        item.quantity += change;
   185	        if (item.quantity <= 0) {
   186	            removeFromCart(productId);
   187	        } else {
   188	            updateCartDisplay();
   189	        }
   190	    }
   191	}
   192	
   193	function updateCartDisplay() {
   194	    const cartItems = document.getElementById('cartItems');
   195	    const cartSubtotal = document.getElementById('cartSubtotal');
   196	    const cartTotal = document.getElementById('cartTotal');
   197	
   198	    if (cart.length === 0) {
   199	        cartItems.innerHTML = '<p class="empty-cart">購物車是空的</p>';
   200	        if (cartSubtotal) cartSubtotal.textContent = 'HKD 0';
   201	        if (cartTotal) cartTotal.textContent = 'HKD 0';
   202	        return;
   203	    }
   204	
   205	    let subtotal = 0;
   206	    cartItems.innerHTML = cart.map(item => {
   207	        subtotal += item.price * item.quantity;
   208	        return `
   209	            <div class="cart-item">
   210	                <div class="cart-item-image">${item.icon}</div>
   211	                <div class="cart-item-info">
   212	                    <div class="cart-item-name">${item.name}</div>
   213	                    <div class="cart-item-price">HKD ${item.price.toLocaleString()}</div>
   214	                    <div class="cart-item-actions">
   215	                        <div class="quantity-control">
   216	                            <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
   217	                            <span>${item.quantity}</span>
   218	                            <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
   219	                        </div>
   220	                        <button class="btn-remove" onclick="removeFromCart(${item.id})">
   221	                            <i class="fas fa-trash"></i>
   222	                        </button>
   223	                    </div>
   224	                </div>
   225	            </div>
   226	        `;
   227	    }).join('');
   228	
   229	    if (cartSubtotal) cartSubtotal.textContent = `HKD ${subtotal.toLocaleString()}`;
   230	    if (cartTotal) cartTotal.textContent = `HKD ${subtotal.toLocaleString()}`;
   231	}
   232	
   233	function checkout() {
   234	    if (cart.length === 0) {
   235	        showNotification('購物車是空的', 'error');
   236	        return;
   237	    }
   238	    alert('此為演示網站，結帳功能需要後端支持。\n完整功能需要接入支付網關（如Stripe、PayPal）。');
   239	}
   240	
   241	// ==================== Product Display ====================
   242	function displayProducts(productsToShow = products) {
   243	    const productsGrid = document.getElementById('productsGrid');
   244	    if (!productsGrid) return;
   245	
   246	    if (productsToShow.length === 0) {
   247	        productsGrid.innerHTML = '<p style="text-align: center; padding: 3rem; color: var(--text-light);">沒有找到符合條件的產品</p>';
   248	        return;
   249	    }
   250	
   251	    productsGrid.innerHTML = productsToShow.map(product => `
   252	        <div class="product-card" onclick="showProductDetail(${product.id})">
   253	            <div class="product-image">
   254	                ${product.icon}
   255	                ${product.stock < 10 ? '<div class="product-badge">熱賣</div>' : ''}
   256	            </div>
   257	            <div class="product-info">
   258	                <div class="product-category">${getCategoryName(product.category)}</div>
   259	                <h3 class="product-name">${product.name}</h3>
   260	                <p class="product-description">${product.description}</p>
   261	                <div class="product-footer">
   262	                    <div class="product-price">HKD ${product.price.toLocaleString()}</div>
   263	                    <div class="product-rating">
   264	                        ${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5 - Math.floor(product.rating))}
   265	                        <span>${product.rating}</span>
   266	                    </div>
   267	                </div>
   268	                <button class="btn-add-cart" onclick="event.stopPropagation(); addToCart(${product.id})">
   269	                    <i class="fas fa-cart-plus"></i> 加入購物車
   270	                </button>
   271	            </div>
   272	        </div>
   273	    `).join('');
   274	}
   275	
   276	function getCategoryName(category) {
   277	    const names = {
   278	        'sword': '劍',
   279	        'mask': '面罩',
   280	        'jacket': '擊劍服',
   281	        'glove': '手套',
   282	        'accessories': '配件'
   283	    };
   284	    return names[category] || category;
   285	}
   286	
   287	function showProductDetail(productId) {
   288	    const product = products.find(p => p.id === productId);
   289	    if (!product) return;
   290	
   291	    const productDetail = document.getElementById('productDetail');
   292	    productDetail.innerHTML = `
   293	        <div class="product-detail-image">${product.icon}</div>
   294	        <div class="product-detail-info">
   295	            <h2>${product.name}</h2>
   296	            <div class="product-rating">
   297	                ${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5 - Math.floor(product.rating))}
   298	                ${product.rating} | 庫存: ${product.stock} 件
   299	            </div>
   300	            <div class="product-detail-price">HKD ${product.price.toLocaleString()}</div>
   301	            <p class="product-detail-description">${product.description}</p>
   302	            <div class="product-specs">
   303	                <h4>產品規格</h4>
   304	                <ul>
   305	                    ${product.specs.map(spec => `<li>${spec}</li>`).join('')}
   306	                </ul>
   307	            </div>
   308	            <button class="btn-primary btn-full" onclick="addToCart(${product.id}); closeModal('productModal');">
   309	                <i class="fas fa-cart-plus"></i> 加入購物車
   310	            </button>
   311	        </div>
   312	    `;
   313	    showModal('productModal');
   314	}
   315	
   316	// ==================== Filter & Search ====================
   317	function filterProducts() {
   318	    const categoryCheckboxes = document.querySelectorAll('.filter-option input[type="checkbox"][value]');
   319	    const selectedCategories = Array.from(categoryCheckboxes)
   320	        .filter(cb => cb.checked && ['sword', 'mask', 'jacket', 'glove', 'accessories'].includes(cb.value))
   321	        .map(cb => cb.value);
   322	
   323	    const brandCheckboxes = document.querySelectorAll('.filter-option input[type="checkbox"][value]');
   324	    const selectedBrands = Array.from(brandCheckboxes)
   325	        .filter(cb => cb.checked && ['allstar', 'leon-paul', 'absolute'].includes(cb.value))
   326	        .map(cb => cb.value);
   327	
   328	    const priceRange = document.querySelector('input[name="price"]:checked')?.value || 'all';
   329	
   330	    let filtered = products;
   331	
   332	    // Filter by category
   333	    if (selectedCategories.length > 0) {
   334	        filtered = filtered.filter(p => selectedCategories.includes(p.category));
   335	    }
   336	
   337	    // Filter by brand
   338	    if (selectedBrands.length > 0) {
   339	        filtered = filtered.filter(p => selectedBrands.includes(p.brand));
   340	    }
   341	
   342	    // Filter by price
   343	    if (priceRange !== 'all') {
   344	        if (priceRange === '0-1000') {
   345	            filtered = filtered.filter(p => p.price <= 1000);
   346	        } else if (priceRange === '1000-3000') {
   347	            filtered = filtered.filter(p => p.price > 1000 && p.price <= 3000);
   348	        } else if (priceRange === '3000+') {
   349	            filtered = filtered.filter(p => p.price > 3000);
   350	        }
   351	    }
   352	
   353	    displayProducts(filtered);
   354	}
   355	
   356	function searchProducts() {
   357	    const searchInput = document.getElementById('searchInput');
   358	    const searchTerm = searchInput.value.toLowerCase();
   359	
   360	    const filtered = products.filter(p =>
   361	        p.name.toLowerCase().includes(searchTerm) ||
   362	        p.description.toLowerCase().includes(searchTerm) ||
   363	        getCategoryName(p.category).includes(searchTerm)
   364	    );
   365	
   366	    displayProducts(filtered);
   367	}
   368	
   369	function sortProducts() {
   370	    const sortSelect = document.getElementById('sortSelect');
   371	    const sortValue = sortSelect.value;
   372	
   373	    let sorted = [...products];
   374	
   375	    switch (sortValue) {
   376	        case 'price-low':
   377	            sorted.sort((a, b) => a.price - b.price);
   378	            break;
   379	        case 'price-high':
   380	            sorted.sort((a, b) => b.price - a.price);
   381	            break;
   382	        case 'popular':
   383	            sorted.sort((a, b) => b.rating - a.rating);
   384	            break;
   385	        case 'newest':
   386	        default:
   387	            // Keep original order
   388	            break;
   389	    }
   390	
   391	    displayProducts(sorted);
   392	}
   393	
   394	// ==================== Initialize ====================
   395	document.addEventListener('DOMContentLoaded', () => {
   396	    displayProducts();
   397	    updateCartCount();
   398	});
