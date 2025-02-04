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
    OPENAI_API_KEY: 'sk-...', // Your OpenAI API key
    SUPABASE_URL: 'https://your-project.supabase.co', // Your Supabase project URL
    SUPABASE_ANON_KEY: 'eyJ...', // Your Supabase anon key
    ENVIRONMENT: 'development'
}; 