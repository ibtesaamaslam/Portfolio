// script.js for animations and dynamic content

document.addEventListener('DOMContentLoaded', () => {

    const data = {
        experience: [
            {
                side: 'left',
                title: 'AI Engineer',
                company: 'DAM TECHHUB',
                date: 'May 2025 - Present',
                description: 'Contributing to cutting-edge AI solutions that aim to solve real-world problems using Machine Learning, Deep Learning, NLP, and more.'
            },
            {
                side: 'right',
                title: 'Artificial Intelligence Programmer (Intern)',
                company: 'Digital Empowerment Network',
                date: 'June 2024 - July 2024',
                description: 'Developed and fine-tuned machine learning algorithms for predictive models and intelligent solutions, focusing on data preprocessing, model development, and creating AI applications for predictive analysis and recommendation systems.'
            }
        ],
        projects: [
            { name: 'Agentic Language Assistant (EchoVerse)', description: 'An AI-powered language learning tool for kids (ages 6–12) using Hugging Face, speech-to-text APIs, and gamified interfaces.', tech: ['Hugging Face', 'APIs', 'Gamification', 'Agentic AI'] },
            { name: 'Multi-modal Car Entrance System', description: 'Engineered a smart access system using biometrics, voice, gesture, and license plate recognition, achieving 98% real-time accuracy.', tech: ['Biometrics', 'Computer Vision', 'NLP'] },
            { name: 'AI Weaver (GenAI Project)', description: 'Used GANs to generate customizable textile designs with 95% user approval, streamlining design workflows for small businesses.', tech: ['Generative AI', 'GANs', 'Computer Vision'] },
            { name: 'Handwritten Digit Recognizer', description: 'Created a high-accuracy CNN in TensorFlow, deployed via Flask, enabling instant digit detection through a simple web interface.', tech: ['TensorFlow', 'CNN', 'Flask', 'Deep Learning'] },
            { name: 'NLP Sentiment Classifier', description: 'Built a real-time text classification pipeline using SVM and Naive Bayes with 85% accuracy on live user input.', tech: ['NLP', 'Machine Learning', 'Python'] },
            { name: 'Customer Churn Prediction', description: 'Designed an ANN model with 92% accuracy, helping businesses retain at-risk users through predictive analytics.', tech: ['Deep Learning', 'ANN', 'Python'] },
            { name: 'Data Cube Model', description: 'Designed a multi-dimensional data cube to efficiently organize and analyze large datasets, enabling faster query processing and insightful data analytics.', tech: ['Data Modeling', 'OLAP', 'Python'] },
            { name: 'Emotion Responsive Storytelling', description: 'Developed an interactive narrative system where the story adapts in real-time to the user\'s detected emotional state, creating a personalized experience.', tech: ['NLP', 'Emotion AI', 'Python', 'Generative AI'] },
            { name: 'EMO-VOICE AI', description: 'Engineered an AI that analyzes vocal patterns to detect and respond to emotional cues, enhancing human-computer interaction in voice-based applications.', tech: ['Speech Recognition', 'Emotion AI', 'Signal Processing'] },
            { name: 'G2Prosody', description: 'A grapheme-to-prosody model for generating natural-sounding speech with appropriate rhythm and intonation from text inputs.', tech: ['TTS', 'Deep Learning', 'NLP'] },
            { name: 'Gesture Recognition System', description: 'Built a real-time system capable of identifying and interpreting hand gestures via a camera feed, enabling touchless control interfaces.', tech: ['Computer Vision', 'OpenCV', 'CNN'] },
            { name: 'Image Recognition Model', description: 'Trained and deployed a robust image recognition model to classify objects within images with high accuracy, using deep learning techniques.', tech: ['Deep Learning', 'CNN', 'TensorFlow'] },
            { name: 'Iron-Man JARVIS', description: 'A voice-activated personal assistant inspired by Iron Man\'s JARVIS, capable of executing commands, fetching information, and controlling smart devices.', tech: ['NLP', 'Voice UI', 'Python', 'Agentic AI'] },
            { name: 'JARVIS Mood System', description: 'An extension to the JARVIS project that detects user mood from text or voice and adjusts its interaction style accordingly.', tech: ['Sentiment Analysis', 'Emotion AI', 'NLP'] },
            { name: 'K-Neighbour Classifier', description: 'Implemented the K-Nearest Neighbors algorithm from scratch to build a versatile classification model for pattern recognition tasks.', tech: ['Machine Learning', 'Scikit-learn', 'Python'] },
            { name: 'Linear Regression Model', description: 'Developed a predictive model using linear regression to forecast trends and outcomes based on historical data.', tech: ['Machine Learning', 'Statistics', 'Python'] },
            { name: 'Markov Chain Model', description: 'Created a Markov Chain model to simulate and predict sequential data, useful for text generation and behavior modeling.', tech: ['Probability', 'NLP', 'Python'] },
            { name: 'Music Recommendation System', description: 'Designed a content-based and collaborative filtering system to provide personalized music recommendations to users.', tech: ['Machine Learning', 'Python'] },
            { name: 'PDF Merger', description: 'A utility script developed in Python to programmatically combine multiple PDF documents into a single file, streamlining document management.', tech: ['Python', 'Scripting'] },
            { name: 'Perceptron Based Binary Classification', description: 'Constructed a single-layer perceptron for binary classification tasks, demonstrating foundational principles of neural networks.', tech: ['Machine Learning', 'Python'] },
            { name: 'Photo Editor using Python', description: 'A desktop application with core photo editing capabilities like filtering, cropping, and adjustments, built using Python and image processing libraries.', tech: ['OpenCV', 'Python'] },
            { name: 'Sign Sense', description: 'A sign language recognition system using computer vision to translate hand signs into text or speech, improving accessibility.', tech: ['Computer Vision', 'Deep Learning', 'ASL'] },
            { name: 'Spam Mail Prediction Model', description: 'Built a machine learning model to effectively classify emails as spam or not-spam using natural language processing techniques.', tech: ['NLP', 'Machine Learning', 'Scikit-learn'] },
            { name: 'Tik Tak Toe Game', description: 'Developed a classic Tic-Tac-Toe game with an unbeatable AI opponent using the minimax algorithm.', tech: ['Game AI', 'Algorithms', 'Python'] },
            { name: 'Virtual Drawing App', description: 'An application that allows users to draw on a digital canvas by moving their fingers in front of a camera, powered by computer vision.', tech: ['Computer Vision', 'OpenCV', 'HCI'] },
            { name: 'Youtube Downloader using Python', description: 'A simple yet effective Python script to download YouTube videos in various resolutions and formats.', tech: ['Python', 'Scripting', 'API'] }
        ],
        skills: [
            { name: 'Project Management', icon: 'fas fa-tasks' },
            { name: 'Machine Learning', icon: 'fas fa-cogs' },
            { name: 'Deep Learning', icon: 'fas fa-robot' },
            { name: 'Python', icon: 'fab fa-python' },
            { name: 'TensorFlow', icon: 'fas fa-brain' },
            { name: 'Generative AI', icon: 'fas fa-magic' },
            { name: 'NLP', icon: 'fas fa-comments' },
            { name: 'Computer Vision', icon: 'fas fa-eye' },
            { name: 'Git & GitHub', icon: 'fab fa-git-alt' },
            { name: 'SQL', icon: 'fas fa-database' },
            { name: 'Flask', icon: 'fas fa-server' },
            { name: 'UI/UX Design', icon: 'fas fa-palette'}
        ],
        education: {
            university: 'National University of Modern Languages (NUML)',
            degree: 'Bachelor of Science - BS, Artificial Intelligence',
            period: 'February 2022 - February 2026'
        },
        certifications: [
            'ChatGPT Prompt Engineering',
            'Microsoft Azure AI Essentials',
            'Professional Certificate by Microsoft and LinkedIn',
            'Hands-On Generative AI with Multi-Agent LangChain'
        ]
    };

    // --- Dynamic Content Injection ---
    
    const experienceTimeline = document.getElementById('experience-timeline');
    if (experienceTimeline) {
        experienceTimeline.innerHTML = data.experience.map(exp => `
            <div class="timeline-item ${exp.side}">
                <div class="timeline-content">
                    <h3>${exp.title}</h3>
                    <div class="timeline-company">${exp.company}</div>
                    <div class="timeline-date">${exp.date}</div>
                    <p class="timeline-description">${exp.description}</p>
                </div>
            </div>
        `).join('');
    }

    const projectsGrid = document.getElementById('projects-grid');
    const projectFilterNav = document.getElementById('project-filter-nav');
    if (projectsGrid && projectFilterNav) {
        // Populate projects
        projectsGrid.innerHTML = data.projects.map(proj => {
            const techCategories = proj.tech.map(t => t.toLowerCase().replace(/\s+/g, '-')).join(' ');
            return `
                <div class="project-card" data-category="${techCategories}">
                    <h3>${proj.name}</h3>
                    <p>${proj.description}</p>
                    <div class="project-tech">
                        ${proj.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
                    </div>
                </div>
            `;
        }).join('');

        // Create and populate filter buttons
        const allTech = new Set(data.projects.flatMap(p => p.tech));
        const filterButtons = ['All', ...allTech];
        projectFilterNav.innerHTML = filterButtons.map(tech => 
            `<button class="filter-btn ${tech === 'All' ? 'active' : ''}" data-filter="${tech.toLowerCase().replace(/\s+/g, '-')}">${tech}</button>`
        ).join('');
        
        // Add filter functionality
        const projectCards = document.querySelectorAll('.project-card');
        projectFilterNav.addEventListener('click', (e) => {
            if (e.target.tagName === 'BUTTON') {
                const filter = e.target.dataset.filter;
                
                // Update active button
                projectFilterNav.querySelector('.active').classList.remove('active');
                e.target.classList.add('active');

                // Filter cards
                projectCards.forEach(card => {
                    const categories = card.dataset.category;
                    if (filter === 'all' || categories.includes(filter)) {
                        card.classList.remove('hide');
                    } else {
                        card.classList.add('hide');
                    }
                });
            }
        });
    }


    const skillsGrid = document.getElementById('skills-grid');
    if (skillsGrid) {
        skillsGrid.innerHTML = data.skills.map(skill => `
            <div class="skill-card">
                <i class="${skill.icon}"></i>
                <span>${skill.name}</span>
            </div>
        `).join('');
    }

    const educationContent = document.getElementById('education-content');
    if (educationContent && data.education) {
        educationContent.innerHTML = `
            <div class="education-item">
                <h3>${data.education.university}</h3>
                <h4>${data.education.degree}</h4>
                <p>${data.education.period}</p>
            </div>
        `;
    }

    const certificationsList = document.getElementById('certifications-list');
    if (certificationsList) {
        certificationsList.innerHTML = data.certifications.map(cert => `<li>${cert}</li>`).join('');
    }

    // --- Interactivity ---

    const typingElement = document.getElementById('typing-effect');
    if (typingElement) {
        const titles = ["AI Engineer", "ML | DL | CV | NLP | Generative AI", "Agentic AI Systems Developer"];
        let titleIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function type() {
            const currentTitle = titles[titleIndex];
            const typeSpeed = isDeleting ? 75 : 150;

            if (isDeleting) {
                typingElement.textContent = currentTitle.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typingElement.textContent = currentTitle.substring(0, charIndex + 1);
                charIndex++;
            }

            if (!isDeleting && charIndex === currentTitle.length) {
                setTimeout(() => isDeleting = true, 2000); // Pause at end
                setTimeout(type, 2000 + typeSpeed);
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                titleIndex = (titleIndex + 1) % titles.length;
                setTimeout(type, 500); // Pause before new word
            } else {
                setTimeout(type, typeSpeed);
            }
        }
        setTimeout(type, 500);
    }

    const hamburger = document.getElementById('hamburger-menu');
    const navLinks = document.querySelector('.nav-links');
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }

    const sections = document.querySelectorAll('.fade-in-section');
    const projectSection = document.getElementById('projects');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');

                // Staggered animation for project cards
                if (entry.target.id === 'projects') {
                    const projectCards = entry.target.querySelectorAll('.project-card');
                    projectCards.forEach((card, index) => {
                        card.style.transitionDelay = `${index * 75}ms`;
                        card.classList.add('visible');
                    });
                }
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });

    const yearSpan = document.getElementById('copyright-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});