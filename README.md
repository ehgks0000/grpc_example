# gRpc 연습

## 실행 방법

1. `npm run build:proto`
   > 실행 시 ./src/proto 폴더에 d.ts와 js가 생성된다.
2. `npm run start`

## 기록

1. 디펜던시 버전마다 사용 방법이 많이 상이하니 주의
2. 컴파일 후 `./src/proto`를 생성이 되면 오류가 발생하는데 `grpc`를 `@grpc/grpc-js`로 수정 해주어야한다.
   > 참조  
   > https://medium.com/expedia-group-tech/the-weird-world-of-grpc-tooling-for-node-js-part-1-40a442966876  
   > https://www.npmjs.com/package/@grpc/grpc-js
