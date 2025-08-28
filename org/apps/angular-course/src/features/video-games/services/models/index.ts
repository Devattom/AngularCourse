export type OnePersonApiResult = {
  uid: string,
  name: string,
}

export type PeopleApiResult = {
  results: OnePersonApiResult[];
}
