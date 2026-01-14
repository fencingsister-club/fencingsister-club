const clubs = [
     2	    {
     3	        id: 1,
     4	        name: '中環擊劍中心',
     5	        district: 'hk',
     6	        address: '香港中環德輔道中123號',
     7	        pistes: 6,
     8	        hourlyRate: 200,
     9	        features: ['專業裁判', '器材租借', '更衣室', '淋浴設施'],
    10	        hours: '週一至週日 08:00-22:00',
    11	        rating: 4.8
    12	    },
    13	    {
    14	        id: 2,
    15	        name: '銅鑼灣擊劍會',
    16	        district: 'hk',
    17	        address: '香港銅鑼灣軒尼詩道456號',
    18	        pistes: 4,
    19	        hourlyRate: 180,
    20	        features: ['器材租借', '更衣室', '儲物櫃'],
    21	        hours: '週一至週日 09:00-21:00',
    22	        rating: 4.6
    23	    },
    24	    {
    25	        id: 3,
    26	        name: '尖沙咀擊劍訓練中心',
    27	        district: 'kln',
    28	        address: '九龍尖沙咀彌敦道789號',
    29	        pistes: 8,
    30	        hourlyRate: 220,
    31	        features: ['專業裁判', '器材租借', '更衣室', '淋浴設施', '休息區'],
    32	        hours: '週一至週日 07:00-23:00',
    33	        rating: 4.9
    34	    },
    35	    {
    36	        id: 4,
    37	        name: '旺角劍擊館',
    38	        district: 'kln',
    39	        address: '九龍旺角彌敦道321號',
    40	        pistes: 5,
    41	        hourlyRate: 160,
    42	        features: ['器材租借', '更衣室'],
    43	        hours: '週一至週五 14:00-22:00, 週六日 10:00-20:00',
    44	        rating: 4.5
    45	    },
    46	    {
    47	        id: 5,
    48	        name: '沙田擊劍俱樂部',
    49	        district: 'nt',
    50	        address: '新界沙田沙田正街100號',
    51	        pistes: 10,
    52	        hourlyRate: 150,
    53	        features: ['專業裁判', '器材租借', '更衣室', '淋浴設施', '停車場'],
    54	        hours: '週一至週日 08:00-22:00',
    55	        rating: 4.7
    56	    },
    57	    {
    58	        id: 6,
    59	        name: '荃灣擊劍中心',
    60	        district: 'nt',
    61	        address: '新界荃灣大河道88號',
    62	        pistes: 6,
    63	        hourlyRate: 140,
    64	        features: ['器材租借', '更衣室', '停車場'],
    65	        hours: '週一至週日 09:00-21:00',
    66	        rating: 4.4
    67	    }
    68	];
    69	
    70	function displayClubs(clubsToShow = clubs) {
    71	    const grid = document.getElementById('clubsGrid');
    72	    if (!grid) return;
    73	
    74	    grid.innerHTML = clubsToShow.map(club => `
    75	        <div class="club-card">
    76	            <div class="club-image">🏛️</div>
    77	            <div class="club-info">
    78	                <h3 class="club-name">${club.name}</h3>
    79	                <div class="club-address">
    80	                    <i class="fas fa-map-marker-alt"></i>
    81	                    <span>${club.address}</span>
    82	                </div>
    83	                <div class="club-rating" style="color: var(--accent-color); margin-bottom: 1rem;">
    84	                    ${'★'.repeat(Math.floor(club.rating))}☆ ${club.rating}
    85	                </div>
    86	                <div class="club-features">
    87	                    ${club.features.map(f => `<span class="feature-tag"><i class="fas fa-check"></i> ${f}</span>`).join('')}
    88	                </div>
    89	                <p style="color: var(--text-light); margin-bottom: 1rem;">
    90	                    <i class="fas fa-clock"></i> ${club.hours}<br>
    91	                    <i class="fas fa-layer-group"></i> ${club.pistes} 條劍道
    92	                </p>
    93	                <div class="club-price">HKD ${club.hourlyRate}/小時</div>
    94	                <button class="btn-primary btn-full" onclick="bookClub(${club.id})">
    95	                    立即預訂
    96	                </button>
    97	            </div>
    98	        </div>
    99	    `).join('');
   100	}
   101	
   102	function filterClubs() {
   103	    const district = document.getElementById('districtFilter').value;
   104	    if (district === 'all') {
   105	        displayClubs(clubs);
   106	    } else {
   107	        const filtered = clubs.filter(c => c.district === district);
   108	        displayClubs(filtered);
   109	    }
   110	}
   111	
   112	function bookClub(clubId) {
   113	    const club = clubs.find(c => c.id === clubId);
   114	    if (!club) return;
   115	
   116	    const bookingContent = document.getElementById('bookingContent');
   117	    bookingContent.innerHTML = `
   118	        <h2>預訂劍道 - ${club.name}</h2>
   119	        <form onsubmit="handleBooking(event, ${clubId})">
   120	            <div class="form-group">
   121	                <label>預訂日期</label>
   122	                <input type="date" required min="${new Date().toISOString().split('T')[0]}">
   123	            </div>
   124	            <div class="form-group">
   125	                <label>開始時間</label>
   126	                <input type="time" required>
   127	            </div>
   128	            <div class="form-group">
   129	                <label>結束時間</label>
   130	                <input type="time" required>
   131	            </div>
   132	            <div class="form-group">
   133	                <label>劍道數量</label>
   134	                <select required>
   135	                    ${Array.from({length: club.pistes}, (_, i) => `<option value="${i+1}">${i+1}條劍道</option>`).join('')}
   136	                </select>
   137	            </div>
   138	            <div class="form-group">
   139	                <label>是否需要裁判</label>
   140	                <select>
   141	                    <option value="no">不需要</option>
   142	                    <option value="yes">需要 (+HKD 300)</option>
   143	                </select>
   144	            </div>
   145	            <div style="background: var(--bg-light); padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
   146	                <p><strong>費用：</strong>HKD ${club.hourlyRate}/小時/劍道</p>
   147	                <p style="color: var(--text-light); font-size: 0.9rem; margin-top: 0.5rem;">預計費用將在選擇時間後顯示</p>
   148	            </div>
   149	            <button type="submit" class="btn-primary btn-full">確認預訂</button>
   150	        </form>
   151	    `;
   152	    showModal('bookingModal');
   153	}
   154	
   155	function handleBooking(e, clubId) {
   156	    e.preventDefault();
   157	    alert('此為演示網站，場地預訂功能需要：\n\n1. 即時可用性檢查系統\n2. 支付網關集成\n3. 預訂管理系統\n4. 訊息通知服務\n\n完整功能需要複雜的場地管理後端。');
   158	    closeModal('bookingModal');
   159	}
   160	
   161	document.addEventListener('DOMContentLoaded', () => {
   162	    displayClubs();
   163	});
