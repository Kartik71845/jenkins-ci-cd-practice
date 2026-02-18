# jenkins-ci-cd-practice

Simple Flask app used for Jenkins CI/CD practice.

Run locally with Docker Compose:

```bash
docker compose up --build
```

Or build and run the image manually:

```bash
docker build -t flaskapp .
docker run -p 5000:5000 flaskapp
```

The service listens on port 5000. Ensure requirements.txt contains `flask` so the Docker image builds correctly.