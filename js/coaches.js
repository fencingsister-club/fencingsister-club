const coaches = [
     2	    {
     3	        id: 1,
     4	        name: '陳sir教練',
     5	        specialty: 'epee',
     6	        level: ['beginner', 'intermediate', 'advanced'],
     7	        experience: 12,
     8	        rating: 4.9,
     9	        reviews: 156,
    10	        hourlyRate: 800,
    11	        certifications: ['FIE認證教練', '香港體育學院教練證書', '國家一級裁判'],
    12	        description: '擁有12年教學經驗，曾培養多名全港冠軍選手。教學風格嚴謹而不失趣味。',
    13	        availability: ['週一至週五 18:00-21:00', '週六日 10:00-18:00'],
    14	        verified: true
    15	    },
    16	    {
    17	        id: 2,
    18	        name: '王教練',
    19	        specialty: 'foil',
    20	        level: ['beginner', 'intermediate'],
    21	        experience: 8,
    22	        rating: 4.7,
    23	        reviews: 98,
    24	        hourlyRate: 650,
    25	        certifications: ['國家二級教練', 'FIE認證裁判'],
    26	        description: '專注花劍教學，擅長技術細節指導，適合初中級學員。',
    27	        availability: ['週一三五 19:00-21:00', '週日 14:00-17:00'],
    28	        verified: true
    29	    },
    30	    {
    31	        id: 3,
    32	        name: '李教練',
    33	        specialty: 'sabre',
    34	        level: ['intermediate', 'advanced'],
    35	        experience: 15,
    36	        rating: 4.8,
    37	        reviews: 203,
    38	        hourlyRate: 900,
    39	        certifications: ['前香港代表隊成員', 'FIE認證教練', '亞洲錦標賽銅牌'],
    40	        description: '前香港代表隊隊員，專精佩劍進攻戰術，適合有基礎的學員提升競技水平。',
    41	        availability: ['週二四六 18:00-21:00'],
    42	        verified: true
    43	    },
    44	    {
    45	        id: 4,
    46	        name: '張教練',
    47	        specialty: 'epee',
    48	        level: ['beginner'],
    49	        experience: 5,
    50	        rating: 4.5,
    51	        reviews: 42,
    52	        hourlyRate: 450,
    53	        certifications: ['香港擊劍總會教練證書'],
    54	        description: '年輕有活力的教練，特別擅長與青少年溝通，讓初學者快速入門。',
    55	        availability: ['週一至週五 17:00-20:00', '週六 10:00-16:00'],
    56	        verified: false
    57	    },
    58	    {
    59	        id: 5,
    60	        name: '黃教練',
    61	        specialty: 'foil',
    62	        level: ['beginner', 'intermediate', 'advanced'],
    63	        experience: 10,
    64	        rating: 4.8,
    65	        reviews: 134,
    66	        hourlyRate: 750,
    67	        certifications: ['FIE認證教練', '全國錦標賽冠軍', '國家一級運動員'],
    68	        description: '全國錦標賽冠軍得主，擁有豐富的比賽和教學經驗，各級別學員皆可。',
    69	        availability: ['週三五日 14:00-20:00'],
    70	        verified: true
    71	    },
    72	    {
    73	        id: 6,
    74	        name: '林教練',
    75	        specialty: 'sabre',
    76	        level: ['beginner', 'intermediate'],
    77	        experience: 6,
    78	        rating: 4.6,
    79	        reviews: 67,
    80	        hourlyRate: 550,
    81	        certifications: ['香港體育學院證書', '國家二級運動員'],
    82	        description: '佩劍專項教練，注重基本功訓練，讓學員打好紮實基礎。',
    83	        availability: ['週一二四 18:30-21:30'],
    84	        verified: true
    85	    }
    86	];
    87	
    88	function displayCoaches(coachesToShow = coaches) {
    89	    const grid = document.getElementById('coachesGrid');
    90	    if (!grid) return;
    91	
    92	    if (coachesToShow.length === 0) {
    93	        grid.innerHTML = '<p style="text-align: center; padding: 3rem; color: var(--text-light); grid-column: 1 / -1;">沒有找到符合條件的教練</p>';
    94	        return;
    95	    }
    96	
    97	    grid.innerHTML = coachesToShow.map(coach => `
    98	        <div class="coach-card" onclick="showCoachProfile(${coach.id})">
    99	            <div class="coach-avatar">👨‍🏫</div>
   100	            ${coach.verified ? '<div class="coach-badge"><i class="fas fa-check-circle"></i> 已認證</div>' : ''}
   101	            <h3 class="coach-name">${coach.name}</h3>
   102	            <div class="coach-specialty">${getSpecialtyName(coach.specialty)}</div>
   103	            <div class="coach-rating">
   104	                ${'★'.repeat(Math.floor(coach.rating))}☆ ${coach.rating} (${coach.reviews}條評價)
   105	            </div>
   106	            <div class="coach-experience">${coach.experience}年教學經驗</div>
   107	            <div class="coach-price">HKD ${coach.hourlyRate}/小時</div>
   108	            <button class="btn-primary btn-full" onclick="event.stopPropagation(); bookCoach(${coach.id})">
   109	                預約課程
   110	            </button>
   111	        </div>
   112	    `).join('');
   113	}
   114	
   115	function getSpecialtyName(specialty) {
   116	    const names = { 'epee': '重劍專項', 'foil': '花劍專項', 'sabre': '佩劍專項', 'all': '全項' };
   117	    return names[specialty] || specialty;
   118	}
   119	
   120	function showCoachProfile(coachId) {
   121	    const coach = coaches.find(c => c.id === coachId);
   122	    if (!coach) return;
   123	
   124	    const profile = document.getElementById('coachProfile');
   125	    profile.innerHTML = `
   126	        <div style="display: grid; grid-template-columns: 1fr 2fr; gap: 2rem;">
   127	            <div style="text-align: center;">
   128	                <div class="coach-avatar" style="width: 150px; height: 150px; font-size: 4rem;">👨‍🏫</div>
   129	                <h2 style="margin-top: 1rem;">${coach.name}</h2>
   130	                ${coach.verified ? '<div class="coach-badge"><i class="fas fa-check-circle"></i> 已認證</div>' : ''}
   131	                <div class="coach-rating" style="margin: 1rem 0;">
   132	                    ${'★'.repeat(Math.floor(coach.rating))}☆ ${coach.rating}<br>
   133	                    <small>${coach.reviews}條評價</small>
   134	                </div>
   135	                <div class="coach-price">HKD ${coach.hourlyRate}/小時</div>
   136	                <p style="color: var(--text-light); margin: 1rem 0;">平台收費: 15%</p>
   137	                <button class="btn-primary btn-full" onclick="bookCoach(${coach.id})">立即預約</button>
   138	            </div>
   139	            <div>
   140	                <h3 style="margin-bottom: 1rem;">教練資訊</h3>
   141	                <p style="color: var(--text-light); line-height: 1.8; margin-bottom: 1.5rem;">${coach.description}</p>
   142	                
   143	                <div style="background: var(--bg-light); padding: 1.5rem; border-radius: 8px; margin-bottom: 1.5rem;">
   144	                    <h4 style="margin-bottom: 1rem;"><i class="fas fa-medal"></i> 專項與經驗</h4>
   145	                    <p><strong>專項：</strong>${getSpecialtyName(coach.specialty)}</p>
   146	                    <p><strong>教學經驗：</strong>${coach.experience}年</p>
   147	                    <p><strong>教學級別：</strong>${coach.level.map(l => getLevelName(l)).join('、')}</p>
   148	                </div>
   149	
   150	                <div style="background: var(--bg-light); padding: 1.5rem; border-radius: 8px; margin-bottom: 1.5rem;">
   151	                    <h4 style="margin-bottom: 1rem;"><i class="fas fa-certificate"></i> 資格證書</h4>
   152	                    <ul style="list-style: none;">
   153	                        ${coach.certifications.map(cert => `<li style="padding: 0.5rem 0;"><i class="fas fa-check" style="color: var(--success-color);"></i> ${cert}</li>`).join('')}
   154	                    </ul>
   155	                </div>
   156	
   157	                <div style="background: var(--bg-light); padding: 1.5rem; border-radius: 8px;">
   158	                    <h4 style="margin-bottom: 1rem;"><i class="fas fa-clock"></i> 可預約時間</h4>
   159	                    <ul style="list-style: none;">
   160	                        ${coach.availability.map(time => `<li style="padding: 0.5rem 0;"><i class="fas fa-calendar"></i> ${time}</li>`).join('')}
   161	                    </ul>
   162	                </div>
   163	            </div>
   164	        </div>
   165	    `;
   166	    showModal('coachModal');
   167	}
   168	
   169	function getLevelName(level) {
   170	    const names = { 'beginner': '初級', 'intermediate': '中級', 'advanced': '高級' };
   171	    return names[level] || level;
   172	}
   173	
   174	function bookCoach(coachId) {
   175	    alert('此為演示網站，教練預約功能需要：\n\n1. 日曆預約系統\n2. 支付網關集成\n3. 訊息通知系統\n4. 課程管理系統\n\n完整功能類似Uber平台架構。');
   176	}
   177	
   178	function searchCoaches() {
   179	    const searchTerm = document.getElementById('searchCoach').value.toLowerCase();
   180	    const filtered = coaches.filter(c => 
   181	        c.name.toLowerCase().includes(searchTerm) ||
   182	        c.description.toLowerCase().includes(searchTerm)
   183	    );
   184	    displayCoaches(filtered);
   185	}
   186	
   187	function filterCoaches() {
   188	    const specialty = document.getElementById('filterSpecialty').value;
   189	    const level = document.getElementById('filterLevel').value;
   190	    
   191	    let filtered = coaches;
   192	    
   193	    if (specialty !== 'all') {
   194	        filtered = filtered.filter(c => c.specialty === specialty);
   195	    }
   196	    
   197	    if (level !== 'all') {
   198	        filtered = filtered.filter(c => c.level.includes(level));
   199	    }
   200	    
   201	    displayCoaches(filtered);
   202	}
   203	
   204	function handleCoachRegistration(e) {
   205	    e.preventDefault();
   206	    alert('此為演示網站，教練註冊功能需要後端審核系統。\n申請將提交給平台審核，審核通過後即可開始接受預約。');
   207	    closeModal('registerCoachModal');
   208	}
   209	
   210	document.addEventListener('DOMContentLoaded', () => {
   211	    displayCoaches();
   212	});
