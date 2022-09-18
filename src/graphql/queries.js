/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMarketActor = /* GraphQL */ `
  query GetMarketActor($id: ID!) {
    getMarketActor(id: $id) {
      id
      name
      aboutText
      websiteLink
      region
      actorType
      followees {
        items {
          id
          name
          aboutText
          websiteLink
          region
          actorType
          game
          isOpenToOffers
          createdAt
          updatedAt
          marketActorFolloweesId
          marketActorFollowingId
          marketActorAdminId
          marketActorPlayersId
          marketActorTeamsId
          postLikesId
          marketActorCaptainId
          marketActorOrganizationId
          marketActorCoachId
          marketActorOwnerId
        }
        nextToken
      }
      following {
        items {
          id
          name
          aboutText
          websiteLink
          region
          actorType
          game
          isOpenToOffers
          createdAt
          updatedAt
          marketActorFolloweesId
          marketActorFollowingId
          marketActorAdminId
          marketActorPlayersId
          marketActorTeamsId
          postLikesId
          marketActorCaptainId
          marketActorOrganizationId
          marketActorCoachId
          marketActorOwnerId
        }
        nextToken
      }
      game
      captain {
        id
        name
        aboutText
        websiteLink
        region
        actorType
        followees {
          nextToken
        }
        following {
          nextToken
        }
        game
        captain {
          id
          name
          aboutText
          websiteLink
          region
          actorType
          game
          isOpenToOffers
          createdAt
          updatedAt
          marketActorFolloweesId
          marketActorFollowingId
          marketActorAdminId
          marketActorPlayersId
          marketActorTeamsId
          postLikesId
          marketActorCaptainId
          marketActorOrganizationId
          marketActorCoachId
          marketActorOwnerId
        }
        admin {
          nextToken
        }
        organization {
          id
          name
          aboutText
          websiteLink
          region
          actorType
          game
          isOpenToOffers
          createdAt
          updatedAt
          marketActorFolloweesId
          marketActorFollowingId
          marketActorAdminId
          marketActorPlayersId
          marketActorTeamsId
          postLikesId
          marketActorCaptainId
          marketActorOrganizationId
          marketActorCoachId
          marketActorOwnerId
        }
        players {
          nextToken
        }
        coach {
          id
          name
          aboutText
          websiteLink
          region
          actorType
          game
          isOpenToOffers
          createdAt
          updatedAt
          marketActorFolloweesId
          marketActorFollowingId
          marketActorAdminId
          marketActorPlayersId
          marketActorTeamsId
          postLikesId
          marketActorCaptainId
          marketActorOrganizationId
          marketActorCoachId
          marketActorOwnerId
        }
        isOpenToOffers
        owner {
          id
          name
          aboutText
          websiteLink
          region
          actorType
          game
          isOpenToOffers
          createdAt
          updatedAt
          marketActorFolloweesId
          marketActorFollowingId
          marketActorAdminId
          marketActorPlayersId
          marketActorTeamsId
          postLikesId
          marketActorCaptainId
          marketActorOrganizationId
          marketActorCoachId
          marketActorOwnerId
        }
        teams {
          nextToken
        }
        Posts {
          nextToken
        }
        createdAt
        updatedAt
        marketActorFolloweesId
        marketActorFollowingId
        marketActorAdminId
        marketActorPlayersId
        marketActorTeamsId
        postLikesId
        marketActorCaptainId
        marketActorOrganizationId
        marketActorCoachId
        marketActorOwnerId
      }
      admin {
        items {
          id
          name
          aboutText
          websiteLink
          region
          actorType
          game
          isOpenToOffers
          createdAt
          updatedAt
          marketActorFolloweesId
          marketActorFollowingId
          marketActorAdminId
          marketActorPlayersId
          marketActorTeamsId
          postLikesId
          marketActorCaptainId
          marketActorOrganizationId
          marketActorCoachId
          marketActorOwnerId
        }
        nextToken
      }
      organization {
        id
        name
        aboutText
        websiteLink
        region
        actorType
        followees {
          nextToken
        }
        following {
          nextToken
        }
        game
        captain {
          id
          name
          aboutText
          websiteLink
          region
          actorType
          game
          isOpenToOffers
          createdAt
          updatedAt
          marketActorFolloweesId
          marketActorFollowingId
          marketActorAdminId
          marketActorPlayersId
          marketActorTeamsId
          postLikesId
          marketActorCaptainId
          marketActorOrganizationId
          marketActorCoachId
          marketActorOwnerId
        }
        admin {
          nextToken
        }
        organization {
          id
          name
          aboutText
          websiteLink
          region
          actorType
          game
          isOpenToOffers
          createdAt
          updatedAt
          marketActorFolloweesId
          marketActorFollowingId
          marketActorAdminId
          marketActorPlayersId
          marketActorTeamsId
          postLikesId
          marketActorCaptainId
          marketActorOrganizationId
          marketActorCoachId
          marketActorOwnerId
        }
        players {
          nextToken
        }
        coach {
          id
          name
          aboutText
          websiteLink
          region
          actorType
          game
          isOpenToOffers
          createdAt
          updatedAt
          marketActorFolloweesId
          marketActorFollowingId
          marketActorAdminId
          marketActorPlayersId
          marketActorTeamsId
          postLikesId
          marketActorCaptainId
          marketActorOrganizationId
          marketActorCoachId
          marketActorOwnerId
        }
        isOpenToOffers
        owner {
          id
          name
          aboutText
          websiteLink
          region
          actorType
          game
          isOpenToOffers
          createdAt
          updatedAt
          marketActorFolloweesId
          marketActorFollowingId
          marketActorAdminId
          marketActorPlayersId
          marketActorTeamsId
          postLikesId
          marketActorCaptainId
          marketActorOrganizationId
          marketActorCoachId
          marketActorOwnerId
        }
        teams {
          nextToken
        }
        Posts {
          nextToken
        }
        createdAt
        updatedAt
        marketActorFolloweesId
        marketActorFollowingId
        marketActorAdminId
        marketActorPlayersId
        marketActorTeamsId
        postLikesId
        marketActorCaptainId
        marketActorOrganizationId
        marketActorCoachId
        marketActorOwnerId
      }
      players {
        items {
          id
          name
          aboutText
          websiteLink
          region
          actorType
          game
          isOpenToOffers
          createdAt
          updatedAt
          marketActorFolloweesId
          marketActorFollowingId
          marketActorAdminId
          marketActorPlayersId
          marketActorTeamsId
          postLikesId
          marketActorCaptainId
          marketActorOrganizationId
          marketActorCoachId
          marketActorOwnerId
        }
        nextToken
      }
      coach {
        id
        name
        aboutText
        websiteLink
        region
        actorType
        followees {
          nextToken
        }
        following {
          nextToken
        }
        game
        captain {
          id
          name
          aboutText
          websiteLink
          region
          actorType
          game
          isOpenToOffers
          createdAt
          updatedAt
          marketActorFolloweesId
          marketActorFollowingId
          marketActorAdminId
          marketActorPlayersId
          marketActorTeamsId
          postLikesId
          marketActorCaptainId
          marketActorOrganizationId
          marketActorCoachId
          marketActorOwnerId
        }
        admin {
          nextToken
        }
        organization {
          id
          name
          aboutText
          websiteLink
          region
          actorType
          game
          isOpenToOffers
          createdAt
          updatedAt
          marketActorFolloweesId
          marketActorFollowingId
          marketActorAdminId
          marketActorPlayersId
          marketActorTeamsId
          postLikesId
          marketActorCaptainId
          marketActorOrganizationId
          marketActorCoachId
          marketActorOwnerId
        }
        players {
          nextToken
        }
        coach {
          id
          name
          aboutText
          websiteLink
          region
          actorType
          game
          isOpenToOffers
          createdAt
          updatedAt
          marketActorFolloweesId
          marketActorFollowingId
          marketActorAdminId
          marketActorPlayersId
          marketActorTeamsId
          postLikesId
          marketActorCaptainId
          marketActorOrganizationId
          marketActorCoachId
          marketActorOwnerId
        }
        isOpenToOffers
        owner {
          id
          name
          aboutText
          websiteLink
          region
          actorType
          game
          isOpenToOffers
          createdAt
          updatedAt
          marketActorFolloweesId
          marketActorFollowingId
          marketActorAdminId
          marketActorPlayersId
          marketActorTeamsId
          postLikesId
          marketActorCaptainId
          marketActorOrganizationId
          marketActorCoachId
          marketActorOwnerId
        }
        teams {
          nextToken
        }
        Posts {
          nextToken
        }
        createdAt
        updatedAt
        marketActorFolloweesId
        marketActorFollowingId
        marketActorAdminId
        marketActorPlayersId
        marketActorTeamsId
        postLikesId
        marketActorCaptainId
        marketActorOrganizationId
        marketActorCoachId
        marketActorOwnerId
      }
      isOpenToOffers
      owner {
        id
        name
        aboutText
        websiteLink
        region
        actorType
        followees {
          nextToken
        }
        following {
          nextToken
        }
        game
        captain {
          id
          name
          aboutText
          websiteLink
          region
          actorType
          game
          isOpenToOffers
          createdAt
          updatedAt
          marketActorFolloweesId
          marketActorFollowingId
          marketActorAdminId
          marketActorPlayersId
          marketActorTeamsId
          postLikesId
          marketActorCaptainId
          marketActorOrganizationId
          marketActorCoachId
          marketActorOwnerId
        }
        admin {
          nextToken
        }
        organization {
          id
          name
          aboutText
          websiteLink
          region
          actorType
          game
          isOpenToOffers
          createdAt
          updatedAt
          marketActorFolloweesId
          marketActorFollowingId
          marketActorAdminId
          marketActorPlayersId
          marketActorTeamsId
          postLikesId
          marketActorCaptainId
          marketActorOrganizationId
          marketActorCoachId
          marketActorOwnerId
        }
        players {
          nextToken
        }
        coach {
          id
          name
          aboutText
          websiteLink
          region
          actorType
          game
          isOpenToOffers
          createdAt
          updatedAt
          marketActorFolloweesId
          marketActorFollowingId
          marketActorAdminId
          marketActorPlayersId
          marketActorTeamsId
          postLikesId
          marketActorCaptainId
          marketActorOrganizationId
          marketActorCoachId
          marketActorOwnerId
        }
        isOpenToOffers
        owner {
          id
          name
          aboutText
          websiteLink
          region
          actorType
          game
          isOpenToOffers
          createdAt
          updatedAt
          marketActorFolloweesId
          marketActorFollowingId
          marketActorAdminId
          marketActorPlayersId
          marketActorTeamsId
          postLikesId
          marketActorCaptainId
          marketActorOrganizationId
          marketActorCoachId
          marketActorOwnerId
        }
        teams {
          nextToken
        }
        Posts {
          nextToken
        }
        createdAt
        updatedAt
        marketActorFolloweesId
        marketActorFollowingId
        marketActorAdminId
        marketActorPlayersId
        marketActorTeamsId
        postLikesId
        marketActorCaptainId
        marketActorOrganizationId
        marketActorCoachId
        marketActorOwnerId
      }
      teams {
        items {
          id
          name
          aboutText
          websiteLink
          region
          actorType
          game
          isOpenToOffers
          createdAt
          updatedAt
          marketActorFolloweesId
          marketActorFollowingId
          marketActorAdminId
          marketActorPlayersId
          marketActorTeamsId
          postLikesId
          marketActorCaptainId
          marketActorOrganizationId
          marketActorCoachId
          marketActorOwnerId
        }
        nextToken
      }
      Posts {
        items {
          id
          title
          content
          createdAt
          updatedAt
          marketActorPostsId
          dealPostsId
          postOwnerId
        }
        nextToken
      }
      createdAt
      updatedAt
      marketActorFolloweesId
      marketActorFollowingId
      marketActorAdminId
      marketActorPlayersId
      marketActorTeamsId
      postLikesId
      marketActorCaptainId
      marketActorOrganizationId
      marketActorCoachId
      marketActorOwnerId
    }
  }
`;
export const listMarketActors = /* GraphQL */ `
  query ListMarketActors(
    $filter: ModelMarketActorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMarketActors(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        aboutText
        websiteLink
        region
        actorType
        followees {
          nextToken
        }
        following {
          nextToken
        }
        game
        captain {
          id
          name
          aboutText
          websiteLink
          region
          actorType
          game
          isOpenToOffers
          createdAt
          updatedAt
          marketActorFolloweesId
          marketActorFollowingId
          marketActorAdminId
          marketActorPlayersId
          marketActorTeamsId
          postLikesId
          marketActorCaptainId
          marketActorOrganizationId
          marketActorCoachId
          marketActorOwnerId
        }
        admin {
          nextToken
        }
        organization {
          id
          name
          aboutText
          websiteLink
          region
          actorType
          game
          isOpenToOffers
          createdAt
          updatedAt
          marketActorFolloweesId
          marketActorFollowingId
          marketActorAdminId
          marketActorPlayersId
          marketActorTeamsId
          postLikesId
          marketActorCaptainId
          marketActorOrganizationId
          marketActorCoachId
          marketActorOwnerId
        }
        players {
          nextToken
        }
        coach {
          id
          name
          aboutText
          websiteLink
          region
          actorType
          game
          isOpenToOffers
          createdAt
          updatedAt
          marketActorFolloweesId
          marketActorFollowingId
          marketActorAdminId
          marketActorPlayersId
          marketActorTeamsId
          postLikesId
          marketActorCaptainId
          marketActorOrganizationId
          marketActorCoachId
          marketActorOwnerId
        }
        isOpenToOffers
        owner {
          id
          name
          aboutText
          websiteLink
          region
          actorType
          game
          isOpenToOffers
          createdAt
          updatedAt
          marketActorFolloweesId
          marketActorFollowingId
          marketActorAdminId
          marketActorPlayersId
          marketActorTeamsId
          postLikesId
          marketActorCaptainId
          marketActorOrganizationId
          marketActorCoachId
          marketActorOwnerId
        }
        teams {
          nextToken
        }
        Posts {
          nextToken
        }
        createdAt
        updatedAt
        marketActorFolloweesId
        marketActorFollowingId
        marketActorAdminId
        marketActorPlayersId
        marketActorTeamsId
        postLikesId
        marketActorCaptainId
        marketActorOrganizationId
        marketActorCoachId
        marketActorOwnerId
      }
      nextToken
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      title
      content
      comments {
        items {
          id
          content
          createdAt
          updatedAt
          postCommentsId
          commentOwnerId
        }
        nextToken
      }
      likes {
        items {
          id
          name
          aboutText
          websiteLink
          region
          actorType
          game
          isOpenToOffers
          createdAt
          updatedAt
          marketActorFolloweesId
          marketActorFollowingId
          marketActorAdminId
          marketActorPlayersId
          marketActorTeamsId
          postLikesId
          marketActorCaptainId
          marketActorOrganizationId
          marketActorCoachId
          marketActorOwnerId
        }
        nextToken
      }
      owner {
        id
        name
        aboutText
        websiteLink
        region
        actorType
        followees {
          nextToken
        }
        following {
          nextToken
        }
        game
        captain {
          id
          name
          aboutText
          websiteLink
          region
          actorType
          game
          isOpenToOffers
          createdAt
          updatedAt
          marketActorFolloweesId
          marketActorFollowingId
          marketActorAdminId
          marketActorPlayersId
          marketActorTeamsId
          postLikesId
          marketActorCaptainId
          marketActorOrganizationId
          marketActorCoachId
          marketActorOwnerId
        }
        admin {
          nextToken
        }
        organization {
          id
          name
          aboutText
          websiteLink
          region
          actorType
          game
          isOpenToOffers
          createdAt
          updatedAt
          marketActorFolloweesId
          marketActorFollowingId
          marketActorAdminId
          marketActorPlayersId
          marketActorTeamsId
          postLikesId
          marketActorCaptainId
          marketActorOrganizationId
          marketActorCoachId
          marketActorOwnerId
        }
        players {
          nextToken
        }
        coach {
          id
          name
          aboutText
          websiteLink
          region
          actorType
          game
          isOpenToOffers
          createdAt
          updatedAt
          marketActorFolloweesId
          marketActorFollowingId
          marketActorAdminId
          marketActorPlayersId
          marketActorTeamsId
          postLikesId
          marketActorCaptainId
          marketActorOrganizationId
          marketActorCoachId
          marketActorOwnerId
        }
        isOpenToOffers
        owner {
          id
          name
          aboutText
          websiteLink
          region
          actorType
          game
          isOpenToOffers
          createdAt
          updatedAt
          marketActorFolloweesId
          marketActorFollowingId
          marketActorAdminId
          marketActorPlayersId
          marketActorTeamsId
          postLikesId
          marketActorCaptainId
          marketActorOrganizationId
          marketActorCoachId
          marketActorOwnerId
        }
        teams {
          nextToken
        }
        Posts {
          nextToken
        }
        createdAt
        updatedAt
        marketActorFolloweesId
        marketActorFollowingId
        marketActorAdminId
        marketActorPlayersId
        marketActorTeamsId
        postLikesId
        marketActorCaptainId
        marketActorOrganizationId
        marketActorCoachId
        marketActorOwnerId
      }
      Deal {
        id
        status
        sponsee {
          id
          name
          aboutText
          websiteLink
          region
          actorType
          game
          isOpenToOffers
          createdAt
          updatedAt
          marketActorFolloweesId
          marketActorFollowingId
          marketActorAdminId
          marketActorPlayersId
          marketActorTeamsId
          postLikesId
          marketActorCaptainId
          marketActorOrganizationId
          marketActorCoachId
          marketActorOwnerId
        }
        sponser {
          id
          name
          aboutText
          websiteLink
          region
          actorType
          game
          isOpenToOffers
          createdAt
          updatedAt
          marketActorFolloweesId
          marketActorFollowingId
          marketActorAdminId
          marketActorPlayersId
          marketActorTeamsId
          postLikesId
          marketActorCaptainId
          marketActorOrganizationId
          marketActorCoachId
          marketActorOwnerId
        }
        posts {
          nextToken
        }
        createdAt
        updatedAt
        dealSponseeId
        dealSponserId
        owner
      }
      createdAt
      updatedAt
      marketActorPostsId
      dealPostsId
      postOwnerId
    }
  }
`;
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        content
        comments {
          nextToken
        }
        likes {
          nextToken
        }
        owner {
          id
          name
          aboutText
          websiteLink
          region
          actorType
          game
          isOpenToOffers
          createdAt
          updatedAt
          marketActorFolloweesId
          marketActorFollowingId
          marketActorAdminId
          marketActorPlayersId
          marketActorTeamsId
          postLikesId
          marketActorCaptainId
          marketActorOrganizationId
          marketActorCoachId
          marketActorOwnerId
        }
        Deal {
          id
          status
          createdAt
          updatedAt
          dealSponseeId
          dealSponserId
          owner
        }
        createdAt
        updatedAt
        marketActorPostsId
        dealPostsId
        postOwnerId
      }
      nextToken
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
      id
      post {
        id
        title
        content
        comments {
          nextToken
        }
        likes {
          nextToken
        }
        owner {
          id
          name
          aboutText
          websiteLink
          region
          actorType
          game
          isOpenToOffers
          createdAt
          updatedAt
          marketActorFolloweesId
          marketActorFollowingId
          marketActorAdminId
          marketActorPlayersId
          marketActorTeamsId
          postLikesId
          marketActorCaptainId
          marketActorOrganizationId
          marketActorCoachId
          marketActorOwnerId
        }
        Deal {
          id
          status
          createdAt
          updatedAt
          dealSponseeId
          dealSponserId
          owner
        }
        createdAt
        updatedAt
        marketActorPostsId
        dealPostsId
        postOwnerId
      }
      content
      owner {
        id
        name
        aboutText
        websiteLink
        region
        actorType
        followees {
          nextToken
        }
        following {
          nextToken
        }
        game
        captain {
          id
          name
          aboutText
          websiteLink
          region
          actorType
          game
          isOpenToOffers
          createdAt
          updatedAt
          marketActorFolloweesId
          marketActorFollowingId
          marketActorAdminId
          marketActorPlayersId
          marketActorTeamsId
          postLikesId
          marketActorCaptainId
          marketActorOrganizationId
          marketActorCoachId
          marketActorOwnerId
        }
        admin {
          nextToken
        }
        organization {
          id
          name
          aboutText
          websiteLink
          region
          actorType
          game
          isOpenToOffers
          createdAt
          updatedAt
          marketActorFolloweesId
          marketActorFollowingId
          marketActorAdminId
          marketActorPlayersId
          marketActorTeamsId
          postLikesId
          marketActorCaptainId
          marketActorOrganizationId
          marketActorCoachId
          marketActorOwnerId
        }
        players {
          nextToken
        }
        coach {
          id
          name
          aboutText
          websiteLink
          region
          actorType
          game
          isOpenToOffers
          createdAt
          updatedAt
          marketActorFolloweesId
          marketActorFollowingId
          marketActorAdminId
          marketActorPlayersId
          marketActorTeamsId
          postLikesId
          marketActorCaptainId
          marketActorOrganizationId
          marketActorCoachId
          marketActorOwnerId
        }
        isOpenToOffers
        owner {
          id
          name
          aboutText
          websiteLink
          region
          actorType
          game
          isOpenToOffers
          createdAt
          updatedAt
          marketActorFolloweesId
          marketActorFollowingId
          marketActorAdminId
          marketActorPlayersId
          marketActorTeamsId
          postLikesId
          marketActorCaptainId
          marketActorOrganizationId
          marketActorCoachId
          marketActorOwnerId
        }
        teams {
          nextToken
        }
        Posts {
          nextToken
        }
        createdAt
        updatedAt
        marketActorFolloweesId
        marketActorFollowingId
        marketActorAdminId
        marketActorPlayersId
        marketActorTeamsId
        postLikesId
        marketActorCaptainId
        marketActorOrganizationId
        marketActorCoachId
        marketActorOwnerId
      }
      createdAt
      updatedAt
      postCommentsId
      commentOwnerId
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        post {
          id
          title
          content
          createdAt
          updatedAt
          marketActorPostsId
          dealPostsId
          postOwnerId
        }
        content
        owner {
          id
          name
          aboutText
          websiteLink
          region
          actorType
          game
          isOpenToOffers
          createdAt
          updatedAt
          marketActorFolloweesId
          marketActorFollowingId
          marketActorAdminId
          marketActorPlayersId
          marketActorTeamsId
          postLikesId
          marketActorCaptainId
          marketActorOrganizationId
          marketActorCoachId
          marketActorOwnerId
        }
        createdAt
        updatedAt
        postCommentsId
        commentOwnerId
      }
      nextToken
    }
  }
`;
export const getDeal = /* GraphQL */ `
  query GetDeal($id: ID!) {
    getDeal(id: $id) {
      id
      status
      sponsee {
        id
        name
        aboutText
        websiteLink
        region
        actorType
        followees {
          nextToken
        }
        following {
          nextToken
        }
        game
        captain {
          id
          name
          aboutText
          websiteLink
          region
          actorType
          game
          isOpenToOffers
          createdAt
          updatedAt
          marketActorFolloweesId
          marketActorFollowingId
          marketActorAdminId
          marketActorPlayersId
          marketActorTeamsId
          postLikesId
          marketActorCaptainId
          marketActorOrganizationId
          marketActorCoachId
          marketActorOwnerId
        }
        admin {
          nextToken
        }
        organization {
          id
          name
          aboutText
          websiteLink
          region
          actorType
          game
          isOpenToOffers
          createdAt
          updatedAt
          marketActorFolloweesId
          marketActorFollowingId
          marketActorAdminId
          marketActorPlayersId
          marketActorTeamsId
          postLikesId
          marketActorCaptainId
          marketActorOrganizationId
          marketActorCoachId
          marketActorOwnerId
        }
        players {
          nextToken
        }
        coach {
          id
          name
          aboutText
          websiteLink
          region
          actorType
          game
          isOpenToOffers
          createdAt
          updatedAt
          marketActorFolloweesId
          marketActorFollowingId
          marketActorAdminId
          marketActorPlayersId
          marketActorTeamsId
          postLikesId
          marketActorCaptainId
          marketActorOrganizationId
          marketActorCoachId
          marketActorOwnerId
        }
        isOpenToOffers
        owner {
          id
          name
          aboutText
          websiteLink
          region
          actorType
          game
          isOpenToOffers
          createdAt
          updatedAt
          marketActorFolloweesId
          marketActorFollowingId
          marketActorAdminId
          marketActorPlayersId
          marketActorTeamsId
          postLikesId
          marketActorCaptainId
          marketActorOrganizationId
          marketActorCoachId
          marketActorOwnerId
        }
        teams {
          nextToken
        }
        Posts {
          nextToken
        }
        createdAt
        updatedAt
        marketActorFolloweesId
        marketActorFollowingId
        marketActorAdminId
        marketActorPlayersId
        marketActorTeamsId
        postLikesId
        marketActorCaptainId
        marketActorOrganizationId
        marketActorCoachId
        marketActorOwnerId
      }
      sponser {
        id
        name
        aboutText
        websiteLink
        region
        actorType
        followees {
          nextToken
        }
        following {
          nextToken
        }
        game
        captain {
          id
          name
          aboutText
          websiteLink
          region
          actorType
          game
          isOpenToOffers
          createdAt
          updatedAt
          marketActorFolloweesId
          marketActorFollowingId
          marketActorAdminId
          marketActorPlayersId
          marketActorTeamsId
          postLikesId
          marketActorCaptainId
          marketActorOrganizationId
          marketActorCoachId
          marketActorOwnerId
        }
        admin {
          nextToken
        }
        organization {
          id
          name
          aboutText
          websiteLink
          region
          actorType
          game
          isOpenToOffers
          createdAt
          updatedAt
          marketActorFolloweesId
          marketActorFollowingId
          marketActorAdminId
          marketActorPlayersId
          marketActorTeamsId
          postLikesId
          marketActorCaptainId
          marketActorOrganizationId
          marketActorCoachId
          marketActorOwnerId
        }
        players {
          nextToken
        }
        coach {
          id
          name
          aboutText
          websiteLink
          region
          actorType
          game
          isOpenToOffers
          createdAt
          updatedAt
          marketActorFolloweesId
          marketActorFollowingId
          marketActorAdminId
          marketActorPlayersId
          marketActorTeamsId
          postLikesId
          marketActorCaptainId
          marketActorOrganizationId
          marketActorCoachId
          marketActorOwnerId
        }
        isOpenToOffers
        owner {
          id
          name
          aboutText
          websiteLink
          region
          actorType
          game
          isOpenToOffers
          createdAt
          updatedAt
          marketActorFolloweesId
          marketActorFollowingId
          marketActorAdminId
          marketActorPlayersId
          marketActorTeamsId
          postLikesId
          marketActorCaptainId
          marketActorOrganizationId
          marketActorCoachId
          marketActorOwnerId
        }
        teams {
          nextToken
        }
        Posts {
          nextToken
        }
        createdAt
        updatedAt
        marketActorFolloweesId
        marketActorFollowingId
        marketActorAdminId
        marketActorPlayersId
        marketActorTeamsId
        postLikesId
        marketActorCaptainId
        marketActorOrganizationId
        marketActorCoachId
        marketActorOwnerId
      }
      posts {
        items {
          id
          title
          content
          createdAt
          updatedAt
          marketActorPostsId
          dealPostsId
          postOwnerId
        }
        nextToken
      }
      createdAt
      updatedAt
      dealSponseeId
      dealSponserId
      owner
    }
  }
`;
export const listDeals = /* GraphQL */ `
  query ListDeals(
    $filter: ModelDealFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDeals(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        status
        sponsee {
          id
          name
          aboutText
          websiteLink
          region
          actorType
          game
          isOpenToOffers
          createdAt
          updatedAt
          marketActorFolloweesId
          marketActorFollowingId
          marketActorAdminId
          marketActorPlayersId
          marketActorTeamsId
          postLikesId
          marketActorCaptainId
          marketActorOrganizationId
          marketActorCoachId
          marketActorOwnerId
        }
        sponser {
          id
          name
          aboutText
          websiteLink
          region
          actorType
          game
          isOpenToOffers
          createdAt
          updatedAt
          marketActorFolloweesId
          marketActorFollowingId
          marketActorAdminId
          marketActorPlayersId
          marketActorTeamsId
          postLikesId
          marketActorCaptainId
          marketActorOrganizationId
          marketActorCoachId
          marketActorOwnerId
        }
        posts {
          nextToken
        }
        createdAt
        updatedAt
        dealSponseeId
        dealSponserId
        owner
      }
      nextToken
    }
  }
`;
