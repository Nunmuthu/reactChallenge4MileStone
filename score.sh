cp test-db.json db.json
export NODE_ENV=development && npm install;
sudo apt-get install psmisc
fuser -k 8001/tcp
rm -rf ./report
npx start-server-and-test start-test http://localhost:8002 json-server http://localhost:8001 nightwatch; mv ./report/* ./report/unit.xml;