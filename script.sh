echo "------------Cloning grpc_test---------"
git clone https://gitlab.com/sachin167/grpc_test.git

echo "------------Changing directory---------"
cd grpc_test

echo "------------Installing Packages---------"
npm i
echo "------------Commpleted---------"

echo "------------Changing dir to ms-clients---------"
cd node_modules/@reconvert/microservice-clients/
echo "------------Removing all files---------"
rm -rf *
rm -rf .*

echo "------------Cloning ms-clients---------"
git clone https://gitlab.com/reconvert/lib/microservice-clients.git .
echo "------------Changing branch to ${1:-development}---------"
git checkout ${1:-development}

echo "------------Changing dir back to grpc_test---------"
cd ../../..

echo "------------Running ms-client-edit---------"
node ms-client-edit.js
echo "------------Completed---------"
