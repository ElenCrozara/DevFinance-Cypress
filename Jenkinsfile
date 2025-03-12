pipeline {
    agent {
        docker {
            image 'docker:dind' 
        }
    }
    stages {
        stage('Build and Test') {
            steps {
                script {
                    def app = docker.build("my-cypress-image") 
                    app.inside {
                        sh 'npm install'
                        sh 'npm run cy:run'
                    }
                }
            }
        }
    }
    post {
        always {
            junit 'cypress/results/junit/*.xml'
        }
    }
}