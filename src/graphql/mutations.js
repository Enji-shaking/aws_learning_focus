/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createMarketActor = /* GraphQL */ `
  mutation CreateMarketActor(
    $input: CreateMarketActorInput!
    $condition: ModelMarketActorConditionInput
  ) {
    createMarketActor(input: $input, condition: $condition) {
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
export const updateMarketActor = /* GraphQL */ `
  mutation UpdateMarketActor(
    $input: UpdateMarketActorInput!
    $condition: ModelMarketActorConditionInput
  ) {
    updateMarketActor(input: $input, condition: $condition) {
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
export const deleteMarketActor = /* GraphQL */ `
  mutation DeleteMarketActor(
    $input: DeleteMarketActorInput!
    $condition: ModelMarketActorConditionInput
  ) {
    deleteMarketActor(input: $input, condition: $condition) {
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
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
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
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
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
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
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
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
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
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
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
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
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
export const createDeal = /* GraphQL */ `
  mutation CreateDeal(
    $input: CreateDealInput!
    $condition: ModelDealConditionInput
  ) {
    createDeal(input: $input, condition: $condition) {
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
export const updateDeal = /* GraphQL */ `
  mutation UpdateDeal(
    $input: UpdateDealInput!
    $condition: ModelDealConditionInput
  ) {
    updateDeal(input: $input, condition: $condition) {
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
export const deleteDeal = /* GraphQL */ `
  mutation DeleteDeal(
    $input: DeleteDealInput!
    $condition: ModelDealConditionInput
  ) {
    deleteDeal(input: $input, condition: $condition) {
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
