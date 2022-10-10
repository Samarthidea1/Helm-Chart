pipeline {
    agent any
 
   tools
    {
       maven "Maven"
    }
 stages {
      stage('checkout') {
           steps {
             
                git branch: 'main', url: 'https://github.com/Samarthidea1/Helm-Chart.git'
             
          }
        }
  stage('Maven Build') {
           steps {
             
                sh 'mvn package'             
          }
        }
stage('Docker Build') {
           steps {
              
                sh 'docker build -t samarth1311/vaadin:latest .' 
                //sh 'docker tag samarth1311/vaadin:latest'
                //sh 'docker tag samplewebapp nikhilnidhi/samplewebapp:$BUILD_NUMBER'
               
          }
        }
     
  stage('Push image to Docker Hub') {
          
            steps {
                withDockerRegistry([ credentialsId: "dockerhub_id", url: "" ]) {
                sh  'docker push samarth1311/vaadin:latest'
        //  sh  'docker push nikhilnidhi/samplewebapp:$BUILD_NUMBER' 
        }
                  
          }
        }
     
     // stage('Run Docker container on Jenkins Agent') {
             
       //     steps 
   //{
       //         sh "docker run -d -p 8853:8080 samarth1311/vaadin:latest"
 
         //   }
        //}
 stage('Helm Deploy') {
             
            steps {
                sshagent (['key']) {
                sh "cp -r /var/lib/jenkins/workspace/pipe/* /home/ubuntu"
                sh "ssh -o StrictHostKeyChecking=no ubuntu@13.232.37.119"
                sh "export PATH=/bin:/usr/bin:/usr/local/bin:/sbin:/usr/sbin"
                //sh 'wget https://get.helm.sh/helm-v3.6.1-linux-amd64.tar.gz'
                //sh 'ls -a'
                //sh 'tar -xvzf helm-v3.6.1-linux-amd64.tar.gz'
                //sh 'sudo cp -r /linux-amd64/helm /usr/bin'
               // sh "helm upgrade --install releaseone /home/ubuntu/Assessment/vaadin-chart --kubeconfig /.kube/config"
                //sh "docker version"
                //sh "docker -H ssh://ubuntu@3.110.219.222 run -d -p 8853:8080 samarth1311/vaadin:latest"
                sh "helm -h ssh://ubuntu@13.232.37.119 upgrade --install releaseone /home/ubuntu/Assessment/vaadin-chart"
                
                }
            }
        }
    }
 }

