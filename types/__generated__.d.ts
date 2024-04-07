/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface CreateTodoDto {
  /**
   * 할 일 제목
   * @example "세탁기 돌리기"
   */
  title: string;
}

export interface Client {
  /**
   * 클라이언트 ID
   * @example 1
   */
  id: number;
  /**
   * 클라이언트 이름
   * @example "Yongjun Park"
   */
  name: string;
}

export interface CreateTodoResponseDto {
  /**
   * 할 일 ID
   * @example 1
   */
  id: number;
  /**
   * 할 일 제목
   * @example "세탁기 돌리기"
   */
  title: string;
  /**
   * 할 일 설명
   * @example "흰 옷, 검은 옷 구분하기"
   */
  description?: string;
  /**
   * 할 일 완료 여부
   * @example false
   */
  isDone: boolean;
  /**
   * 할 일 생성일
   * @format date-time
   * @example "2021-07-01T00:00:00.000Z"
   */
  createdAt: string;
  /**
   * 할 일 수정일
   * @format date-time
   * @example "2021-07-01T00:00:00.000Z"
   */
  updatedAt: string;
  /**
   * 할 일을 등록한 클라이언트
   * @example {"id":1,"name":"Yongjun Park"}
   */
  client: Client;
}

export interface ReadTodoResponseDto {
  /**
   * 할 일 ID
   * @example 1
   */
  id: number;
  /**
   * 할 일 제목
   * @example "세탁기 돌리기"
   */
  title: string;
  /**
   * 할 일 설명
   * @example "흰 옷, 검은 옷 구분하기"
   */
  description?: string;
  /**
   * 할 일 완료 여부
   * @example false
   */
  isDone: boolean;
  /**
   * 할 일 생성일
   * @format date-time
   * @example "2021-07-01T00:00:00.000Z"
   */
  createdAt: string;
  /**
   * 할 일 수정일
   * @format date-time
   * @example "2021-07-01T00:00:00.000Z"
   */
  updatedAt: string;
  /**
   * 할 일을 등록한 클라이언트
   * @example {"id":1,"name":"Yongjun Park"}
   */
  client: Client;
}

export interface UpdateTodoDto {
  /**
   * 할 일 제목
   * @example "세탁기 돌리기"
   */
  title?: string;
  /**
   * 할 일 설명
   * @example "흰 옷, 검은 옷 구분하기"
   */
  description?: string;
  /**
   * 할 일 완료 여부
   * @example false
   */
  isDone?: boolean;
}

export interface UpdateTodoResponseDto {
  /**
   * 할 일 ID
   * @example 1
   */
  id: number;
  /**
   * 할 일 제목
   * @example "세탁기 돌리기"
   */
  title: string;
  /**
   * 할 일 설명
   * @example "흰 옷, 검은 옷 구분하기"
   */
  description?: string;
  /**
   * 할 일 완료 여부
   * @example false
   */
  isDone: boolean;
  /**
   * 할 일 생성일
   * @format date-time
   * @example "2021-07-01T00:00:00.000Z"
   */
  createdAt: string;
  /**
   * 할 일 수정일
   * @format date-time
   * @example "2021-07-01T00:00:00.000Z"
   */
  updatedAt: string;
  /**
   * 할 일을 등록한 클라이언트
   * @example {"id":1,"name":"Yongjun Park"}
   */
  client: Client;
}

export interface CreateClientDto {
  /**
   * 클라이언트 이름
   * @example "Yongjun Park"
   */
  name: string;
}

export interface CreateClientResponseDto {
  /**
   * 클라이언트 ID
   * @example 1
   */
  id: number;
  /**
   * 클라이언트 이름
   * @example "Yongjun Park"
   */
  name: string;
}
