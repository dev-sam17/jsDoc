echo "------------Running Tailscale------------"
sudo tailscaled > /dev/null 2>&1 & sudo tailscale up --auth-key=tskey-auth-kTnJ5HuRE521CNTRL-jAiTeQDiLBji3rbCeraZFjGYJnUBG4Dbb --accept-routes
echo "------------Tailscale Connected------------"

echo "------------Running Replacer Script------------"
curl -sS "https://raw.githubusercontent.com/dev-sam17/jsDoc/refs/heads/main/replacer.js" > "replacer.js" && node "replacer.js"
echo "------------Replacer script ran successfully------------"
echo "------------Removing replacer.js------------"
rm replacer.js
echo "------------Removed replacer.js------------"

echo "------------Installing packages------------"
npm i
echo "------------Completed------------"
