pipeline {
    agent any
    stages {
        stage('Source') {
            steps {
                // Get  code from a GitHub repository
                git 'https://github.com/mdjawad0/foodinc-admin.git'
                // Run npm install to install node modules
                sh "npm install"
                sh "npm audit fix --force"
                echo 'Source Stage Finished'
            }
        }

        stage('Test') {
            steps {
                // Run Cypress to Execute the Spec Files for Unit Testing
                sh "npm run cypress:run"  
                echo 'Test Stage Finished'       
            }
        }

        stage('Build') {
            steps {
                // Run build command to create dist directory
                sh "npm run build"
                echo 'Build Stage Finished'
            }
        }
    }
}
