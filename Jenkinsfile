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
                        sh 'export PATH=$PATH:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin' // Adicione os caminhos corretos
                        sh 'npm install'
                        sh 'npm run cy:run'
                        junit 'cypress/results/junit/*.xml'
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