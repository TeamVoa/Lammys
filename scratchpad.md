# Lessons

- For website image paths, always use the correct relative path (e.g., 'images/filename.png') and ensure the images directory exists
- For search results, ensure proper handling of different character encodings (UTF-8) for international queries
- Add debug information to stderr while keeping the main output clean in stdout for better pipeline integration
- When using seaborn styles in matplotlib, use 'seaborn-v0_8' instead of 'seaborn' as the style name due to recent seaborn version changes
- When using Jest, a test suite can fail even if all individual tests pass, typically due to issues in suite-level setup code or lifecycle hooks

# Scratchpad

# Current Task: Docker Image and Container Management

## Task Description
Check and manage Docker images and containers in the project.

## Steps
[X] List all Docker images
[X] List all Docker containers (running and stopped)
[ ] Check Docker system information
[ ] Document any findings or issues

## Progress
### Docker Images Found:
1. restaurant-websitedocker_test-web:latest (1.2GB)
2. lammys-06121b782d9650a3cfe10073cbb76e18e5abd38e-web:latest (2.83GB)

### Container Status:
- All containers are currently stopped
- Multiple test containers present
- Most recent container (d19229bff324) was created 38 minutes ago
- Several older containers from previous builds present

### Observations:
1. No containers are currently running
2. Multiple stopped containers could be cleaned up
3. Two main images present with different sizes

## Recommendations:
1. Clean up unused containers using `docker container prune`
2. Consider removing older images if not needed
3. Review image sizes for optimization opportunities

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