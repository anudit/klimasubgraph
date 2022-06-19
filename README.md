# Klima Retirements Subgraph

Build completed: QmRGpH4QiWh1dvSLoUGyfn9Pwv34pgoto4R53mnw1K32Kh

Deployed to https://thegraph.com/explorer/subgraph/anudit/klima-retirements

Subgraph endpoints:
Queries (HTTP):     https://api.thegraph.com/subgraphs/name/anudit/klima-retirements
Subscriptions (WS): wss://api.thegraph.com/subgraphs/name/anudit/klima-retirements

Example,
```gql
{
  users {
    id
    totalCarbonRetired
    totalRetirements
    retirements {
      carbonToken
      beneficiaryAddress
      beneficiaryString
      retiredAmount
      retirementMessage
    }
  }
}

```
