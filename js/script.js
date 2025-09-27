// Portfolio Website JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Hide loading screen after delay
    setTimeout(() => {
        const loadingScreen = document.getElementById('loading');
        if (loadingScreen) {
            loadingScreen.classList.add('hidden');
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 500);
        }
    }, 1500);

    // Navigation functionality
    const navLinks = document.querySelectorAll('.nav-link');
    const contentSections = document.querySelectorAll('.content-section');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Remove active class from all links and sections
            navLinks.forEach(nav => nav.classList.remove('active'));
            contentSections.forEach(section => section.classList.remove('active'));
            
            // Add active class to clicked link
            link.classList.add('active');
            
            // Show corresponding section
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.add('active');
            }
        });
    });

    // Personalized chatbot responses for Sushant
    const chatResponses = {
        skills: [
            "Sushant has 5+ years of experience in AI/ML with expertise in Generative AI, including GPT-4, BERT, PyTorch, TensorFlow, AWS SageMaker, and Azure ML. He's worked extensively with LLM fine-tuning, RAG systems, and distributed training.",
            "His technical stack includes Python, C++, PyTorch, TensorFlow, AWS ML services, Azure cloud, Docker, Kubernetes, and specialized AI frameworks like LangChain, vLLM, and Transformers. He's also experienced with H100 GPU optimization.",
            "Sushant specializes in Generative AI, having fine-tuned meta-llama-3-8b-instruct with LoRA, developed RAG systems with GPT-4 and Pinecone, and built NER solutions that reduced costs by 60%."
        ],
        experience: [
            "Sushant is currently a Senior Software Engineer in Gen AI at Coforge, working on AI-powered fraud detection systems. He previously interned at Eve Communications, fine-tuning LLMs and optimizing inference on H100 GPUs.",
            "His experience spans multiple roles at Coforge and Accenture, where he built BERT-based classification models achieving 93% F1 score, developed ML workflows on AWS EMR, and created solutions that boosted conversions by 43%.",
            "He has experience in distributed training using FSDP on AWS SageMaker, model interpretability with LIME & SHAP, and has led teams in data science competitions, achieving 8th place in NVIDIA's competition at ODSC West 2024."
        ],
        projects: [
            "His notable projects include a Multi-AI RAG system for insurance using GPT-4 and Pinecone, an AI-powered robotic sorting system with TensorFlow and ROS2, and GPT-4 based NER solutions for loss run reports.",
            "Sushant built sophisticated systems like BERT-based support ticket classification, sentiment analysis agents that reduced escalations by 40%, and scalable ML workflows using PySpark and Docker on cloud platforms.",
            "He's worked on cutting-edge AI projects including LLM fine-tuning with distributed training, real-time fraud detection systems, and physics-informed neural networks for autonomous vehicles."
        ],
        education: [
            "Sushant is pursuing his Master's in Computer Engineering with AI/ML specialization at Texas A&M University (GPA: 3.5/4.0), with coursework in Machine Learning, Deep Learning, Computer Vision, and AI Robotics.",
            "His academic background provides strong foundations in scientific machine learning, computer vision, and AI systems, complementing his extensive industry experience in production AI/ML systems."
        ],
        achievements: [
            "Sushant co-authored a research paper on Physics-Informed Neural Networks for vehicle dynamics, presented at AIAA SciTech Forum 2025. He also led his team to 8th place in NVIDIA's Data Science Competition at ODSC West 2024.",
            "He's Microsoft Certified as an Azure AI Engineer Associate and has a proven track record of delivering AI solutions that achieve significant business impact - from 60% cost reductions to 93% model accuracy."
        ],
        contact: [
            "You can reach Sushant at sushantshelar121@gmail.com or call him at (979) 422-7607. He's based in West Bend, WI, and is always open to discussing AI/ML opportunities and collaborations.",
            "Connect with him on LinkedIn or GitHub to see more of his AI/ML work. He's particularly interested in Generative AI, LLM applications, and innovative ML solutions for real-world problems."
        ],
        default: [
            "I can tell you about Sushant's 5+ years of AI/ML experience, his work with Generative AI technologies like GPT-4 and BERT, his projects in fraud detection and RAG systems, or his achievements in research and competitions. What would you like to know?",
            "Sushant is an AI Engineer specializing in Generative AI, with experience at companies like Coforge and Eve Communications. Feel free to ask about his technical skills, projects, education at Texas A&M, or his publications and certifications!"
        ]
    };

    // Enhanced chatbot functionality
    const chatInput = document.querySelector('.chat-input');
    const sendButton = document.querySelector('.send-button');

    function getBotResponse(userMessage) {
        const lowerMessage = userMessage.toLowerCase();
        let category = 'default';
        
        if (lowerMessage.includes('skill') || lowerMessage.includes('technology') || lowerMessage.includes('gpt') || lowerMessage.includes('bert') || lowerMessage.includes('pytorch') || lowerMessage.includes('aws')) {
            category = 'skills';
        } else if (lowerMessage.includes('experience') || lowerMessage.includes('work') || lowerMessage.includes('job') || lowerMessage.includes('coforge') || lowerMessage.includes('eve')) {
            category = 'experience';
        } else if (lowerMessage.includes('project') || lowerMessage.includes('rag') || lowerMessage.includes('robot') || lowerMessage.includes('fraud')) {
            category = 'projects';
        } else if (lowerMessage.includes('education') || lowerMessage.includes('degree') || lowerMessage.includes('texas') || lowerMessage.includes('university')) {
            category = 'education';
        } else if (lowerMessage.includes('achievement') || lowerMessage.includes('publication') || lowerMessage.includes('nvidia') || lowerMessage.includes('research') || lowerMessage.includes('certified')) {
            category = 'achievements';
        } else if (lowerMessage.includes('contact') || lowerMessage.includes('email') || lowerMessage.includes('phone') || lowerMessage.includes('reach')) {
            category = 'contact';
        }

        const responses = chatResponses[category];
        return responses[Math.floor(Math.random() * responses.length)];
    }

    if (chatInput && sendButton) {
        const sendMessage = () => {
            const message = chatInput.value.trim();
            if (message) {
                console.log('User message:', message);
                chatInput.value = '';
                
                // Simulate bot response
                setTimeout(() => {
                    const response = getBotResponse(message);
                    console.log('Bot response:', response);
                    // You can add visual feedback here when implementing the full chat UI
                }, 1000);
            }
        };

        sendButton.addEventListener('click', sendMessage);
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    }

    // Profile image click effect
    const profileImage = document.querySelector('.profile-image img');
    if (profileImage) {
        let clickCount = 0;
        profileImage.addEventListener('click', () => {
            clickCount++;
            profileImage.style.transform = `rotate(${clickCount * 90}deg) scale(1.05)`;
            
            if (clickCount >= 4) {
                clickCount = 0;
                setTimeout(() => {
                    profileImage.style.transform = 'rotate(0deg) scale(1)';
                }, 200);
            }
        });
    }

    console.log('Sushant Shelar\'s Portfolio loaded successfully!');
});


