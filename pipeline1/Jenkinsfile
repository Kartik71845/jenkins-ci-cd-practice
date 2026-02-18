pipeline {

    agent any

    environment {
        CONTAINER_NAME = "flask-app"
    }
    
    stages {
        stage ("Chekcout") {
            steps {
                git branch: 'main', url: 'https://github.com/Kartik71845/jenkins-ci-cd-practice.git'
            }

        stage ("Build and Test") {
            steps {
                sh '''
                   docker compose down || true
                   docker compose up -d --build 
                   '''
            }
         stage ('docker login') {
             steps {
                 withCredentials([usernamePassword(credentialsId: 'dockerhubcreds', usernameVariable: 'DOCKERHUB_USERNAME', passwordVariable: 'DOCKERHUB_PASSWORD')]) {
                     sh '''
                         echo $DOCKERHUB_PASSWORD | docker login -u $DOCKERHUB_USERNAME --password-stdin
                     '''
                 }
             }
         stage (Tag and Push) {
             steps {
                 sh '''
                     docker tag ${CONTAINER_NAME}:latest $DOCKERHUB_USERNAME/${CONTAINER_NAME}:latest
                     docker push $DOCKERHUB_USERNAME/${CONTAINER_NAME}:latest
                 '''
             }

         }

        }
        }
    }
    }
}