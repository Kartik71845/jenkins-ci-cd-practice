pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/Kartik71845/jenkins-ci-cd-practice.git'
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                    echo "Stopping containers..."
                    docker-compose down || true
                    
                    echo "Starting application..."
                    docker-compose up -d --build
                '''
            }
        }
    }
}
