// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class C3Retired extends ethereum.Event {
  get params(): C3Retired__Params {
    return new C3Retired__Params(this);
  }
}

export class C3Retired__Params {
  _event: C3Retired;

  constructor(event: C3Retired) {
    this._event = event;
  }

  get retiringAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get beneficiaryAddress(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get beneficiaryString(): string {
    return this._event.parameters[2].value.toString();
  }

  get retirementMessage(): string {
    return this._event.parameters[3].value.toString();
  }

  get carbonPool(): Address {
    return this._event.parameters[4].value.toAddress();
  }

  get carbonToken(): Address {
    return this._event.parameters[5].value.toAddress();
  }

  get retiredAmount(): BigInt {
    return this._event.parameters[6].value.toBigInt();
  }
}

export class MossRetired extends ethereum.Event {
  get params(): MossRetired__Params {
    return new MossRetired__Params(this);
  }
}

export class MossRetired__Params {
  _event: MossRetired;

  constructor(event: MossRetired) {
    this._event = event;
  }

  get retiringAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get beneficiaryAddress(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get beneficiaryString(): string {
    return this._event.parameters[2].value.toString();
  }

  get retirementMessage(): string {
    return this._event.parameters[3].value.toString();
  }

  get carbonPool(): Address {
    return this._event.parameters[4].value.toAddress();
  }

  get retiredAmount(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }
}

export class ToucanRetired extends ethereum.Event {
  get params(): ToucanRetired__Params {
    return new ToucanRetired__Params(this);
  }
}

export class ToucanRetired__Params {
  _event: ToucanRetired;

  constructor(event: ToucanRetired) {
    this._event = event;
  }

  get retiringAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get beneficiaryAddress(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get beneficiaryString(): string {
    return this._event.parameters[2].value.toString();
  }

  get retirementMessage(): string {
    return this._event.parameters[3].value.toString();
  }

  get carbonPool(): Address {
    return this._event.parameters[4].value.toAddress();
  }

  get carbonToken(): Address {
    return this._event.parameters[5].value.toAddress();
  }

  get retiredAmount(): BigInt {
    return this._event.parameters[6].value.toBigInt();
  }
}

export class AddressUpdated extends ethereum.Event {
  get params(): AddressUpdated__Params {
    return new AddressUpdated__Params(this);
  }
}

export class AddressUpdated__Params {
  _event: AddressUpdated;

  constructor(event: AddressUpdated) {
    this._event = event;
  }

  get addressIndex(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get oldAddress(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get newAddress(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class BridgeHelperUpdated extends ethereum.Event {
  get params(): BridgeHelperUpdated__Params {
    return new BridgeHelperUpdated__Params(this);
  }
}

export class BridgeHelperUpdated__Params {
  _event: BridgeHelperUpdated;

  constructor(event: BridgeHelperUpdated) {
    this._event = event;
  }

  get bridgeID(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get helper(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class PoolAdded extends ethereum.Event {
  get params(): PoolAdded__Params {
    return new PoolAdded__Params(this);
  }
}

export class PoolAdded__Params {
  _event: PoolAdded;

  constructor(event: PoolAdded) {
    this._event = event;
  }

  get poolToken(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get bridge(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class PoolRemoved extends ethereum.Event {
  get params(): PoolRemoved__Params {
    return new PoolRemoved__Params(this);
  }
}

export class PoolRemoved__Params {
  _event: PoolRemoved;

  constructor(event: PoolRemoved) {
    this._event = event;
  }

  get poolToken(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class KlimaRetirementAggregator__getSourceAmountResult {
  value0: BigInt;
  value1: BigInt;

  constructor(value0: BigInt, value1: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    return map;
  }
}

export class KlimaRetirementAggregator__getSourceAmountSpecificResult {
  value0: BigInt;
  value1: BigInt;

  constructor(value0: BigInt, value1: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    return map;
  }
}

export class KlimaRetirementAggregator extends ethereum.SmartContract {
  static bind(address: Address): KlimaRetirementAggregator {
    return new KlimaRetirementAggregator("KlimaRetirementAggregator", address);
  }

  KLIMA(): Address {
    let result = super.call("KLIMA", "KLIMA():(address)", []);

    return result[0].toAddress();
  }

  try_KLIMA(): ethereum.CallResult<Address> {
    let result = super.tryCall("KLIMA", "KLIMA():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  USDC(): Address {
    let result = super.call("USDC", "USDC():(address)", []);

    return result[0].toAddress();
  }

  try_USDC(): ethereum.CallResult<Address> {
    let result = super.tryCall("USDC", "USDC():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  addPool(_poolToken: Address, _poolBridge: BigInt): boolean {
    let result = super.call("addPool", "addPool(address,uint256):(bool)", [
      ethereum.Value.fromAddress(_poolToken),
      ethereum.Value.fromUnsignedBigInt(_poolBridge)
    ]);

    return result[0].toBoolean();
  }

  try_addPool(
    _poolToken: Address,
    _poolBridge: BigInt
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall("addPool", "addPool(address,uint256):(bool)", [
      ethereum.Value.fromAddress(_poolToken),
      ethereum.Value.fromUnsignedBigInt(_poolBridge)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  bridgeHelper(param0: BigInt): Address {
    let result = super.call("bridgeHelper", "bridgeHelper(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);

    return result[0].toAddress();
  }

  try_bridgeHelper(param0: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "bridgeHelper",
      "bridgeHelper(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  feeWithdraw(_token: Address, _recipient: Address): boolean {
    let result = super.call(
      "feeWithdraw",
      "feeWithdraw(address,address):(bool)",
      [
        ethereum.Value.fromAddress(_token),
        ethereum.Value.fromAddress(_recipient)
      ]
    );

    return result[0].toBoolean();
  }

  try_feeWithdraw(
    _token: Address,
    _recipient: Address
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "feeWithdraw",
      "feeWithdraw(address,address):(bool)",
      [
        ethereum.Value.fromAddress(_token),
        ethereum.Value.fromAddress(_recipient)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  getSourceAmount(
    _sourceToken: Address,
    _poolToken: Address,
    _amount: BigInt,
    _amountInCarbon: boolean
  ): KlimaRetirementAggregator__getSourceAmountResult {
    let result = super.call(
      "getSourceAmount",
      "getSourceAmount(address,address,uint256,bool):(uint256,uint256)",
      [
        ethereum.Value.fromAddress(_sourceToken),
        ethereum.Value.fromAddress(_poolToken),
        ethereum.Value.fromUnsignedBigInt(_amount),
        ethereum.Value.fromBoolean(_amountInCarbon)
      ]
    );

    return new KlimaRetirementAggregator__getSourceAmountResult(
      result[0].toBigInt(),
      result[1].toBigInt()
    );
  }

  try_getSourceAmount(
    _sourceToken: Address,
    _poolToken: Address,
    _amount: BigInt,
    _amountInCarbon: boolean
  ): ethereum.CallResult<KlimaRetirementAggregator__getSourceAmountResult> {
    let result = super.tryCall(
      "getSourceAmount",
      "getSourceAmount(address,address,uint256,bool):(uint256,uint256)",
      [
        ethereum.Value.fromAddress(_sourceToken),
        ethereum.Value.fromAddress(_poolToken),
        ethereum.Value.fromUnsignedBigInt(_amount),
        ethereum.Value.fromBoolean(_amountInCarbon)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new KlimaRetirementAggregator__getSourceAmountResult(
        value[0].toBigInt(),
        value[1].toBigInt()
      )
    );
  }

  getSourceAmountSpecific(
    _sourceToken: Address,
    _poolToken: Address,
    _amount: BigInt,
    _amountInCarbon: boolean
  ): KlimaRetirementAggregator__getSourceAmountSpecificResult {
    let result = super.call(
      "getSourceAmountSpecific",
      "getSourceAmountSpecific(address,address,uint256,bool):(uint256,uint256)",
      [
        ethereum.Value.fromAddress(_sourceToken),
        ethereum.Value.fromAddress(_poolToken),
        ethereum.Value.fromUnsignedBigInt(_amount),
        ethereum.Value.fromBoolean(_amountInCarbon)
      ]
    );

    return new KlimaRetirementAggregator__getSourceAmountSpecificResult(
      result[0].toBigInt(),
      result[1].toBigInt()
    );
  }

  try_getSourceAmountSpecific(
    _sourceToken: Address,
    _poolToken: Address,
    _amount: BigInt,
    _amountInCarbon: boolean
  ): ethereum.CallResult<
    KlimaRetirementAggregator__getSourceAmountSpecificResult
  > {
    let result = super.tryCall(
      "getSourceAmountSpecific",
      "getSourceAmountSpecific(address,address,uint256,bool):(uint256,uint256)",
      [
        ethereum.Value.fromAddress(_sourceToken),
        ethereum.Value.fromAddress(_poolToken),
        ethereum.Value.fromUnsignedBigInt(_amount),
        ethereum.Value.fromBoolean(_amountInCarbon)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new KlimaRetirementAggregator__getSourceAmountSpecificResult(
        value[0].toBigInt(),
        value[1].toBigInt()
      )
    );
  }

  isPoolToken(param0: Address): boolean {
    let result = super.call("isPoolToken", "isPoolToken(address):(bool)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return result[0].toBoolean();
  }

  try_isPoolToken(param0: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("isPoolToken", "isPoolToken(address):(bool)", [
      ethereum.Value.fromAddress(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  klimaRetirementStorage(): Address {
    let result = super.call(
      "klimaRetirementStorage",
      "klimaRetirementStorage():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_klimaRetirementStorage(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "klimaRetirementStorage",
      "klimaRetirementStorage():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  poolBridge(param0: Address): BigInt {
    let result = super.call("poolBridge", "poolBridge(address):(uint256)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return result[0].toBigInt();
  }

  try_poolBridge(param0: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("poolBridge", "poolBridge(address):(uint256)", [
      ethereum.Value.fromAddress(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  removePool(_poolToken: Address): boolean {
    let result = super.call("removePool", "removePool(address):(bool)", [
      ethereum.Value.fromAddress(_poolToken)
    ]);

    return result[0].toBoolean();
  }

  try_removePool(_poolToken: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("removePool", "removePool(address):(bool)", [
      ethereum.Value.fromAddress(_poolToken)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  sKLIMA(): Address {
    let result = super.call("sKLIMA", "sKLIMA():(address)", []);

    return result[0].toAddress();
  }

  try_sKLIMA(): ethereum.CallResult<Address> {
    let result = super.tryCall("sKLIMA", "sKLIMA():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  setAddress(_selection: BigInt, _newAddress: Address): boolean {
    let result = super.call(
      "setAddress",
      "setAddress(uint256,address):(bool)",
      [
        ethereum.Value.fromUnsignedBigInt(_selection),
        ethereum.Value.fromAddress(_newAddress)
      ]
    );

    return result[0].toBoolean();
  }

  try_setAddress(
    _selection: BigInt,
    _newAddress: Address
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "setAddress",
      "setAddress(uint256,address):(bool)",
      [
        ethereum.Value.fromUnsignedBigInt(_selection),
        ethereum.Value.fromAddress(_newAddress)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  setBridgeHelper(_bridgeID: BigInt, _helper: Address): boolean {
    let result = super.call(
      "setBridgeHelper",
      "setBridgeHelper(uint256,address):(bool)",
      [
        ethereum.Value.fromUnsignedBigInt(_bridgeID),
        ethereum.Value.fromAddress(_helper)
      ]
    );

    return result[0].toBoolean();
  }

  try_setBridgeHelper(
    _bridgeID: BigInt,
    _helper: Address
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "setBridgeHelper",
      "setBridgeHelper(uint256,address):(bool)",
      [
        ethereum.Value.fromUnsignedBigInt(_bridgeID),
        ethereum.Value.fromAddress(_helper)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  staking(): Address {
    let result = super.call("staking", "staking():(address)", []);

    return result[0].toAddress();
  }

  try_staking(): ethereum.CallResult<Address> {
    let result = super.tryCall("staking", "staking():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  stakingHelper(): Address {
    let result = super.call("stakingHelper", "stakingHelper():(address)", []);

    return result[0].toAddress();
  }

  try_stakingHelper(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "stakingHelper",
      "stakingHelper():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  treasury(): Address {
    let result = super.call("treasury", "treasury():(address)", []);

    return result[0].toAddress();
  }

  try_treasury(): ethereum.CallResult<Address> {
    let result = super.tryCall("treasury", "treasury():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  wsKLIMA(): Address {
    let result = super.call("wsKLIMA", "wsKLIMA():(address)", []);

    return result[0].toAddress();
  }

  try_wsKLIMA(): ethereum.CallResult<Address> {
    let result = super.tryCall("wsKLIMA", "wsKLIMA():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class AddPoolCall extends ethereum.Call {
  get inputs(): AddPoolCall__Inputs {
    return new AddPoolCall__Inputs(this);
  }

  get outputs(): AddPoolCall__Outputs {
    return new AddPoolCall__Outputs(this);
  }
}

export class AddPoolCall__Inputs {
  _call: AddPoolCall;

  constructor(call: AddPoolCall) {
    this._call = call;
  }

  get _poolToken(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _poolBridge(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class AddPoolCall__Outputs {
  _call: AddPoolCall;

  constructor(call: AddPoolCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class FeeWithdrawCall extends ethereum.Call {
  get inputs(): FeeWithdrawCall__Inputs {
    return new FeeWithdrawCall__Inputs(this);
  }

  get outputs(): FeeWithdrawCall__Outputs {
    return new FeeWithdrawCall__Outputs(this);
  }
}

export class FeeWithdrawCall__Inputs {
  _call: FeeWithdrawCall;

  constructor(call: FeeWithdrawCall) {
    this._call = call;
  }

  get _token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _recipient(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class FeeWithdrawCall__Outputs {
  _call: FeeWithdrawCall;

  constructor(call: FeeWithdrawCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class InitializeCall extends ethereum.Call {
  get inputs(): InitializeCall__Inputs {
    return new InitializeCall__Inputs(this);
  }

  get outputs(): InitializeCall__Outputs {
    return new InitializeCall__Outputs(this);
  }
}

export class InitializeCall__Inputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}

export class InitializeCall__Outputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}

export class RemovePoolCall extends ethereum.Call {
  get inputs(): RemovePoolCall__Inputs {
    return new RemovePoolCall__Inputs(this);
  }

  get outputs(): RemovePoolCall__Outputs {
    return new RemovePoolCall__Outputs(this);
  }
}

export class RemovePoolCall__Inputs {
  _call: RemovePoolCall;

  constructor(call: RemovePoolCall) {
    this._call = call;
  }

  get _poolToken(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class RemovePoolCall__Outputs {
  _call: RemovePoolCall;

  constructor(call: RemovePoolCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RetireCarbonCall extends ethereum.Call {
  get inputs(): RetireCarbonCall__Inputs {
    return new RetireCarbonCall__Inputs(this);
  }

  get outputs(): RetireCarbonCall__Outputs {
    return new RetireCarbonCall__Outputs(this);
  }
}

export class RetireCarbonCall__Inputs {
  _call: RetireCarbonCall;

  constructor(call: RetireCarbonCall) {
    this._call = call;
  }

  get _sourceToken(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _poolToken(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _amount(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _amountInCarbon(): boolean {
    return this._call.inputValues[3].value.toBoolean();
  }

  get _beneficiaryAddress(): Address {
    return this._call.inputValues[4].value.toAddress();
  }

  get _beneficiaryString(): string {
    return this._call.inputValues[5].value.toString();
  }

  get _retirementMessage(): string {
    return this._call.inputValues[6].value.toString();
  }
}

export class RetireCarbonCall__Outputs {
  _call: RetireCarbonCall;

  constructor(call: RetireCarbonCall) {
    this._call = call;
  }
}

export class RetireCarbonFromCall extends ethereum.Call {
  get inputs(): RetireCarbonFromCall__Inputs {
    return new RetireCarbonFromCall__Inputs(this);
  }

  get outputs(): RetireCarbonFromCall__Outputs {
    return new RetireCarbonFromCall__Outputs(this);
  }
}

export class RetireCarbonFromCall__Inputs {
  _call: RetireCarbonFromCall;

  constructor(call: RetireCarbonFromCall) {
    this._call = call;
  }

  get _initiator(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _sourceToken(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _poolToken(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get _amount(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get _amountInCarbon(): boolean {
    return this._call.inputValues[4].value.toBoolean();
  }

  get _beneficiaryAddress(): Address {
    return this._call.inputValues[5].value.toAddress();
  }

  get _beneficiaryString(): string {
    return this._call.inputValues[6].value.toString();
  }

  get _retirementMessage(): string {
    return this._call.inputValues[7].value.toString();
  }
}

export class RetireCarbonFromCall__Outputs {
  _call: RetireCarbonFromCall;

  constructor(call: RetireCarbonFromCall) {
    this._call = call;
  }
}

export class RetireCarbonSpecificCall extends ethereum.Call {
  get inputs(): RetireCarbonSpecificCall__Inputs {
    return new RetireCarbonSpecificCall__Inputs(this);
  }

  get outputs(): RetireCarbonSpecificCall__Outputs {
    return new RetireCarbonSpecificCall__Outputs(this);
  }
}

export class RetireCarbonSpecificCall__Inputs {
  _call: RetireCarbonSpecificCall;

  constructor(call: RetireCarbonSpecificCall) {
    this._call = call;
  }

  get _sourceToken(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _poolToken(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _amount(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _amountInCarbon(): boolean {
    return this._call.inputValues[3].value.toBoolean();
  }

  get _beneficiaryAddress(): Address {
    return this._call.inputValues[4].value.toAddress();
  }

  get _beneficiaryString(): string {
    return this._call.inputValues[5].value.toString();
  }

  get _retirementMessage(): string {
    return this._call.inputValues[6].value.toString();
  }

  get _carbonList(): Array<Address> {
    return this._call.inputValues[7].value.toAddressArray();
  }
}

export class RetireCarbonSpecificCall__Outputs {
  _call: RetireCarbonSpecificCall;

  constructor(call: RetireCarbonSpecificCall) {
    this._call = call;
  }
}

export class RetireCarbonSpecificFromCall extends ethereum.Call {
  get inputs(): RetireCarbonSpecificFromCall__Inputs {
    return new RetireCarbonSpecificFromCall__Inputs(this);
  }

  get outputs(): RetireCarbonSpecificFromCall__Outputs {
    return new RetireCarbonSpecificFromCall__Outputs(this);
  }
}

export class RetireCarbonSpecificFromCall__Inputs {
  _call: RetireCarbonSpecificFromCall;

  constructor(call: RetireCarbonSpecificFromCall) {
    this._call = call;
  }

  get _initiator(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _sourceToken(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _poolToken(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get _amount(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get _amountInCarbon(): boolean {
    return this._call.inputValues[4].value.toBoolean();
  }

  get _beneficiaryAddress(): Address {
    return this._call.inputValues[5].value.toAddress();
  }

  get _beneficiaryString(): string {
    return this._call.inputValues[6].value.toString();
  }

  get _retirementMessage(): string {
    return this._call.inputValues[7].value.toString();
  }

  get _carbonList(): Array<Address> {
    return this._call.inputValues[8].value.toAddressArray();
  }
}

export class RetireCarbonSpecificFromCall__Outputs {
  _call: RetireCarbonSpecificFromCall;

  constructor(call: RetireCarbonSpecificFromCall) {
    this._call = call;
  }
}

export class SetAddressCall extends ethereum.Call {
  get inputs(): SetAddressCall__Inputs {
    return new SetAddressCall__Inputs(this);
  }

  get outputs(): SetAddressCall__Outputs {
    return new SetAddressCall__Outputs(this);
  }
}

export class SetAddressCall__Inputs {
  _call: SetAddressCall;

  constructor(call: SetAddressCall) {
    this._call = call;
  }

  get _selection(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _newAddress(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class SetAddressCall__Outputs {
  _call: SetAddressCall;

  constructor(call: SetAddressCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class SetBridgeHelperCall extends ethereum.Call {
  get inputs(): SetBridgeHelperCall__Inputs {
    return new SetBridgeHelperCall__Inputs(this);
  }

  get outputs(): SetBridgeHelperCall__Outputs {
    return new SetBridgeHelperCall__Outputs(this);
  }
}

export class SetBridgeHelperCall__Inputs {
  _call: SetBridgeHelperCall;

  constructor(call: SetBridgeHelperCall) {
    this._call = call;
  }

  get _bridgeID(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _helper(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class SetBridgeHelperCall__Outputs {
  _call: SetBridgeHelperCall;

  constructor(call: SetBridgeHelperCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}
