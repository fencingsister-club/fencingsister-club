// ==================== Sample Video Data ====================
     2	const videos = [
     3	    {
     4	        id: 1,
     5	        title: '2024香港擊劍公開賽 - 女子重劍決賽精彩集錦',
     6	        category: 'competition',
     7	        description: '激烈的決賽對決，精彩的進攻與防守，不容錯過的精彩瞬間',
     8	        author: 'Fencingsister',
     9	        duration: '5:32',
    10	        views: 1250,
    11	        likes: 85,
    12	        uploadDate: '2024-01-15',
    13	        thumbnail: '🏆'
    14	    },
    15	    {
    16	        id: 2,
    17	        title: '擊劍基礎步法教學 - 適合初學者',
    18	        category: 'tutorial',
    19	        description: '從零開始學習擊劍基本步法，包括前進、後退、弓步等動作要領',
    20	        author: '陳教練',
    21	        duration: '12:45',
    22	        views: 3420,
    23	        likes: 156,
    24	        uploadDate: '2024-01-10',
    25	        thumbnail: '📚'
    26	    },
    27	    {
    28	        id: 3,
    29	        title: '專業劍手的日常訓練 - Vlog',
    30	        category: 'training',
    31	        description: '跟隨專業劍手體驗一天的訓練內容，了解職業選手的訓練強度',
    32	        author: '李明',
    33	        duration: '8:15',
    34	        views: 892,
    35	        likes: 67,
    36	        uploadDate: '2024-01-12',
    37	        thumbnail: '💪'
    38	    },
    39	    {
    40	        id: 4,
    41	        title: '花劍進攻技巧詳解',
    42	        category: 'tutorial',
    43	        description: '詳細講解花劍的各種進攻技巧，包括直刺、轉移攻擊等',
    44	        author: '王教練',
    45	        duration: '15:20',
    46	        views: 2180,
    47	        likes: 142,
    48	        uploadDate: '2024-01-08',
    49	        thumbnail: '⚔️'
    50	    },
    51	    {
    52	        id: 5,
    53	        title: '世界錦標賽經典對決回顧',
    54	        category: 'highlights',
    55	        description: '回顧歷屆世界錦標賽的經典對決，學習頂尖選手的技戰術',
    56	        author: 'FencingWorld',
    57	        duration: '18:30',
    58	        views: 5620,
    59	        likes: 312,
    60	        uploadDate: '2024-01-05',
    61	        thumbnail: '🌟'
    62	    },
    63	    {
    64	        id: 6,
    65	        title: '俱樂部友誼賽精彩瞬間',
    66	        category: 'competition',
    67	        description: '本地俱樂部友誼賽的精彩瞬間剪輯，感受擊劍的魅力',
    68	        author: '香港擊劍會',
    69	        duration: '6:48',
    70	        views: 756,
    71	        likes: 45,
    72	        uploadDate: '2024-01-13',
    73	        thumbnail: '🤺'
    74	    },
    75	    {
    76	        id: 7,
    77	        title: '佩劍戰術分析 - 進階篇',
    78	        category: 'tutorial',
    79	        description: '深入分析佩劍比賽中的戰術運用，提升你的比賽智商',
    80	        author: '張教練',
    81	        duration: '14:12',
    82	        views: 1890,
    83	        likes: 98,
    84	        uploadDate: '2024-01-06',
    85	        thumbnail: '🧠'
    86	    },
    87	    {
    88	        id: 8,
    89	        title: '青少年擊劍訓練營精彩回顧',
    90	        category: 'training',
    91	        description: '記錄青少年擊劍訓練營的精彩時刻，孩子們的成長歷程',
    92	        author: 'Fencingsister',
    93	        duration: '10:25',
    94	        views: 1340,
    95	        likes: 89,
    96	        uploadDate: '2024-01-11',
    97	        thumbnail: '👦'
    98	    },
    99	    {
   100	        id: 9,
   101	        title: '奧運擊劍項目十大精彩時刻',
   102	        category: 'highlights',
   103	        description: '盤點奧運會擊劍項目的十大精彩時刻，重溫經典瞬間',
   104	        author: 'Olympics Channel',
   105	        duration: '20:15',
   106	        views: 8920,
   107	        likes: 456,
   108	        uploadDate: '2024-01-03',
   109	        thumbnail: '🥇'
   110	    }
   111	];
   112	
   113	let currentFilter = 'all';
   114	
   115	// ==================== Display Videos ====================
   116	function displayVideos(videosToShow = videos) {
   117	    const videosGrid = document.getElementById('videosGrid');
   118	    if (!videosGrid) return;
   119	
   120	    if (videosToShow.length === 0) {
   121	        videosGrid.innerHTML = '<p style="text-align: center; padding: 3rem; color: var(--text-light); grid-column: 1 / -1;">沒有找到相關視頻</p>';
   122	        return;
   123	    }
   124	
   125	    videosGrid.innerHTML = videosToShow.map(video => `
   126	        <div class="video-card" onclick="playVideo(${video.id})">
   127	            <div class="video-thumbnail">
   128	                ${video.thumbnail}
   129	                <div class="video-duration">${video.duration}</div>
   130	            </div>
   131	            <div class="video-info">
   132	                <div class="video-category">${getCategoryName(video.category)}</div>
   133	                <h3 class="video-title">${video.title}</h3>
   134	                <p class="video-description">${video.description}</p>
   135	                <div class="video-meta">
   136	                    <div class="video-author">
   137	                        <i class="fas fa-user-circle"></i>
   138	                        <span>${video.author}</span>
   139	                    </div>
   140	                    <div class="video-stats">
   141	                        <span><i class="fas fa-eye"></i> ${formatNumber(video.views)}</span>
   142	                        <span><i class="fas fa-heart"></i> ${formatNumber(video.likes)}</span>
   143	                    </div>
   144	                </div>
   145	            </div>
   146	        </div>
   147	    `).join('');
   148	}
   149	
   150	function getCategoryName(category) {
   151	    const names = {
   152	        'all': '全部視頻',
   153	        'competition': '比賽集錦',
   154	        'tutorial': '教學視頻',
   155	        'training': '訓練日常',
   156	        'highlights': '精彩回放'
   157	    };
   158	    return names[category] || category;
   159	}
   160	
   161	function formatNumber(num) {
   162	    if (num >= 1000) {
   163	        return (num / 1000).toFixed(1) + 'K';
   164	    }
   165	    return num;
   166	}
   167	
   168	// ==================== Filter Videos ====================
   169	function filterVideos(category) {
   170	    currentFilter = category;
   171	    
   172	    // Update active tab
   173	    const tabs = document.querySelectorAll('.tab-btn');
   174	    tabs.forEach(tab => tab.classList.remove('active'));
   175	    event.target.classList.add('active');
   176	
   177	    // Filter and display
   178	    if (category === 'all') {
   179	        displayVideos(videos);
   180	    } else {
   181	        const filtered = videos.filter(v => v.category === category);
   182	        displayVideos(filtered);
   183	    }
   184	}
   185	
   186	// ==================== Play Video ====================
   187	function playVideo(videoId) {
   188	    const video = videos.find(v => v.id === videoId);
   189	    if (!video) return;
   190	
   191	    const videoPlayer = document.getElementById('videoPlayer');
   192	    videoPlayer.innerHTML = `
   193	        <div class="player-container">
   194	            <div style="width: 100%; height: 400px; background: linear-gradient(135deg, var(--primary-color), var(--secondary-color)); display: flex; align-items: center; justify-content: center; color: white; font-size: 4rem;">
   195	                ${video.thumbnail}
   196	            </div>
   197	        </div>
   198	        <div class="player-info">
   199	            <h2>${video.title}</h2>
   200	            <div class="player-meta">
   201	                <div class="video-author">
   202	                    <i class="fas fa-user-circle"></i>
   203	                    <span>${video.author}</span>
   204	                </div>
   205	                <div class="video-stats">
   206	                    <span><i class="fas fa-eye"></i> ${formatNumber(video.views)} 觀看</span>
   207	                    <span><i class="fas fa-calendar"></i> ${video.uploadDate}</span>
   208	                </div>
   209	            </div>
   210	            <p style="margin-top: 1rem; color: var(--text-light); line-height: 1.8;">${video.description}</p>
   211	            <div class="player-actions">
   212	                <button class="action-btn" onclick="toggleLike(${video.id})">
   213	                    <i class="fas fa-heart"></i> 
   214	                    <span id="likeCount-${video.id}">${video.likes}</span>
   215	                </button>
   216	                <button class="action-btn">
   217	                    <i class="fas fa-share"></i> 分享
   218	                </button>
   219	                <button class="action-btn">
   220	                    <i class="fas fa-flag"></i> 舉報
   221	                </button>
   222	            </div>
   223	        </div>
   224	        <p style="text-align: center; color: var(--text-light); margin-top: 2rem; font-size: 0.9rem;">
   225	            <i class="fas fa-info-circle"></i> 此為演示網站，實際視頻播放需要視頻流服務支持
   226	        </p>
   227	    `;
   228	
   229	    showModal('playerModal');
   230	}
   231	
   232	function toggleLike(videoId) {
   233	    const video = videos.find(v => v.id === videoId);
   234	    if (video) {
   235	        video.likes++;
   236	        const likeCount = document.getElementById(`likeCount-${videoId}`);
   237	        if (likeCount) {
   238	            likeCount.textContent = video.likes;
   239	        }
   240	        const btn = event.currentTarget;
   241	        btn.classList.toggle('liked');
   242	        showNotification('已點讚！', 'success');
   243	    }
   244	}
   245	
   246	// ==================== Upload Handling ====================
   247	function handleUpload(e) {
   248	    e.preventDefault();
   249	    alert('此為演示網站，視頻上傳功能需要：\n\n1. 後端視頻處理服務\n2. 雲端存儲（如AWS S3、Cloudinary）\n3. 視頻轉碼服務\n4. CDN加速分發\n\n完整功能需要專業的視頻平台架構。');
   250	    closeModal('uploadModal');
   251	}
   252	
   253	// ==================== Initialize ====================
   254	document.addEventListener('DOMContentLoaded', () => {
   255	    displayVideos();
   256	});
