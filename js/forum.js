// ============================================
// 論壇數據與功能
// ============================================

// 示範論壇帖子數據
const forumPosts = [
    {
        id: 1,
        category: 'technique',
        title: '重劍反擊時機的掌握',
        preview: '最近在練習重劍反擊，想請教各位高手關於時機的掌握技巧...',
        author: {
            name: 'Fencingsister',
            avatar: '👩‍🦰',
            role: 'admin'
        },
        replies: 23,
        views: 456,
        likes: 34,
        timestamp: new Date('2024-01-10'),
        pinned: true,
        tags: ['重劍', '技術討論', '反擊']
    },
    {
        id: 2,
        category: 'equipment',
        title: '新手裝備推薦（預算HKD 5000內）',
        preview: '剛開始學擊劍，想問問大家有什麼性價比高的裝備推薦？預算大概5000港幣...',
        author: {
            name: '擊劍新手',
            avatar: '🧑',
            role: 'member'
        },
        replies: 45,
        views: 892,
        likes: 67,
        timestamp: new Date('2024-01-09'),
        pinned: false,
        tags: ['裝備', '新手', '推薦']
    },
    {
        id: 3,
        category: 'competition',
        title: '2024香港公開賽報名開始了！',
        preview: '今年的香港公開賽將於3月舉行，現在開始接受報名，歡迎各位劍手參加...',
        author: {
            name: '賽事組委會',
            avatar: '🏆',
            role: 'moderator'
        },
        replies: 78,
        views: 1523,
        likes: 145,
        timestamp: new Date('2024-01-08'),
        pinned: true,
        tags: ['比賽', '公開賽', '報名']
    },
    {
        id: 4,
        category: 'beginner',
        title: '第一次去俱樂部需要注意什麼？',
        preview: '計劃這周末去俱樂部體驗，想問問有什麼需要注意的禮儀或準備？',
        author: {
            name: '小白劍客',
            avatar: '😊',
            role: 'member'
        },
        replies: 31,
        views: 678,
        likes: 52,
        timestamp: new Date('2024-01-07'),
        pinned: false,
        tags: ['新手', '俱樂部', '禮儀']
    },
    {
        id: 5,
        category: 'technique',
        title: '花劍的步法訓練心得分享',
        preview: '練習花劍三年了，總結了一些步法訓練的經驗，希望對大家有幫助...',
        author: {
            name: '花劍達人',
            avatar: '👨‍🏫',
            role: 'member'
        },
        replies: 56,
        views: 1234,
        likes: 98,
        timestamp: new Date('2024-01-06'),
        pinned: false,
        tags: ['花劍', '步法', '訓練']
    },
    {
        id: 6,
        category: 'equipment',
        title: 'Leon Paul vs Allstar 面罩對比',
        preview: '最近在考慮換面罩，這兩個品牌都很有名，想聽聽大家的使用體驗...',
        author: {
            name: '裝備控',
            avatar: '🎭',
            role: 'member'
        },
        replies: 42,
        views: 967,
        likes: 73,
        timestamp: new Date('2024-01-05'),
        pinned: false,
        tags: ['面罩', '品牌對比', 'Leon Paul', 'Allstar']
    },
    {
        id: 7,
        category: 'competition',
        title: '如何克服比賽緊張？',
        preview: '每次比賽都會很緊張，影響發揮，請問大家有什麼好的心理調節方法？',
        author: {
            name: '緊張小劍',
            avatar: '😰',
            role: 'member'
        },
        replies: 67,
        views: 1445,
        likes: 112,
        timestamp: new Date('2024-01-04'),
        pinned: false,
        tags: ['比賽', '心理', '經驗分享']
    },
    {
        id: 8,
        category: 'beginner',
        title: '重劍、花劍、佩劍該選哪個？',
        preview: '想開始學擊劍，但不知道選哪個劍種比較好，可以給些建議嗎？',
        author: {
            name: '選擇困難症',
            avatar: '🤔',
            role: 'member'
        },
        replies: 89,
        views: 2156,
        likes: 156,
        timestamp: new Date('2024-01-03'),
        pinned: false,
        tags: ['新手', '劍種選擇', '建議']
    }
];

// 當前選擇的分類
let currentCategory = 'all';

// ============================================
// 顯示論壇帖子
// ============================================
function displayPosts(category = 'all') {
    const postsContainer = document.getElementById('postsContainer');
    
    // 過濾帖子
    let filteredPosts = category === 'all' 
        ? forumPosts 
        : forumPosts.filter(post => post.category === category);
    
    // 排序：置頂帖子在前，然後按時間倒序
    filteredPosts.sort((a, b) => {
        if (a.pinned && !b.pinned) return -1;
        if (!a.pinned && b.pinned) return 1;
        return b.timestamp - a.timestamp;
    });
    
    // 生成帖子HTML
    postsContainer.innerHTML = filteredPosts.map(post => `
        <div class="forum-post ${post.pinned ? 'pinned' : ''}" onclick="viewPost(${post.id})">
            <div class="post-header">
                <div class="post-author">
                    <span class="author-avatar">${post.author.avatar}</span>
                    <div class="author-info">
                        <span class="author-name">
                            ${post.author.name}
                            ${post.author.role === 'admin' ? '<span class="role-badge admin">管理員</span>' : ''}
                            ${post.author.role === 'moderator' ? '<span class="role-badge mod">版主</span>' : ''}
                        </span>
                        <span class="post-time">${formatTime(post.timestamp)}</span>
                    </div>
                </div>
                ${post.pinned ? '<span class="pin-badge"><i class="fas fa-thumbtack"></i> 置頂</span>' : ''}
            </div>
            
            <h3 class="post-title">
                <i class="fas ${getCategoryIcon(post.category)}"></i>
                ${post.title}
            </h3>
            
            <p class="post-preview">${post.preview}</p>
            
            <div class="post-tags">
                ${post.tags.map(tag => `<span class="tag">#${tag}</span>`).join('')}
            </div>
            
            <div class="post-stats">
                <span><i class="fas fa-eye"></i> ${post.views}</span>
                <span><i class="fas fa-comment"></i> ${post.replies}</span>
                <span><i class="fas fa-heart"></i> ${post.likes}</span>
            </div>
        </div>
    `).join('');
}

// ============================================
// 分類切換
// ============================================
function filterByCategory(category) {
    currentCategory = category;
    
    // 更新按鈕樣式
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // 顯示對應分類的帖子
    displayPosts(category);
}

// ============================================
// 獲取分類圖標
// ============================================
function getCategoryIcon(category) {
    const icons = {
        'technique': 'fa-brain',
        'equipment': 'fa-shield-alt',
        'competition': 'fa-trophy',
        'beginner': 'fa-graduation-cap'
    };
    return icons[category] || 'fa-comment';
}

// ============================================
// 獲取分類名稱（中文）
// ============================================
function getCategoryName(category) {
    const names = {
        'technique': '技術討論',
        'equipment': '裝備交流',
        'competition': '比賽資訊',
        'beginner': '新手專區'
    };
    return names[category] || '全部';
}

// ============================================
// 格式化時間
// ============================================
function formatTime(date) {
    const now = new Date();
    const diff = now - date;
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);
    
    if (minutes < 1) return '剛剛';
    if (minutes < 60) return `${minutes}分鐘前`;
    if (hours < 24) return `${hours}小時前`;
    if (days < 7) return `${days}天前`;
    
    return date.toLocaleDateString('zh-HK', { month: 'short', day: 'numeric' });
}

// ============================================
// 查看帖子詳情
// ============================================
function viewPost(postId) {
    const post = forumPosts.find(p => p.id === postId);
    if (!post) return;
    
    alert(`查看帖子：${post.title}\n\n這是演示版本。\n\n完整論壇功能需要實現：\n✓ 帖子詳細頁面\n✓ 回覆系統\n✓ 用戶認證\n✓ 內容管理\n✓ 通知系統`);
}

// ============================================
// 顯示發帖表單
// ============================================
function showNewTopicForm() {
    document.getElementById('newTopicModal').classList.add('active');
}

// ============================================
// 關閉模態框
// ============================================
function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
}

// ============================================
// 處理發帖表單提交
// ============================================
function handleNewTopic(event) {
    event.preventDefault();
    
    const title = document.getElementById('topicTitle').value;
    const category = document.getElementById('topicCategory').value;
    const content = document.getElementById('topicContent').value;
    
    alert(`發表新帖子：\n\n標題：${title}\n分類：${getCategoryName(category)}\n\n這是演示版本。\n\n完整發帖功能需要實現：\n✓ 後端API接口\n✓ 用戶認證系統\n✓ 內容審核機制\n✓ 富文本編輯器\n✓ 圖片/視頻上傳\n✓ 數據庫存儲`);
    
    // 關閉模態框並重置表單
    closeModal('newTopicModal');
    event.target.reset();
}

// ============================================
// 點擊模態框外部關閉
// ============================================
window.addEventListener('click', (event) => {
    if (event.target.classList.contains('modal')) {
        event.target.classList.remove('active');
    }
});

// ============================================
// 頁面加載時初始化
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    displayPosts();
    
    // 綁定發帖表單提交
    const newTopicForm = document.getElementById('newTopicForm');
    if (newTopicForm) {
        newTopicForm.addEventListener('submit', handleNewTopic);
    }
});
