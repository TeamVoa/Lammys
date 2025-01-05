# Lessons

- For website image paths, always use the correct relative path (e.g., 'images/filename.png') and ensure the images directory exists
- For search results, ensure proper handling of different character encodings (UTF-8) for international queries
- Add debug information to stderr while keeping the main output clean in stdout for better pipeline integration
- When using seaborn styles in matplotlib, use 'seaborn-v0_8' instead of 'seaborn' as the style name due to recent seaborn version changes
- When using Jest, a test suite can fail even if all individual tests pass, typically due to issues in suite-level setup code or lifecycle hooks

# Scratchpad

# Current Task: Remove Docker Configuration and Fix Security Issues

## Task Description
Need to remove Docker configuration files and address security concerns with exposed API keys in the Dockerfile.

## Progress
[X] Identified security issue with exposed Supabase API keys in Dockerfile
[X] Removed docker-compose.yml
[X] Removed .dockerignore
[X] Remove Dockerfile with sensitive information
[X] Removed Dockerfile.dev
[X] Verify all Docker-related files are removed
[ ] Document security recommendations for API key handling

## Security Recommendations
1. Move all sensitive information to .env.local (Already done ✓)
2. Rotate exposed Supabase keys immediately (URGENT!)
3. Check git history for exposed secrets
4. Use proper environment variable handling in deployment

## Lessons
1. **Security**: Never store API keys or sensitive credentials in Dockerfile or any version-controlled files
2. **Environment Variables**: Always use .env files for sensitive configuration
3. **Docker Best Practices**: Use build arguments (ARG) or runtime environment variables instead of hardcoding values
4. **Version Control**: Always check files for sensitive information before committing
5. **File Organization**: Keep track of all configuration files (.dockerignore, Dockerfile.dev) when cleaning up

## Next Steps
1. Help user rotate Supabase keys (URGENT due to exposure)
2. Clean git history if needed
3. Consider setting up GitHub Actions secrets for future deployments