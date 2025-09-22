// Initialize Lucide icons
lucide.createIcons();

// Mobile menu functionality
document.getElementById('mobile-menu-btn').addEventListener('click', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('hidden');
});

// Projects data
const projects = [
    {
        id: 1,
        title: "University Admin & Infrastructure Portal",
        subtitle: "Revolutionary Full-Stack Academic Management System",
        date: "December 15th, 1925",
        byline: "By T. Sontakke, Chief Systems Engineer",
        category: "ENTERPRISE SYSTEMS",
        description: "Miss Sontakke has engineered a comprehensive University Administrative Portal utilizing the most advanced React machinery and Flask engineering principles. This remarkable system facilitates faculty onboarding, academic scheduling, and administrative workflows with unprecedented security through JWT authentication and Role-Based Access Control mechanisms. The system has revolutionized university operations by implementing modular microservice architecture.",
        techStack: ["React.js Apparatus", "Flask Engine", "MySQL Archive", "Azure DevOps Telegraph", "Docker Steamworks", "Terraform Infrastructure"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center",
        alt: "University Portal System"
    },
    {
        id: 2,
        title: "AI-Based Academic Productivity Agent",
        subtitle: "Intelligent Conversational Assistant Using Advanced Learning Mechanisms", 
        date: "November 8th, 1925",
        byline: "By Artificial Intelligence Correspondent",
        category: "MECHANICAL LEARNING",
        description: "In a groundbreaking achievement, Miss Sontakke has developed a lightweight intelligent agent utilizing Llama2 mechanical learning engines and Hugging Face Transformers. This remarkable chatbot assists students with academic queries and personalized study planning, achieving a 20% increase in user engagement through sophisticated prompt engineering and natural language processing capabilities.",
        techStack: ["Llama2 Engine", "Hugging Face Transformers", "Gradio Interface", "Flask API", "Docker Containers", "Azure Monitor Telegraph"],
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop&crop=center",
        alt: "AI Academic Assistant"
    },
    {
        id: 3,
        title: "Azure Enterprise Infrastructure Automation",
        subtitle: "Revolutionary Cloud Infrastructure for Chevron Corporation",
        date: "October 22nd, 1925",
        byline: "By Cloud Infrastructure Editor", 
        category: "INDUSTRIAL AUTOMATION",
        description: "Miss Sontakke has architected and deployed extraordinary Azure Virtual Machine infrastructure using advanced CLI operations, ARM Templates, and Ansible automation. This industrial-grade system has accelerated enterprise releases by an astounding 80% while reducing operational overhead by 15%. The system implements sophisticated CI/CD automation with Azure DevOps and Jenkins for high-stakes enterprise deployments.",
        techStack: ["Azure Virtual Machines", "Terraform Infrastructure", "Jenkins Automation", "PowerShell Scripts", "Azure DevOps Pipeline", "Log Analytics Engine"],
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop&crop=center",
        alt: "Cloud Infrastructure"
    }
];

// Skills data
const skills = [
    {
        category: "Programming Languages",
        icon: "code",
        items: ["Python Engineering", "Java Apparatus", "JavaScript Machinery", "C++ Frameworks", "SQL Database Language"]
    },
    {
        category: "Cloud & DevOps Operations", 
        icon: "cloud",
        items: ["Azure Platform Systems", "Terraform Infrastructure", "Docker Containerization", "Jenkins Automation", "GitHub Actions Pipeline"]
    },
    {
        category: "AI & Machine Learning",
        icon: "cpu", 
        items: ["Llama2 Engine", "Hugging Face Transformers", "Gradio Interface Systems", "Prompt Engineering", "RAG Architecture"]
    },
    {
        category: "Backend & Database Systems",
        icon: "database",
        items: ["Flask API Framework", "MySQL Database", "PostgreSQL Systems", "RESTful API Design", "JWT Authentication"]
    }
];

// Render projects
function renderProjects() {
    const container = document.getElementById('projects-container');
    
    projects.forEach((project, index) => {
        const projectElement = document.createElement('article');
        projectElement.className = 'slide-in';
        projectElement.style.animationDelay = `${index * 200}ms`;
        
        projectElement.innerHTML = `
            <div class="vintage-article">
                <div class="bg-gray-800 text-white p-2 -mx-8 -mt-8 mb-6">
                    <div class="flex justify-between items-center">
                        <span class="font-bold text-sm uppercase tracking-wider">
                            ${project.category}
                        </span>
                        <span class="text-sm">${project.date}</span>
                    </div>
                </div>
                
                <div class="grid lg:grid-cols-4 gap-8">
                    <div class="lg:col-span-3">
                        <h3 class="text-3xl md:text-4xl font-black mb-2 leading-tight text-gray-900">
                            ${project.title}
                        </h3>
                        <h4 class="text-xl text-gray-700 mb-4 font-bold italic border-b-2 border-gray-300 pb-2">
                            ${project.subtitle}
                        </h4>
                        <p class="text-xs text-gray-600 mb-4 font-bold uppercase tracking-wide">
                            ${project.byline}
                        </p>
                        
                        <p class="text-lg leading-relaxed text-gray-800 mb-6">
                            <span class="drop-cap">T</span>
                            ${project.description}
                        </p>
                        
                        <div class="border-t-2 border-gray-300 pt-4 mb-6">
                            <h5 class="font-bold mb-2 text-sm uppercase tracking-wide">Technical Specifications:</h5>
                            <div class="flex flex-wrap gap-2">
                                ${project.techStack.map(tech => 
                                    `<span class="px-3 py-1 bg-gray-800 text-white text-sm font-bold uppercase tracking-wide">${tech}</span>`
                                ).join('')}
                            </div>
                        </div>
                        
                        <div class="flex space-x-4">
                            <a href="https://github.com/tanujasontakke" class="vintage-button" target="_blank">
                                <i data-lucide="github" class="w-4 h-4 mr-2"></i>
                                View Blueprints
                            </a>
                            <a href="https://www.linkedin.com/in/tanuja-sontakke/" class="vintage-button-outline" target="_blank">
                                <i data-lucide="external-link" class="w-4 h-4 mr-2"></i>
                                Professional Network
                            </a>
                        </div>
                    </div>
                    
                    <div class="lg:col-span-1">
                        <div class="border-4 border-gray-800 shadow-lg overflow-hidden h-64">
                            <img 
                                src="${project.image}" 
                                alt="${project.alt}"
                                class="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
                            />
                        </div>
                        <p class="text-xs text-center mt-2 font-bold uppercase tracking-wide text-gray-600">
                            Technical Illustration
                        </p>
                    </div>
                </div>
            </div>
        `;
        
        container.appendChild(projectElement);
    });
}

// Render skills
function renderSkills() {
    const container = document.getElementById('skills-container');
    
    skills.forEach(skill => {
        const skillElement = document.createElement('div');
        skillElement.className = 'skill-card';
        
        skillElement.innerHTML = `
            <div class="skill-header">
                <div class="skill-icon">
                    <i data-lucide="${skill.icon}" class="w-5 h-5"></i>
                </div>
                <h4 class="skill-title">${skill.category}</h4>
            </div>
            <div class="skill-list">
                <ul class="space-y-2">
                    ${skill.items.map(item => 
                        `<li class="skill-item">
                            <div class="skill-bullet"></div>
                            ${item}
                        </li>`
                    ).join('')}
                </ul>
            </div>
        `;
        
        container.appendChild(skillElement);
    });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
        
        // Close mobile menu if open
        const mobileMenu = document.getElementById('mobile-menu');
        mobileMenu.classList.add('hidden');
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('slide-in');
        }
    });
}, observerOptions);

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    renderProjects();
    renderSkills();
    
    // Re-initialize Lucide icons after dynamic content
    setTimeout(() => {
        lucide.createIcons();
    }, 100);
    
    // Observe elements for animation
    document.querySelectorAll('.slide-in').forEach(el => {
        observer.observe(el);
    });
});

// Download resume function
function downloadResume() {
    // You can replace this with a link to your actual resume
    alert('Resume download functionality - replace with your actual resume link!');
    // Example: window.open('path/to/your/resume.pdf', '_blank');
}

// Add some interactive newspaper effects
function addNewspaperEffects() {
    // Add subtle vintage effects on scroll
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallax = document.querySelector('.vintage-bg');
        const speed = scrolled * 0.1;
        
        if (parallax) {
            parallax.style.transform = `translateY(${speed}px)`;
        }
    });
}

// Initialize newspaper effects
addNewspaperEffects();
