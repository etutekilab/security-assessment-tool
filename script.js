const QUESTIONS_PER_PAGE = 5;

const assessmentData = {
    sections: [
        {
            title: "1. Organizational & Governance",
            questions: [
                {
                    id: 1,
                    text: "Does your organization have written security policies for: user behavior, remote access, data handling, encryption, backups, incident response, and system security?",
                    options: ["Yes", "Partially", "No", "N/A"]
                },
                {
                    id: 2,
                    text: "How often do you review and update your security policies and share updates with staff?",
                    options: ["Regularly (Yearly or after incidents)", "Sometimes", "Rarely/Never", "N/A"]
                },
                {
                    id: 3,
                    text: "Do you keep track of changes in privacy laws (like HIPAA, GDPR) and update your policies to stay compliant?",
                    options: ["Yes", "Partially", "No", "N/A"]
                },
                {
                    id: 4,
                    text: "Do you regularly check for security weaknesses through risk assessments and security testing?",
                    options: ["Yes", "Partially", "No", "N/A"]
                },
                {
                    id: 5,
                    text: "Do you track and review security metrics to measure how well your security program is working?",
                    options: ["Yes", "Partially", "No", "N/A"]
                },
                {
                    id: 6,
                    text: "Are job responsibilities clearly defined, especially for users with high-level access rights?",
                    options: ["Yes", "Partially", "No", "N/A"]
                }
            ]
        },
        {
            title: "2. Data Protection",
            questions: [
                {
                    id: 7,
                    text: "Do you maintain a list of all your data and classify it by sensitivity (public, internal, confidential)?",
                    options: ["Yes", "Partially", "No", "N/A"]
                },
                {
                    id: 8,
                    text: "Do you have clear rules for how different types of data should be handled and accessed?",
                    options: ["Yes", "Partially", "No", "N/A"]
                },
                {
                    id: 9,
                    text: "Do you have clear policies for how long to keep data and how to safely delete it when no longer needed?",
                    options: ["Yes", "Partially", "No", "N/A"]
                }
            ]
        },
        {
            title: "3. Network Security",
            questions: [
                {
                    id: 10,
                    text: "Is your WiFi network split between guest and company use, and protected with strong security (WPA2/WPA3)?",
                    options: ["Yes", "Partially", "No", "N/A"]
                },
                {
                    id: 11,
                    text: "Do you use VPNs or secure gateways for remote access, with proper monitoring in place?",
                    options: ["Yes", "Partially", "No", "N/A"]
                },
                {
                    id: 12,
                    text: "Do you have a process for safely making changes to network devices (routers, firewalls) and keeping them updated?",
                    options: ["Yes", "Partially", "No", "N/A"]
                }
            ]
        },
        {
            title: "4. Cloud Services Security",
            questions: [
                {
                    id: 13,
                    text: "Do you regularly check your cloud settings for security issues and review access logs?",
                    options: ["Yes", "Partially", "No", "N/A"]
                },
                {
                    id: 14,
                    text: "Do you secure cloud apps with strong passwords, two-factor authentication, and regular access reviews?",
                    options: ["Yes", "Partially", "No", "N/A"]
                },
                {
                    id: 15,
                    text: "Is sensitive data encrypted when stored and transferred in cloud services, with data loss prevention measures in place?",
                    options: ["Yes", "Partially", "No", "N/A"]
                }
            ]
        },
        {
            title: "5. Backup & Recovery",
            questions: [
                {
                    id: 16,
                    text: "Do you have a written plan for how often to backup important data and where to store it safely?",
                    options: ["Yes", "Partially", "No", "N/A"]
                },
                {
                    id: 17,
                    text: "Do you regularly test if you can successfully restore data from your backups?",
                    options: ["Yes", "Partially", "No", "N/A"]
                },
                {
                    id: 18,
                    text: "Are your backups stored securely and in compliance with data privacy laws?",
                    options: ["Yes", "Partially", "No", "N/A"]
                }
            ]
        },
        {
            title: "6. User Access Management",
            questions: [
                {
                    id: 19,
                    text: "Do you have a secure process for creating and removing user accounts, using two-factor authentication where possible?",
                    options: ["Yes", "Partially", "No", "N/A"]
                },
                {
                    id: 20,
                    text: "Do you have extra security measures for administrator accounts (like monitoring and alerts)?",
                    options: ["Yes", "Partially", "No", "N/A"]
                },
                {
                    id: 21,
                    text: "Do you enforce strong password rules and encourage/require the use of password managers?",
                    options: ["Yes", "Partially", "No", "N/A"]
                }
            ]
        },
        {
            title: "7. Email & File Sharing Security",
            questions: [
                {
                    id: 22,
                    text: "Do you protect sensitive emails with encryption and have measures to prevent phishing attacks?",
                    options: ["Yes", "Partially", "No", "N/A"]
                },
                {
                    id: 23,
                    text: "Are sharing settings in tools like Office 365 or Google Workspace properly set up and monitored?",
                    options: ["Yes", "Partially", "No", "N/A"]
                },
                {
                    id: 24,
                    text: "Do you have clear rules for internal file sharing and regularly review who has access?",
                    options: ["Yes", "Partially", "No", "N/A"]
                },
                {
                    id: 25,
                    text: "When sharing files externally, do you use passwords, expiration dates, and restricted access?",
                    options: ["Yes", "Partially", "No", "N/A"]
                },
                {
                    id: 26,
                    text: "Do you have systems in place to prevent unauthorized sharing of sensitive data?",
                    options: ["Yes", "Partially", "No", "N/A"]
                }
            ]
        },
        {
            title: "8. Device Security",
            questions: [
                {
                    id: 27,
                    text: "Do you keep an updated list of all company devices (computers, phones, IoT devices) and manage their lifecycle?",
                    options: ["Yes", "Partially", "No", "N/A"]
                },
                {
                    id: 28,
                    text: "Are all devices protected with up-to-date antivirus and security software?",
                    options: ["Yes", "Partially", "No", "N/A"]
                },
                {
                    id: 29,
                    text: "Do you have standard security settings for devices and regularly check they're properly configured?",
                    options: ["Yes", "Partially", "No", "N/A"]
                },
                {
                    id: 30,
                    text: "Do you have a schedule for installing security updates on all devices?",
                    options: ["Yes", "Partially", "No", "N/A"]
                },
                {
                    id: 31,
                    text: "Do you have security measures for personal devices used for work (like encryption and remote wiping)?",
                    options: ["Yes", "Partially", "No", "N/A"]
                }
            ]
        },
        {
            title: "9. Application Security",
            questions: [
                {
                    id: 32,
                    text: "Do you maintain a list of approved software and have a process for approving new applications?",
                    options: ["Yes", "Partially", "No", "N/A"]
                },
                {
                    id: 33,
                    text: "Do you regularly test your applications for security weaknesses?",
                    options: ["Yes", "Partially", "No", "N/A"]
                },
                {
                    id: 34,
                    text: "Do you include security testing in your software development process?",
                    options: ["Yes", "Partially", "No", "N/A"]
                },
                {
                    id: 35,
                    text: "Are your applications set up securely and regularly checked for security issues?",
                    options: ["Yes", "Partially", "No", "N/A"]
                },
                {
                    id: 36,
                    text: "Do your applications record security events and do you have a plan for handling security incidents?",
                    options: ["Yes", "Partially", "No", "N/A"]
                }
            ]
        },
        {
            title: "10. Security Monitoring & Response",
            questions: [
                {
                    id: 37,
                    text: "Do you have a written plan for handling security incidents that you test and update regularly?",
                    options: ["Yes", "Partially", "No", "N/A"]
                },
                {
                    id: 38,
                    text: "Do you collect and monitor security logs from all important systems in one place?",
                    options: ["Yes", "Partially", "No", "N/A"]
                },
                {
                    id: 39,
                    text: "Do you investigate security incidents thoroughly and use lessons learned to improve security?",
                    options: ["Yes", "Partially", "No", "N/A"]
                }
            ]
        },
        {
            title: "11. Vendor Security",
            questions: [
                {
                    id: 40,
                    text: "Do you check the security practices of your vendors and service providers regularly?",
                    options: ["Yes", "Partially", "No", "N/A"]
                },
                {
                    id: 41,
                    text: "When sharing data with vendors, do you use secure methods and have proper agreements in place?",
                    options: ["Yes", "Partially", "No", "N/A"]
                }
            ]
        },
        {
            title: "12. Security Training",
            questions: [
                {
                    id: 42,
                    text: "Do you provide regular security training to employees, including phishing simulations?",
                    options: ["Yes", "Partially", "No", "N/A"]
                },
                {
                    id: 43,
                    text: "Do you effectively communicate security policies and updates to all staff?",
                    options: ["Yes", "Partially", "No", "N/A"]
                }
            ]
        },
        {
            title: "13. Physical Security",
            questions: [
                {
                    id: 44,
                    text: "Do you have physical security measures (like badges and visitor logs) that you regularly review?",
                    options: ["Yes", "Partially", "No", "N/A"]
                },
                {
                    id: 45,
                    text: "Do you have proper environmental controls (temperature, power backup, fire protection) for critical areas?",
                    options: ["Yes", "Partially", "No", "N/A"]
                }
            ]
        }
    ]
};

let currentPage = 0;
let totalQuestions = 0;

function createProgressBar() {
    const progressContainer = document.createElement('div');
    progressContainer.className = 'progress-container';

    const progressInfo = document.createElement('div');
    progressInfo.className = 'progress-info';

    const questionCount = document.createElement('span');
    questionCount.id = 'question-count';
    
    const progressPercentage = document.createElement('span');
    progressPercentage.id = 'progress-percentage';

    progressInfo.appendChild(questionCount);
    progressInfo.appendChild(progressPercentage);

    const progressBar = document.createElement('div');
    progressBar.className = 'progress-bar';
    
    const progressFill = document.createElement('div');
    progressFill.className = 'progress-fill';
    progressFill.id = 'progress-fill';

    progressBar.appendChild(progressFill);
    progressContainer.appendChild(progressInfo);
    progressContainer.appendChild(progressBar);

    return progressContainer;
}

function updateProgress(answeredQuestions) {
    const progressFill = document.getElementById('progress-fill');
    const questionCount = document.getElementById('question-count');
    const progressPercentage = document.getElementById('progress-percentage');
    
    const progress = (answeredQuestions / totalQuestions) * 100;
    progressFill.style.width = `${progress}%`;
    
    const remainingQuestions = totalQuestions - answeredQuestions;
    questionCount.textContent = `Questions Remaining: ${remainingQuestions}`;
    progressPercentage.textContent = `${Math.round(progress)}% Complete`;
}

function createNavigationButtons() {
    const navContainer = document.createElement('div');
    navContainer.className = 'navigation-buttons';

    const prevButton = document.createElement('button');
    prevButton.className = 'btn secondary';
    prevButton.innerHTML = '<i class="fas fa-arrow-left"></i> Previous';
    prevButton.onclick = showPreviousPage;
    prevButton.id = 'prev-button';

    const nextButton = document.createElement('button');
    nextButton.className = 'btn primary';
    nextButton.innerHTML = 'Next <i class="fas fa-arrow-right"></i>';
    nextButton.onclick = showNextPage;
    nextButton.id = 'next-button';

    navContainer.appendChild(prevButton);
    navContainer.appendChild(nextButton);

    return navContainer;
}

function showPage(pageNumber) {
    const sections = document.querySelectorAll('.section-card');
    sections.forEach((section, index) => {
        if (Math.floor(index / QUESTIONS_PER_PAGE) === pageNumber) {
            section.classList.remove('hidden');
        } else {
            section.classList.add('hidden');
        }
    });

    const prevButton = document.getElementById('prev-button');
    const nextButton = document.getElementById('next-button');

    prevButton.style.visibility = pageNumber === 0 ? 'hidden' : 'visible';
    nextButton.textContent = pageNumber === Math.ceil(sections.length / QUESTIONS_PER_PAGE) - 1 
        ? 'Finish' 
        : 'Next';
}

function showNextPage() {
    currentPage++;
    showPage(currentPage);
    updateProgress(getAnsweredQuestionsCount());
}

function showPreviousPage() {
    if (currentPage > 0) {
        currentPage--;
        showPage(currentPage);
        updateProgress(getAnsweredQuestionsCount());
    }
}

function getAnsweredQuestionsCount() {
    return document.querySelectorAll('.option-btn.selected').length;
}

function createSection(section) {
    const sectionElement = document.createElement('div');
    sectionElement.className = 'section-card';
    
    const title = document.createElement('h2');
    title.textContent = section.title;
    sectionElement.appendChild(title);

    section.questions.forEach(question => {
        sectionElement.appendChild(createQuestion(question));
    });

    return sectionElement;
}

function createEvidenceSection(questionId) {
    const evidenceSection = document.createElement('div');
    evidenceSection.className = 'evidence-section';
    
    const header = document.createElement('div');
    header.className = 'evidence-header';
    
    const title = document.createElement('span');
    title.textContent = 'Supporting Evidence';
    
    const uploadInput = document.createElement('input');
    uploadInput.type = 'file';
    uploadInput.multiple = true;
    uploadInput.accept = 'image/*,.pdf,.doc,.docx';
    uploadInput.className = 'evidence-upload';
    uploadInput.id = `evidence-upload-${questionId}`;
    
    const uploadTrigger = document.createElement('label');
    uploadTrigger.className = 'upload-trigger';
    uploadTrigger.htmlFor = `evidence-upload-${questionId}`;
    uploadTrigger.innerHTML = '<i class="fas fa-upload"></i> Add Evidence';
    
    const evidenceList = document.createElement('div');
    evidenceList.className = 'evidence-list';
    
    header.appendChild(title);
    header.appendChild(uploadInput);
    header.appendChild(uploadTrigger);
    
    evidenceSection.appendChild(header);
    evidenceSection.appendChild(evidenceList);
    
    // Handle file uploads
    uploadInput.addEventListener('change', async (e) => {
        const files = Array.from(e.target.files);
        
        for (const file of files) {
            const evidenceItem = document.createElement('div');
            evidenceItem.className = 'evidence-item';
            
            if (file.type.startsWith('image/')) {
                const img = document.createElement('img');
                img.src = URL.createObjectURL(file);
                evidenceItem.appendChild(img);
            } else {
                const docPreview = document.createElement('div');
                docPreview.className = 'document-preview';
                docPreview.innerHTML = `<i class="fas fa-file"></i> ${file.name}`;
                evidenceItem.appendChild(docPreview);
            }
            
            const removeBtn = document.createElement('button');
            removeBtn.className = 'remove-evidence';
            removeBtn.innerHTML = '<i class="fas fa-times"></i>';
            removeBtn.onclick = () => evidenceItem.remove();
            
            evidenceItem.appendChild(removeBtn);
            evidenceList.appendChild(evidenceItem);
        }
    });
    
    return evidenceSection;
}

function createQuestion(question) {
    const questionElement = document.createElement('div');
    questionElement.className = 'question';
    questionElement.dataset.questionId = question.id;
    
    const questionText = document.createElement('p');
    questionText.textContent = question.text;
    questionElement.appendChild(questionText);

    // Add AI assistance
    const { aiButton, aiPanel } = createAIAssistanceButton(question);
    questionElement.appendChild(aiButton);
    questionElement.appendChild(aiPanel);

    const options = document.createElement('div');
    options.className = 'options';
    
    question.options.forEach(option => {
        const button = document.createElement('button');
        button.className = 'option-btn';
        button.textContent = option;
        button.onclick = () => selectOption(button, options);
        options.appendChild(button);
    });

    questionElement.appendChild(options);

    const notes = document.createElement('div');
    notes.className = 'notes';
    
    // Create notes header with AI suggest button
    const notesHeader = document.createElement('div');
    notesHeader.className = 'notes-header';
    
    const aiNotesButton = document.createElement('button');
    aiNotesButton.className = 'ai-notes-btn';
    aiNotesButton.innerHTML = '<i class="fas fa-magic"></i> Suggest Notes';
    aiNotesButton.onclick = async () => {
        const selectedAnswer = questionElement.querySelector('.option-btn.selected')?.textContent;
        if (!selectedAnswer) {
            showNotification('Please select an answer first', 'warning');
            return;
        }
        
        aiNotesButton.disabled = true;
        aiNotesButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Generating...';
        
        const suggestedNotes = await getAINotes(question.text, selectedAnswer);
        const textarea = notes.querySelector('textarea');
        textarea.value = suggestedNotes;
        
        aiNotesButton.disabled = false;
        aiNotesButton.innerHTML = '<i class="fas fa-magic"></i> Suggest Notes';
    };
    
    notesHeader.appendChild(aiNotesButton);
    notes.appendChild(notesHeader);
    
    const textarea = document.createElement('textarea');
    textarea.placeholder = 'Additional notes...';
    textarea.rows = 3;
    notes.appendChild(textarea);
    
    questionElement.appendChild(notes);

    // Add evidence section after notes
    questionElement.appendChild(createEvidenceSection(question.id));

    return questionElement;
}

function selectOption(selectedButton, optionsContainer) {
    const buttons = optionsContainer.getElementsByClassName('option-btn');
    Array.from(buttons).forEach(button => {
        button.classList.remove('selected');
    });
    selectedButton.classList.add('selected');
    updateProgress(getAnsweredQuestionsCount());
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Add keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        showNextPage();
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        showPreviousPage();
    } else if (e.key >= '1' && e.key <= '4') {
        const activeQuestion = document.querySelector('.question:not(.hidden)');
        if (activeQuestion) {
            const options = activeQuestion.querySelectorAll('.option-btn');
            const index = parseInt(e.key) - 1;
            if (options[index]) {
                selectOption(options[index], options[index].parentElement);
            }
        }
    }
});

function addSearchFunction() {
    const searchContainer = document.createElement('div');
    searchContainer.className = 'search-container';
    
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = 'Search questions...';
    searchInput.className = 'search-input';
    
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        
        document.querySelectorAll('.question').forEach(question => {
            const text = question.querySelector('p').textContent.toLowerCase();
            const matches = text.includes(searchTerm);
            question.style.display = matches ? 'block' : 'none';
        });
    });
    
    searchContainer.appendChild(searchInput);
    return searchContainer;
}

function exportAssessment() {
    const results = {
        organization: document.getElementById('org-name').value,
        date: new Date().toISOString(),
        sections: []
    };
    
    assessmentData.sections.forEach(section => {
        const sectionResults = {
            title: section.title,
            questions: []
        };
        
        section.questions.forEach(question => {
            const questionEl = document.querySelector(`[data-question-id="${question.id}"]`);
            const answer = questionEl.querySelector('.option-btn.selected')?.textContent || 'Not Answered';
            const notes = questionEl.querySelector('textarea').value;
            
            // Get evidence files
            const evidenceFiles = Array.from(questionEl.querySelectorAll('.evidence-item'))
                .map(item => {
                    const img = item.querySelector('img');
                    const doc = item.querySelector('.document-preview');
                    return {
                        type: img ? 'image' : 'document',
                        name: doc ? doc.textContent : 'Image',
                        data: img ? img.src : null
                    };
                });
            
            sectionResults.questions.push({
                question: question.text,
                answer,
                notes,
                evidence: evidenceFiles
            });
        });
        
        results.sections.push(sectionResults);
    });
    
    // Generate PDF or Excel with evidence
    generateReport(results);
}

function addQuickEvidenceButtons() {
    const quickButtons = document.createElement('div');
    quickButtons.className = 'quick-evidence-buttons';
    quickButtons.innerHTML = `
        <button class="quick-btn" data-action="screenshot">
            <i class="fas fa-camera"></i> Paste Screenshot
        </button>
        <button class="quick-btn" data-action="clipboard">
            <i class="fas fa-clipboard"></i> Paste Text
        </button>
    `;
    
    // Handle paste events
    document.addEventListener('paste', (e) => {
        const activeEvidence = document.activeElement.closest('.evidence-section');
        if (activeEvidence) {
            const items = e.clipboardData.items;
            for (let item of items) {
                if (item.type.indexOf('image') !== -1) {
                    const file = item.getAsFile();
                    handleEvidenceFile(file, activeEvidence.querySelector('.evidence-list'));
                }
            }
        }
    });
    
    return quickButtons;
}

function addDragDropSupport(evidenceSection) {
    evidenceSection.addEventListener('dragover', (e) => {
        e.preventDefault();
        evidenceSection.classList.add('drag-over');
    });

    evidenceSection.addEventListener('dragleave', () => {
        evidenceSection.classList.remove('drag-over');
    });

    evidenceSection.addEventListener('drop', (e) => {
        e.preventDefault();
        evidenceSection.classList.remove('drag-over');
        
        const files = Array.from(e.dataTransfer.files);
        files.forEach(file => {
            handleEvidenceFile(file, evidenceSection.querySelector('.evidence-list'));
        });
    });
}

function createQuickNav() {
    const quickNav = document.createElement('div');
    quickNav.className = 'quick-nav';
    
    const sections = assessmentData.sections.map(section => `
        <div class="quick-nav-item" data-section="${section.title}">
            <span class="section-number">${section.title.split('.')[0]}</span>
            <span class="section-status">
                <i class="fas fa-circle"></i>
            </span>
        </div>
    `).join('');
    
    quickNav.innerHTML = sections;
    return quickNav;
}

// Add theme switching functions
function createThemeSwitcher() {
    const themeSwitcher = document.createElement('div');
    themeSwitcher.className = 'theme-switcher';
    
    const darkButton = document.createElement('button');
    darkButton.className = 'theme-switcher-button active';
    darkButton.innerHTML = '<i class="fas fa-moon"></i>';
    darkButton.onclick = () => setTheme('dark');
    
    const lightButton = document.createElement('button');
    lightButton.className = 'theme-switcher-button';
    lightButton.innerHTML = '<i class="fas fa-sun"></i>';
    lightButton.onclick = () => setTheme('light');
    
    themeSwitcher.appendChild(darkButton);
    themeSwitcher.appendChild(lightButton);
    
    return themeSwitcher;
}

function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('preferred-theme', theme);
    
    // Update button states
    const buttons = document.querySelectorAll('.theme-switcher-button');
    buttons.forEach(button => {
        button.classList.remove('active');
        if (
            (theme === 'dark' && button.innerHTML.includes('fa-moon')) ||
            (theme === 'light' && button.innerHTML.includes('fa-sun'))
        ) {
            button.classList.add('active');
        }
    });
}

function initializeTheme() {
    // Check for saved theme preference or system preference
    const savedTheme = localStorage.getItem('preferred-theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
        setTheme(savedTheme);
    } else {
        setTheme(systemPrefersDark ? 'dark' : 'light');
    }
}

// Update the initialization code
document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    
    // Add lead collection form
    container.appendChild(createLeadForm());
    
    const form = document.getElementById('assessment-form');
    
    // Add theme switcher
    document.body.appendChild(createThemeSwitcher());
    initializeTheme();
    
    // Add progress bar
    form.appendChild(createProgressBar());
    
    // Add sections
    assessmentData.sections.forEach(section => {
        totalQuestions += section.questions.length;
        form.appendChild(createSection(section));
    });
    
    // Add navigation buttons
    form.appendChild(createNavigationButtons());
    
    // Add search function
    form.appendChild(addSearchFunction());
    
    // Add quick evidence buttons
    form.appendChild(addQuickEvidenceButtons());
    
    // Add quick navigation
    form.appendChild(createQuickNav());
    
    // Add submit section at the end
    form.appendChild(createSubmitSection());
    
    // Show first page
    showPage(0);
    updateProgress(0);

    // Initialize Supabase client
    const supabase = createClient(SUPABASE_CONFIG.url, SUPABASE_CONFIG.anonKey);

    // Add this after initializing Supabase client
    async function testSupabaseConnection() {
        try {
            const { data, error } = await supabase
                .from('assessments')
                .select('count(*)')
                .single();
                
            if (error) throw error;
            console.log('Supabase connection successful!');
        } catch (error) {
            console.error('Supabase connection error:', error);
        }
    }

    // Call it when the page loads
    testSupabaseConnection();
});

// Add system theme change listener
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (!localStorage.getItem('preferred-theme')) {
        setTheme(e.matches ? 'dark' : 'light');
    }
});

// Add AI assistance functions
async function getAIAssistance(question, context) {
    try {
        console.log('Requesting AI assistance for:', question);
        
        const response = await fetch(`${OPENAI_CONFIG.baseURL}/chat/completions`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${OPENAI_CONFIG.apiKey}`
            },
            body: JSON.stringify({
                model: OPENAI_CONFIG.model,
                messages: [{
                    role: "system",
                    content: `You are a friendly guide helping users complete a cybersecurity assessment.
                    Keep your responses simple, practical, and action-oriented.
                    Structure your response in these two sections only:

                    1. How to Answer:
                    - Explain in simple terms what to check
                    - Guide where to look in their organization
                    - Mention who to talk to (IT team, HR, etc.)
                    
                    2. Evidence to Collect:
                    - List specific documents to gather
                    - Describe screenshots or files needed
                    - Mention specific settings or configurations to capture

                    Use bullet points and everyday language. Be very specific about what evidence to collect.`
                }, {
                    role: "user",
                    content: `For this question: "${question}"

                    Please provide:
                    1. Clear steps to check if they meet this requirement
                    2. Specific evidence they should collect as proof

                    Keep it practical and focused on finding real evidence.`
                }],
                max_tokens: OPENAI_CONFIG.maxTokens,
                temperature: 0.7
            })
        });
        
        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            console.error('API Error Response:', errorData);
            throw new Error(`API request failed: ${response.status} ${response.statusText}`);
        }
        
        const data = await response.json();
        console.log('AI Response:', data);
        return data.choices[0].message.content;
    } catch (error) {
        console.error('Detailed error:', error);
        return `### Need Help?
        
Sorry, couldn't connect to the helper right now. Please try again in a moment.

Error: ${error.message}`;
    }
}

function createAIAssistanceButton(question) {
    const aiButton = document.createElement('button');
    aiButton.className = 'ai-assist-btn';
    aiButton.innerHTML = '<i class="fas fa-lightbulb"></i> How to Answer';
    
    const aiPanel = document.createElement('div');
    aiPanel.className = 'ai-panel hidden';
    
    aiButton.addEventListener('click', async () => {
        aiButton.disabled = true;
        aiButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Getting Help...';
        
        const assistance = await getAIAssistance(question.text, question.context || '');
        
        aiPanel.innerHTML = `
            <div class="ai-response">
                <div class="ai-header">
                    <i class="fas fa-lightbulb"></i>
                    <span>Guidance</span>
                    <button class="close-ai"><i class="fas fa-times"></i></button>
                </div>
                <div class="ai-content">${marked.parse(assistance)}</div>
            </div>
        `;
        
        aiPanel.classList.remove('hidden');
        aiButton.innerHTML = '<i class="fas fa-lightbulb"></i> How to Answer';
        aiButton.disabled = false;
        
        aiPanel.querySelector('.close-ai').onclick = () => {
            aiPanel.classList.add('hidden');
        };
    });
    
    return { aiButton, aiPanel };
}

// Add submit functionality
function createSubmitSection() {
    const submitSection = document.createElement('div');
    submitSection.className = 'submit-section';
    
    const submitButton = document.createElement('button');
    submitButton.className = 'btn submit-btn';
    submitButton.innerHTML = '<i class="fas fa-paper-plane"></i> Submit Assessment';
    
    submitButton.addEventListener('click', () => {
        const validation = validateAssessment();
        if (validation.isValid) {
            showSubmitConfirmation();
        } else {
            showValidationWarning(validation.unansweredQuestions);
        }
    });
    
    submitSection.appendChild(submitButton);
    return submitSection;
}

function validateAssessment() {
    const unansweredQuestions = [];
    let isValid = true;
    
    assessmentData.sections.forEach(section => {
        section.questions.forEach(question => {
            const questionEl = document.querySelector(`[data-question-id="${question.id}"]`);
            const hasAnswer = questionEl.querySelector('.option-btn.selected');
            
            if (!hasAnswer) {
                isValid = false;
                unansweredQuestions.push({
                    section: section.title,
                    questionId: question.id,
                    text: question.text
                });
            }
        });
    });
    
    return { isValid, unansweredQuestions };
}

function showValidationWarning(unansweredQuestions) {
    const modal = document.createElement('div');
    modal.className = 'modal';
    
    modal.innerHTML = `
        <div class="modal-content warning">
            <h3><i class="fas fa-exclamation-triangle"></i> Incomplete Assessment</h3>
            <p>Please answer all questions before submitting. The following questions are unanswered:</p>
            <div class="unanswered-list">
                ${unansweredQuestions.map(q => `
                    <div class="unanswered-item">
                        <strong>${q.section}</strong>
                        <p>${q.text}</p>
                    </div>
                `).join('')}
            </div>
            <button class="btn primary close-modal">OK, I'll Complete Them</button>
        </div>
    `;
    
    document.body.appendChild(modal);
    modal.querySelector('.close-modal').onclick = () => modal.remove();
}

function showSubmitConfirmation() {
    const modal = document.createElement('div');
    modal.className = 'modal';
    
    modal.innerHTML = `
        <div class="modal-content">
            <h3><i class="fas fa-check-circle"></i> Submit Assessment</h3>
            <p>Are you sure you want to submit your assessment? You won't be able to make changes after submission.</p>
            <div class="modal-actions">
                <button class="btn secondary" onclick="this.closest('.modal').remove()">
                    Review Again
                </button>
                <button class="btn primary" onclick="submitAssessment()">
                    Yes, Submit Assessment
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
}

async function submitAssessment() {
    const submitButton = document.querySelector('.submit-btn');
    submitButton.disabled = true;
    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Submitting...';
    
    try {
        console.log('Starting submission...');
        
        // Initialize Supabase client
        const supabase = createClient(window.env.SUPABASE_URL, window.env.SUPABASE_ANON_KEY);
        console.log('Supabase client initialized');

        const leadData = JSON.parse(localStorage.getItem('assessmentLeadData'));
        const assessmentData = {
            lead_info: leadData,
            responses: [],
            submitted_at: new Date().toISOString()
        };
        
        // Log the data being collected
        console.log('Lead data:', leadData);
        
        // Collect responses and evidence
        const questions = document.querySelectorAll('.question');
        console.log(`Processing ${questions.length} questions...`);

        for (const questionEl of questions) {
            const questionId = questionEl.dataset.questionId;
            const answer = questionEl.querySelector('.option-btn.selected')?.textContent;
            const notes = questionEl.querySelector('textarea').value;
            
            // Handle evidence uploads
            const evidenceUrls = [];
            const evidenceItems = questionEl.querySelectorAll('.evidence-item img');
            console.log(`Processing ${evidenceItems.length} evidence items for question ${questionId}`);

            for (const img of evidenceItems) {
                try {
                    const file = await fetch(img.src).then(r => r.blob());
                    const filename = `${leadData.companyName}/${questionId}/${Date.now()}.png`;
                    
                    const { data, error } = await supabase.storage
                        .from('assessment-evidence')
                        .upload(filename, file);
                    
                    if (error) {
                        console.error('Evidence upload error:', error);
                        throw error;
                    }
                    
                    evidenceUrls.push(data.path);
                    console.log('Evidence uploaded:', data.path);
                } catch (uploadError) {
                    console.error('Error uploading evidence:', uploadError);
                }
            }
            
            assessmentData.responses.push({
                question_id: questionId,
                answer,
                notes,
                evidence_urls: evidenceUrls
            });
        }
        
        console.log('Saving assessment data:', assessmentData);
        
        // Save to Supabase database
        const { data, error } = await supabase
            .from('assessments')
            .insert(assessmentData)
            .select();
            
        if (error) {
            console.error('Database error:', error);
            throw error;
        }

        console.log('Assessment saved successfully:', data);
        showSubmissionSuccess();
    } catch (error) {
        console.error('Submission error:', error);
        submitButton.disabled = false;
        submitButton.innerHTML = '<i class="fas fa-paper-plane"></i> Try Again';
        showSubmissionError();
    }
}

function showSubmissionError() {
    const modal = document.createElement('div');
    modal.className = 'modal';
    
    modal.innerHTML = `
        <div class="modal-content error">
            <h3><i class="fas fa-exclamation-circle"></i> Submission Failed</h3>
            <p>There was an error submitting your assessment. Please try again or contact support if the problem persists.</p>
            <div class="modal-actions">
                <button class="btn primary" onclick="this.closest('.modal').remove()">
                    OK
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
}

function showSubmissionSuccess() {
    const modal = document.createElement('div');
    modal.className = 'modal';
    
    modal.innerHTML = `
        <div class="modal-content success">
            <h3><i class="fas fa-check-circle"></i> Assessment Submitted</h3>
            <p>Your assessment has been successfully submitted. You can now download your report or close this window.</p>
            <div class="modal-actions">
                <button class="btn primary" onclick="generateReport()">
                    <i class="fas fa-file-download"></i> Download Report
                </button>
                <button class="btn secondary" onclick="window.location.reload()">
                    Close
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
}

// Add this new function to get AI-suggested notes
async function getAINotes(question, selectedAnswer) {
    try {
        const response = await fetch(`${OPENAI_CONFIG.baseURL}/chat/completions`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${OPENAI_CONFIG.apiKey}`
            },
            body: JSON.stringify({
                model: OPENAI_CONFIG.model,
                messages: [{
                    role: "system",
                    content: `You are writing brief notes for a cybersecurity assessment.
                    Format your response in 3-4 bullet points maximum.
                    Each bullet should be one line only.
                    Focus only on:
                    • Current implementation status
                    • Key evidence available
                    • Major gaps (if any)
                    
                    Keep it extremely concise and factual.
                    Don't use technical jargon.`
                }, {
                    role: "user",
                    content: `For the question: "${question}"
                    Answer selected: "${selectedAnswer}"
                    
                    Write 3-4 short bullet points explaining:
                    • What's currently in place
                    • What evidence exists
                    • What needs attention (if applicable)
                    
                    Keep each bullet to one line only.`
                }],
                max_tokens: 150,
                temperature: 0.7
            })
        });
        
        if (!response.ok) {
            throw new Error(`API request failed: ${response.status}`);
        }
        
        const data = await response.json();
        return data.choices[0].message.content;
    } catch (error) {
        console.error('Error getting AI notes:', error);
        return '• Unable to generate notes. Please write your notes manually.';
    }
}

function createLeadForm() {
    const leadSection = document.createElement('div');
    leadSection.className = 'lead-section';
    
    leadSection.innerHTML = `
        <div class="lead-form">
            <div class="lead-header">
                <div class="brand-header">
                    <i class="fas fa-shield-check"></i>
                    <h1>Security Readiness Check</h1>
                </div>
                <p class="tagline">Evaluate and strengthen your organization's cybersecurity in minutes</p>
                
                <div class="assessment-info">
                    <div class="info-item">
                        <i class="fas fa-clock"></i>
                        <span>Quick 15-min Assessment</span>
                    </div>
                    <div class="info-item">
                        <i class="fas fa-robot"></i>
                        <span>AI-Powered Guidance</span>
                    </div>
                    <div class="info-item">
                        <i class="fas fa-file-pdf"></i>
                        <span>Instant Report</span>
                    </div>
                </div>
            </div>

            <div class="lead-description">
                <h3>Your Free Assessment Includes:</h3>
                <ul class="benefits-list">
                    <li><i class="fas fa-check-circle"></i> Personalized security gap analysis</li>
                    <li><i class="fas fa-check-circle"></i> Step-by-step improvement roadmap</li>
                    <li><i class="fas fa-check-circle"></i> Evidence collection templates</li>
                    <li><i class="fas fa-check-circle"></i> Expert recommendations</li>
                </ul>
            </div>
            
            <form id="lead-collection-form">
                <div class="form-grid">
                    <div class="form-group required">
                        <label for="company-name">Company Name</label>
                        <input type="text" id="company-name" required placeholder="Your company name">
                    </div>
                    
                    <div class="form-group required">
                        <label for="contact-name">Contact Name</label>
                        <input type="text" id="contact-name" required placeholder="Your full name">
                    </div>
                    
                    <div class="form-group required">
                        <label for="email">Business Email</label>
                        <input type="email" id="email" required placeholder="your.name@company.com">
                    </div>
                    
                    <div class="form-group">
                        <label for="phone">Phone Number</label>
                        <input type="tel" id="phone" placeholder="Optional">
                    </div>
                    
                    <div class="form-group">
                        <label for="industry">Industry</label>
                        <select id="industry">
                            <option value="">Select your industry</option>
                            <option value="technology">Technology</option>
                            <option value="finance">Finance & Banking</option>
                            <option value="healthcare">Healthcare</option>
                            <option value="retail">Retail & E-commerce</option>
                            <option value="manufacturing">Manufacturing</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    
                    <div class="form-group">
                        <label for="company-size">Company Size</label>
                        <select id="company-size">
                            <option value="">Select company size</option>
                            <option value="1-10">1-10 employees</option>
                            <option value="11-50">11-50 employees</option>
                            <option value="51-200">51-200 employees</option>
                            <option value="201-1000">201-1000 employees</option>
                            <option value="1000+">1000+ employees</option>
                        </select>
                    </div>
                </div>

                <div class="form-footer">
                    <p class="privacy-note">
                        <i class="fas fa-shield-alt"></i>
                        Your information is secure and will only be used to deliver your assessment report.
                    </p>
                    <button type="submit" class="btn primary start-btn">
                        <i class="fas fa-play"></i> Start Assessment
                    </button>
                </div>
            </form>
        </div>
    `;
    
    // Handle form submission
    leadSection.querySelector('form').addEventListener('submit', (e) => {
        e.preventDefault();
        const leadData = {
            companyName: document.getElementById('company-name').value,
            contactName: document.getElementById('contact-name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            industry: document.getElementById('industry').value,
            companySize: document.getElementById('company-size').value,
            timestamp: new Date().toISOString(),
            source: 'Cybersecurity Assessment Tool'
        };
        
        // Save lead data
        localStorage.setItem('assessmentLeadData', JSON.stringify(leadData));
        
        // Hide lead form and show assessment
        document.querySelector('.lead-section').style.display = 'none';
        document.getElementById('assessment-form').style.display = 'block';
    });
    
    return leadSection;
}

// Comprehensive connection test function
async function testConnections() {
    console.log('🔄 Testing API connections...');
    
    try {
        // Test env variables
        console.log('Environment variables:', {
            hasSupabaseUrl: !!window.env?.SUPABASE_URL,
            hasSupabaseKey: !!window.env?.SUPABASE_ANON_KEY,
            supabaseUrlFormat: window.env?.SUPABASE_URL?.startsWith('https://'),
            supabaseKeyFormat: window.env?.SUPABASE_ANON_KEY?.startsWith('eyJ')
        });

        if (!window.env?.SUPABASE_URL || !window.env?.SUPABASE_ANON_KEY) {
            throw new Error('Missing Supabase configuration');
        }

        // Initialize Supabase
        const supabase = createClient(window.env.SUPABASE_URL, window.env.SUPABASE_ANON_KEY);
        console.log('Supabase client initialized');

        // Test database connection
        const { data, error } = await supabase
            .from('assessments')
            .select('count(*)')
            .limit(1);

        if (error) {
            console.error('Supabase Error Details:', {
                code: error.code,
                message: error.message,
                details: error.details
            });
            throw error;
        }

        console.log('✅ Database connection successful');
        return true;
    } catch (error) {
        console.error('❌ Connection Error:', {
            message: error.message,
            stack: error.stack
        });
        return false;
    }
}

// Call this when page loads
document.addEventListener('DOMContentLoaded', async () => {
    const connectionsOk = await testConnections();
    if (!connectionsOk) {
        console.error('⚠️ API connections failed. Check the console for details.');
    }
}); 