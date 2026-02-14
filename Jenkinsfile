pipeline {
    agent any

    stages {

        stage('Clone') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/Kartik71845/jenkins-ci-cd-practice.git'
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                    docker compose version || docker-compose version
                    docker compose down || docker-compose down || true
                    docker compose up -d --build || docker-compose up -d --build
                '''
            }
        }
    }
}
