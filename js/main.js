// ==================== Navigation ====================
     2	const navbar = document.getElementById('navbar');
     3	const navToggle = document.getElementById('navToggle');
     4	const navMenu = document.getElementById('navMenu');
     5	
     6	// Scroll effect for navbar
     7	window.addEventListener('scroll', () => {
     8	    if (window.scrollY > 50) {
     9	        navbar.classList.add('scrolled');
    10	    } else {
    11	        navbar.classList.remove('scrolled');
    12	    }
    13	});
    14	
    15	// Mobile menu toggle
    16	if (navToggle) {
    17	    navToggle.addEventListener('click', () => {
    18	        navMenu.classList.toggle('active');
    19	    });
    20	}
    21	
    22	// ==================== Modal Functions ====================
    23	function showModal(modalId) {
    24	    const modal = document.getElementById(modalId);
    25	    if (modal) {
    26	        modal.style.display = 'block';
    27	        document.body.style.overflow = 'hidden';
    28	    }
    29	}
    30	
    31	function closeModal(modalId) {
    32	    const modal = document.getElementById(modalId);
    33	    if (modal) {
    34	        modal.style.display = 'none';
    35	        document.body.style.overflow = 'auto';
    36	    }
    37	}
    38	
    39	function switchModal(fromModalId, toModalId) {
    40	    closeModal(fromModalId);
    41	    showModal(toModalId);
    42	}
    43	
    44	// Close modal when clicking outside
    45	window.addEventListener('click', (e) => {
    46	    if (e.target.classList.contains('modal')) {
    47	        e.target.style.display = 'none';
    48	        document.body.style.overflow = 'auto';
    49	    }
    50	});
    51	
    52	// ==================== Smooth Scroll ====================
    53	function scrollToSection(sectionId) {
    54	    const section = document.getElementById(sectionId);
    55	    if (section) {
    56	        section.scrollIntoView({ behavior: 'smooth' });
    57	    }
    58	}
    59	
    60	// ==================== Form Handling ====================
    61	// Prevent default form submission for demo
    62	document.addEventListener('DOMContentLoaded', () => {
    63	    const forms = document.querySelectorAll('form');
    64	    forms.forEach(form => {
    65	        form.addEventListener('submit', (e) => {
    66	            e.preventDefault();
    67	            alert('此為演示網站，表單功能需要後端支持。\n完整功能需要接入真實的用戶認證系統。');
    68	        });
    69	    });
    70	});
    71	
    72	// ==================== Animation on Scroll ====================
    73	const observerOptions = {
    74	    threshold: 0.1,
    75	    rootMargin: '0px 0px -50px 0px'
    76	};
    77	
    78	const observer = new IntersectionObserver((entries) => {
    79	    entries.forEach(entry => {
    80	        if (entry.isIntersecting) {
    81	            entry.target.style.opacity = '1';
    82	            entry.target.style.transform = 'translateY(0)';
    83	        }
    84	    });
    85	}, observerOptions);
    86	
    87	// Observe all feature cards
    88	document.addEventListener('DOMContentLoaded', () => {
    89	    const animatedElements = document.querySelectorAll('.feature-card, .step');
    90	    animatedElements.forEach(el => {
    91	        el.style.opacity = '0';
    92	        el.style.transform = 'translateY(30px)';
    93	        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    94	        observer.observe(el);
    95	    });
    96	});
    97	
    98	// ==================== Utility Functions ====================
    99	// Show notification
   100	function showNotification(message, type = 'info') {
   101	    const notification = document.createElement('div');
   102	    notification.className = `notification notification-${type}`;
   103	    notification.textContent = message;
   104	    notification.style.cssText = `
   105	        position: fixed;
   106	        top: 100px;
   107	        right: 20px;
   108	        padding: 1rem 1.5rem;
   109	        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#2563eb'};
   110	        color: white;
   111	        border-radius: 8px;
   112	        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
   113	        z-index: 3000;
   114	        animation: slideInRight 0.3s ease;
   115	    `;
   116	    document.body.appendChild(notification);
   117	    
   118	    setTimeout(() => {
   119	        notification.style.animation = 'slideOutRight 0.3s ease';
   120	        setTimeout(() => {
   121	            notification.remove();
   122	        }, 300);
   123	    }, 3000);
   124	}
   125	
   126	// Add animation styles
   127	const style = document.createElement('style');
   128	style.textContent = `
   129	    @keyframes slideInRight {
   130	        from {
   131	            transform: translateX(400px);
   132	            opacity: 0;
   133	        }
   134	        to {
   135	            transform: translateX(0);
   136	            opacity: 1;
   137	        }
   138	    }
   139	    @keyframes slideOutRight {
   140	        from {
   141	            transform: translateX(0);
   142	            opacity: 1;
   143	        }
   144	        to {
   145	            transform: translateX(400px);
   146	            opacity: 0;
   147	        }
   148	    }
   149	`;
   150	document.head.appendChild(style);
