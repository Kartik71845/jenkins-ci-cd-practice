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
                docker build -t flask-app:latest .
                docker run -d -p 5000:80 --name docker_flask flask-app:latest
                '''
            }
        
        }

    }
}