# Klima Retirements Subgraph

Build completed: QmYjLUHo3tmajJTTzg9GMrusMr3zFeUReiai2JxYMTBdWS

Deployed to https://thegraph.com/explorer/subgraph/anudit/klima-retirements

Subgraph endpoints:
Queries (HTTP):     https://api.thegraph.com/subgraphs/name/anudit/klima-retirements
Subscriptions (WS): wss://api.thegraph.com/subgraphs/name/anudit/klima-retirements

Example,
```gql
{
  user(id: "0x12b2398405f49dec00d7ceef9c0925e6fc96c51f") {
    id
    totalCarbonRetired
    totalRetirements
    retirements {
      id
      tokenLabel
      carbonToken
      beneficiaryAddress
      beneficiaryString
      retiredAmount
      retirementMessage
    }
  }
}
```

[Get Project Vintage Deets](https://api.thegraph.com/subgraphs/name/toucanprotocol/matic/graphql?query=%7B%0A++tco2Tokens+%28where%3A+%7Bid%3A+%220xb139c4cc9d20a3618e9a2268d73eff18c496b991%22%7D%29+%7B%0A++++id%0A++++name%0A++++symbol%0A++++address%0A++++projectVintage+%7B%0A++++++name%0A++++++id%0A++++%7D%0A++++score%0A++%7D%0A%7D
)
