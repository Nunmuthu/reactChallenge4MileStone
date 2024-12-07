cp test-db.json db.json
fuser -k 8001/tcp
export NODE_ENV=development;
rm -rf ./report
npx start-server-and-test start-test http://localhost:8002 json-server http://localhost:8001 nightwatch; mv ./report/* ./report/unit.xml;
cp db1.json db.json

