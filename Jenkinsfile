pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
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
