# RIOT ( 네임 생각 중 )

## 프로젝트 구조

RIOT 프로젝트는 monorepo로 구성되어 있습니다.

전체 프로젝트는 `packages` 디렉토리 하위에 있는 패키지들입니다.

패키지에 대한 설명은 아래와 같습니다.

| 이름   | 설명                      |
| ------ | ------------------------- |
| client | RIOT Frontend 프로젝트    |
| server | RIOT node Server 프로젝트 |

## 실행 방법

Package Manager는 `pnpm` 을 사용하고 있습니다.

만약 `pnpm` 이 없다면 전역에 `pnpm` 을 먼저 install 합니다.

```sh
$ npm install --global pnpm
# or
$ npm i -g pnpm
```

`pnpm`을 install 완료하면 dependencies 를 install 합니다.

```sh
$ pnpm install
```

전체 dependencies가 install이 완료되면 프로젝트를 실행할 수 있습니다.

프로젝트 root 경로에서

```sh
$ pnpm start
```

명령어를 실행합니다.

## .env 설정

```sh
$ cp .env.default .env
```

```sh
$ pnpm start
```

client 에서는 `.env.default` 파일을 참고하여 `packages/client/.env` 설정에서 기존 로컬에 저장해놓은 env 파일을 참고하여 작성합니다.

## Client

- stack
  - 코어: React + TypeScript
  - 상태관리
    - 클라이언트: zustand
    - 서버: @tanstack/react-query
  - css: styled-components

client 프로젝트는 개발툴로 [`vite`](https://ko.vitejs.dev/guide/)를 사용하고 있습니다.

## Server

- stack
  - Node + Express
  - TypeScript
  - MongoDB
