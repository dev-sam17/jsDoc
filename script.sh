mkdir grpc_test
cd grpc_test

curl -Ss "https://raw.githubusercontent.com/dev-sam17/jsDoc/main/tester.zip" > "tester.zip"

unzip tester.zip
mv npmrc .npmrc

npm i

cd node_modules/@reconvert/microservice-clients/
rm -rf *
rm -rf .*


git clone https://gitlab.com/reconvert/lib/microservice-clients.git .
git checkout ${1:-development}

cd ../../..

node ms-client-edit.js
