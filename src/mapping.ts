import { BigInt } from "@graphprotocol/graph-ts"
import {
  C3Retired,
} from "../generated/RetireC3Carbon/RetireC3Carbon"
import {
  MossRetired,
} from "../generated/RetireMossCarbon/RetireMossCarbon"
import {
  ToucanRetired,
} from "../generated/RetireToucanCarbon/RetireToucanCarbon"
import { Retirement, User } from "../generated/schema"

export function handleC3Retired(event: C3Retired): void {
  let entity = new Retirement(event.transaction.hash.toHexString())

  entity.tokenLabel = "C3";
  entity.retiringAddress = event.params.retiringAddress;
  entity.beneficiaryAddress = event.params.beneficiaryAddress;
  entity.beneficiaryString = event.params.beneficiaryString;
  entity.retirementMessage = event.params.retirementMessage;
  entity.carbonPool = event.params.carbonPool;
  entity.carbonToken = event.params.carbonToken;
  entity.retiredAmount = event.params.retiredAmount;

  entity.save()

  let user = User.load(event.transaction.from.toHexString());
  if (!user) {
    user = new User(event.transaction.from.toHexString());
    user.totalCarbonRetired = BigInt.fromI32(0);
    user.totalRetirements = BigInt.fromI32(0);
    user.retirements = [];
  }

  user.totalCarbonRetired = user.totalCarbonRetired.plus(event.params.retiredAmount);
  user.totalRetirements = user.totalRetirements.plus(BigInt.fromI32(1));

  let newRetirementsData = user.retirements;
  newRetirementsData.push(event.transaction.hash.toHexString());
  user.retirements = newRetirementsData;

  user.save();

}


export function handleMossRetired(event: MossRetired): void {
  let entity = new Retirement(event.transaction.hash.toHexString())

  entity.tokenLabel = "MOSS";
  entity.retiringAddress = event.params.retiringAddress;
  entity.beneficiaryAddress = event.params.beneficiaryAddress;
  entity.beneficiaryString = event.params.beneficiaryString;
  entity.retirementMessage = event.params.retirementMessage;
  entity.carbonPool = event.params.carbonPool;
  entity.retiredAmount = event.params.retiredAmount;

  entity.save()

  let user = User.load(event.transaction.from.toHexString());
  if (!user) {
    user = new User(event.transaction.from.toHexString());
    user.totalCarbonRetired = BigInt.fromI32(0);
    user.totalRetirements = BigInt.fromI32(0);
    user.retirements = [];
  }

  user.totalCarbonRetired = user.totalCarbonRetired.plus(event.params.retiredAmount);
  user.totalRetirements = user.totalRetirements.plus(BigInt.fromI32(1));

  let newRetirementsData = user.retirements;
  newRetirementsData.push(event.transaction.hash.toHexString());
  user.retirements = newRetirementsData;

  user.save();

}

export function handleToucanRetired(event: ToucanRetired): void {
  let entity = new Retirement(event.transaction.hash.toHexString())

  entity.tokenLabel = "TOUCAN";
  entity.retiringAddress = event.params.retiringAddress;
  entity.beneficiaryAddress = event.params.beneficiaryAddress;
  entity.beneficiaryString = event.params.beneficiaryString;
  entity.retirementMessage = event.params.retirementMessage;
  entity.carbonPool = event.params.carbonPool;
  entity.carbonToken = event.params.carbonToken;
  entity.retiredAmount = event.params.retiredAmount;

  entity.save()

  let user = User.load(event.transaction.from.toHexString());
  if (!user) {
    user = new User(event.transaction.from.toHexString());
    user.totalCarbonRetired = BigInt.fromI32(0);
    user.totalRetirements = BigInt.fromI32(0);
    user.retirements = [];
  }

  user.totalCarbonRetired = user.totalCarbonRetired.plus(event.params.retiredAmount);
  user.totalRetirements = user.totalRetirements.plus(BigInt.fromI32(1));

  let newRetirementsData = user.retirements;
  newRetirementsData.push(event.transaction.hash.toHexString());
  user.retirements = newRetirementsData;

  user.save();

}
