pipeline {
    agent any

    stages {

        stage('Clone Code') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/Kartik71845/jenkins-ci-cd-practice.git'
            }
        }

        stage('Build & Run Container') {
            steps {
                sh '''
                    echo "Stopping old containers if running..."
                    docker compose down || true

                    echo "Building and starting new container..."
                    docker compose up -d --build
                '''
            }
        }

        stage('Check Running Containers') {
            steps {
                sh 'docker ps'
            }
        }
    }

    post {
        success {
            echo "Deployment successful."
        }
        failure {
            echo "Something failed. Check logs."
        }
    }
}
