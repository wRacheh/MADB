export interface Anime {
    _id:String,
    createdAt:Date,
    updatedAt:Date,
    slug:String,
    synopsis:String,
    coverImageTopOffset:number,
    titles:{},
    canonicalTitle:String,
    abbreviatedTitles:[],
    averageRating:String,
    ratingFrequencies:{},
    userCount:number,
    favoritesCount:number,
    startDate:Date,
    endDate:Date,
    popularityRank:number,
    ratingRank:number,
    ageRating:ageRating,
    ageRatingGuide:String,
    subtype:subtype,
    status:status,
    tba:String,
    posterImage:posterImage,
    meta:meta,
    coverImage:coverImage,
    episodeCount:number,
    episodeLength:number,
    youtubeVideoId:String,
    showType:showType,
    nsfw:boolean
}

export enum showType{
    ONA,
    OVA,
    TV,
    movie,
    music,
    special,
}
export interface coverImage{
    tiny:String
    small:String
    large:String
    original:String
    meta:meta
}
export interface posterImage {
    tiny:String
    small:String
    medium:String
    large:String
    original:String
}
export interface meta {
    dimensions:dimensions
}
export interface dimensions {
 tiny:tiny
 small:small
 medium:medium
 large:large
}
export interface tiny {
    width:String
    height:String
}
export interface small {
    width:String
    height:String
}
export interface medium {
    width:String
    height:String
}
export interface large {
    width:String
    height:String
}


export enum status {
    current ,
    finished,
    tba,
    unreleased,
    upcoming

  }
export enum ageRating {
    G ,
    PG,
    R,
    R18
  }

  export enum subtype {
    ONA ,
    OVA,
    TV,
    movie,
    music,
    special
  }