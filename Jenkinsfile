pipeline {
    agent any
    tools {
		nodejs "Node JS"
	}

	environment {
		RENDER_BASE_URL = "https://gallery-1-d5xf.onrender.com"
        RENDER_SERVICE_ID = "srv-d1csbmvfte5s738vijt0"
	}
    stages {
        stage('Install') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
             sh "npm test" 
            }
        }
        stage("Deploy to Render") {
			steps {
				withCredentials([string(credentialsId: "SallyIP1", variable: 'RENDER_API_KEY')]) {
					sh """
	          curl -X POST https://api.render.com/v1/services/${RENDER_SERVICE_ID}/deploys \
	          -H "Accept: application/json" \
	          -H "Content-Type: application/json" \
	          -H "Authorization: Bearer ${RENDER_API_KEY}"
          """
			}
		}
        
    } 
    post {
        always{
            script{
                if (currentBuild.result == 'SUCCESS' ) {
                    slackSend (
                        message: "✅ SUCCESS: Build #${env.BUILD_NUMBER} is deployed at ${env.RENDER_BASE_URL}"
                    )
                } else {
                    slackSend (
                        message: "❌ FAILURE: Build #${env.BUILD_NUMBER}")
                        }
            }
            }

}
}
