export const AppRoute = {
  ROOT: `/`,
  CARS: `/cars`,
  CONTACTS: `/contacts`,
  VACANCY: `/vacancy`,
  SERVICES: `/services`,
  NOT_IMPLEMENTED: `/not-implemented`
};

export const EMPTY_COMMENT = {
  name: ``,
  rating: 0,
  pros: ``,
  cons: ``,
  comment: ``,
  text: ``
}

export const ERRORS_INIT = {
  name: false,
  text: false
}
export const MAX_RATING = 5;

export const ID_SIZE = 5;

export const RatingScore = {
  NOT: 0,
  WORST: 1,
  BAD: 2,
  MEDIUN: 3,
  HIGHT: 4,
  BEST: 5
}

export const RatingText = {
  MATCH: `Советует`,
  NOT_MATCH: `Не советует`,
  EMPTY: ``
}
