pipeline {
    agent any

    environment {
        COMPOSE_PROJECT_NAME = "flaskapp"
    }

    stages {

        stage("Clean Workspace") {
            steps {
                cleanWs()
            }
        }

        stage("Clone Repository") {
            steps {
                git url: "https://github.com/Kartik71845/jenkins-ci-cd-practice.git", branch: "main"
            }
        }

        stage("Build & Deploy with Compose") {
            steps {
                sh '''
                    docker compose down || true
                    docker compose up -d --build
                '''
            }
        }

        stage("Verify Container") {
            steps {
                sh '''
                    docker ps
                '''
            }
        }
    }

    post {
        always {
            echo "Pipeline finished."
        }
        failure {
            echo "Build failed. Check logs."
        }
    }
}
