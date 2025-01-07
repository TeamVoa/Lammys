# Lessons

- For website image paths, always use the correct relative path (e.g., 'images/filename.png') and ensure the images directory exists
- For search results, ensure proper handling of different character encodings (UTF-8) for international queries
- Add debug information to stderr while keeping the main output clean in stdout for better pipeline integration
- When using seaborn styles in matplotlib, use 'seaborn-v0_8' instead of 'seaborn' as the style name due to recent seaborn version changes
- When using Jest, a test suite can fail even if all individual tests pass, typically due to issues in suite-level setup code or lifecycle hooks

# Scratchpad

# Current Task: Project Setup

## Task Description
Setting up the development environment according to README.md instructions.

## Steps
[X] Create and activate Python virtual environment (py310)
[X] Install project dependencies
[X] Install Playwright's Chromium browser
[X] Verify setup

## Progress Notes
- Successfully created Python virtual environment in py310 directory
- Activated the virtual environment
- Installed all Python dependencies from requirements.txt
- Successfully installed Playwright's Chromium browser
- Setup is now complete and verified

## Lessons
1. Docker Configuration:
   - Use Node.js 18 Alpine for smaller image size
   - Implement multi-stage builds to reduce final image size
   - Include necessary build dependencies (python3, make, g++)
   - Set proper environment variables in Dockerfile

2. Merge Conflict Resolution:
   - Never commit files with merge conflict markers
   - Always resolve conflicts immediately during merge
   - Use proper auth context path: @/lib/auth-context
   - Check all files for conflict markers before committing
   - When resolving conflicts involving auth, ensure proper user flow handling

3. Next.js Configuration:
   - Remove unrecognized options from next.config.js
   - Keep configuration minimal and documented
   - Use 'standalone' output for Docker compatibility

## Notes
- Environment variables needed for deployment:
  - NEXT_PUBLIC_SUPABASE_URL
  - NEXT_PUBLIC_SUPABASE_ANON_KEY
- Docker build command: `docker-compose up --build`
- Development server command: `npm run dev`

## Future Improvements
1. Add automated tests for the booking flow
2. Implement CI/CD pipeline with Docker
3. Add environment variable validation
4. Consider adding health checks to Docker container

# Current Task: Docker Container Setup

## Task Description
Building and running the Docker container for local website testing.

## Steps
[X] Fixed environment file naming (.env.local)
[X] Started Docker container build using docker-compose
[ ] Verify container is running
[ ] Test website accessibility on localhost:3000

## Progress Notes
- Environment variables confirmed to be set up in .env.local
- Docker build process initiated with docker-compose up --build
- Building process may take a few minutes
- Will be accessible at http://localhost:3000 when ready

# Current Task: Clean Up Docker Containers

### Steps
[X] Remove all stopped containers
[X] Verify containers are removed
[X] Document the cleanup

### Progress
✓ Successfully removed all containers
✓ Reclaimed 4.608MB of space
✓ Verified no containers remain

### Status
All Docker containers have been successfully removed. The system is now clean and ready for new container deployments.