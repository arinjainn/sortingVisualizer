pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/arinjainn/sortingVisualizer.git'
            }
        }

        stage('Build') {
            steps {
                sh 'node ci/build.js'
            }
        }

        stage('Test') {
            steps {
                sh 'node ci/test-index.js'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying files...'
                sh 'mkdir -p /tmp/sorting_deploy && cp -r dist/* /tmp/sorting_deploy/'
                sh 'ls -la /tmp/sorting_deploy'
            }
        }
    }

    post {
        success {
            echo '✅ Pipeline succeeded!'
        }
        failure {
            echo '❌ Pipeline failed!'
        }
    }
}
