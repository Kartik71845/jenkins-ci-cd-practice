pipeline {
    agent any
    stages {
        stage("Clone") {
            steps {
                git url: "https://github.com/Kartik71845/jenkins-ci-cd-practice.git",branch: "main"
                }   
            }
        
        stage("Build and Test") {
            steps {
                sh '''
                docker build -t dockerized_app:latest .
                docker compose down || true
                docker compose up -d --build
                '''
            }
        
        }

    }
}