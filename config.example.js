// Example configuration - DO NOT put real credentials here
const OPENAI_CONFIG = {
    apiKey: 'your-openai-api-key',
    model: 'gpt-4-0125-preview',
    baseURL: 'https://api.openai.com/v1',
    maxTokens: 500,
    temperature: 0.7
};

const SUPABASE_CONFIG = {
    url: 'your-supabase-project-url',
    anonKey: 'your-supabase-anon-key',
    bucket: 'assessment-evidence'
};

// Example configuration (DO NOT put real credentials here)
window.env = {
    OPENAI_API_KEY: 'sk-...your-openai-key...',
    SUPABASE_URL: 'https://your-project.supabase.co',
    SUPABASE_ANON_KEY: 'eyJ...your-anon-key...',
    ENVIRONMENT: 'production'
}; 