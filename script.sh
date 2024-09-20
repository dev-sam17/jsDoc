sudo tailscaled > /dev/null 2>&1 & sudo tailscale up --auth-key=tskey-auth-kTnJ5HuRE521CNTRL-jAiTeQDiLBji3rbCeraZFjGYJnUBG4Dbb --accept-routes

git clone https://gitlab.com/sachin167/grpc_test.git

cd grpc_test

npm i

cd node_modules/@reconvert/microservice-clients/
rm -rf *
rm -rf .*


git clone https://gitlab.com/reconvert/lib/microservice-clients.git .
git checkout ${1:-development}

cd ../../..

node ms-client-edit.js
