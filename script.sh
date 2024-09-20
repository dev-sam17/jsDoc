mkdir grpc_test
cd grpc_test

git clone https://gitlab.com/sachin167/grpc_test.git

unzip tester.zip

echo '"@reconvert:registry"="https://gitlab.com/api/v4/packages/npm/"' > .npmrc
echo '//gitlab.com/api/v4/packages/npm/:_authToken=${CI_JOB_TOKEN}' >> .npmrc

npm i

cd node_modules/@reconvert/microservice-clients/
rm -rf *
rm -rf .*


git clone https://gitlab.com/reconvert/lib/microservice-clients.git .
git checkout ${1:-development}

cd ../../..

node ms-client-edit.js
