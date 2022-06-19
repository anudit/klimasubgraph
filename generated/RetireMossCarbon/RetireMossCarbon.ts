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

export class CarbonChainUpdated extends ethereum.Event {
  get params(): CarbonChainUpdated__Params {
    return new CarbonChainUpdated__Params(this);
  }
}

export class CarbonChainUpdated__Params {
  _event: CarbonChainUpdated;

  constructor(event: CarbonChainUpdated) {
    this._event = event;
  }

  get oldAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newAddress(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class FeeUpdated extends ethereum.Event {
  get params(): FeeUpdated__Params {
    return new FeeUpdated__Params(this);
  }
}

export class FeeUpdated__Params {
  _event: FeeUpdated;

  constructor(event: FeeUpdated) {
    this._event = event;
  }

  get oldFee(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get newFee(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class MasterAggregatorUpdated extends ethereum.Event {
  get params(): MasterAggregatorUpdated__Params {
    return new MasterAggregatorUpdated__Params(this);
  }
}

export class MasterAggregatorUpdated__Params {
  _event: MasterAggregatorUpdated;

  constructor(event: MasterAggregatorUpdated) {
    this._event = event;
  }

  get oldAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newAddress(): Address {
    return this._event.parameters[1].value.toAddress();
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

  get carbonPool(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get poolRouter(): Address {
    return this._event.parameters[1].value.toAddress();
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

  get carbonPool(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class PoolRouterChanged extends ethereum.Event {
  get params(): PoolRouterChanged__Params {
    return new PoolRouterChanged__Params(this);
  }
}

export class PoolRouterChanged__Params {
  _event: PoolRouterChanged;

  constructor(event: PoolRouterChanged) {
    this._event = event;
  }

  get carbonPool(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get oldRouter(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get newRouter(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class RetireMossCarbon__getNeededBuyAmountResult {
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

export class RetireMossCarbon extends ethereum.SmartContract {
  static bind(address: Address): RetireMossCarbon {
    return new RetireMossCarbon("RetireMossCarbon", address);
  }

  addPool(_poolToken: Address, _router: Address): boolean {
    let result = super.call("addPool", "addPool(address,address):(bool)", [
      ethereum.Value.fromAddress(_poolToken),
      ethereum.Value.fromAddress(_router)
    ]);

    return result[0].toBoolean();
  }

  try_addPool(
    _poolToken: Address,
    _router: Address
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall("addPool", "addPool(address,address):(bool)", [
      ethereum.Value.fromAddress(_poolToken),
      ethereum.Value.fromAddress(_router)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  carbonChain(): Address {
    let result = super.call("carbonChain", "carbonChain():(address)", []);

    return result[0].toAddress();
  }

  try_carbonChain(): ethereum.CallResult<Address> {
    let result = super.tryCall("carbonChain", "carbonChain():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  feeAmount(): BigInt {
    let result = super.call("feeAmount", "feeAmount():(uint256)", []);

    return result[0].toBigInt();
  }

  try_feeAmount(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("feeAmount", "feeAmount():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
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

  getNeededBuyAmount(
    _sourceToken: Address,
    _poolToken: Address,
    _poolAmount: BigInt,
    _specificRetire: boolean
  ): RetireMossCarbon__getNeededBuyAmountResult {
    let result = super.call(
      "getNeededBuyAmount",
      "getNeededBuyAmount(address,address,uint256,bool):(uint256,uint256)",
      [
        ethereum.Value.fromAddress(_sourceToken),
        ethereum.Value.fromAddress(_poolToken),
        ethereum.Value.fromUnsignedBigInt(_poolAmount),
        ethereum.Value.fromBoolean(_specificRetire)
      ]
    );

    return new RetireMossCarbon__getNeededBuyAmountResult(
      result[0].toBigInt(),
      result[1].toBigInt()
    );
  }

  try_getNeededBuyAmount(
    _sourceToken: Address,
    _poolToken: Address,
    _poolAmount: BigInt,
    _specificRetire: boolean
  ): ethereum.CallResult<RetireMossCarbon__getNeededBuyAmountResult> {
    let result = super.tryCall(
      "getNeededBuyAmount",
      "getNeededBuyAmount(address,address,uint256,bool):(uint256,uint256)",
      [
        ethereum.Value.fromAddress(_sourceToken),
        ethereum.Value.fromAddress(_poolToken),
        ethereum.Value.fromUnsignedBigInt(_poolAmount),
        ethereum.Value.fromBoolean(_specificRetire)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new RetireMossCarbon__getNeededBuyAmountResult(
        value[0].toBigInt(),
        value[1].toBigInt()
      )
    );
  }

  getSwapPath(_sourceToken: Address, _poolToken: Address): Array<Address> {
    let result = super.call(
      "getSwapPath",
      "getSwapPath(address,address):(address[])",
      [
        ethereum.Value.fromAddress(_sourceToken),
        ethereum.Value.fromAddress(_poolToken)
      ]
    );

    return result[0].toAddressArray();
  }

  try_getSwapPath(
    _sourceToken: Address,
    _poolToken: Address
  ): ethereum.CallResult<Array<Address>> {
    let result = super.tryCall(
      "getSwapPath",
      "getSwapPath(address,address):(address[])",
      [
        ethereum.Value.fromAddress(_sourceToken),
        ethereum.Value.fromAddress(_poolToken)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddressArray());
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

  masterAggregator(): Address {
    let result = super.call(
      "masterAggregator",
      "masterAggregator():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_masterAggregator(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "masterAggregator",
      "masterAggregator():(address)",
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

  poolRouter(param0: Address): Address {
    let result = super.call("poolRouter", "poolRouter(address):(address)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return result[0].toAddress();
  }

  try_poolRouter(param0: Address): ethereum.CallResult<Address> {
    let result = super.tryCall("poolRouter", "poolRouter(address):(address)", [
      ethereum.Value.fromAddress(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
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

  setCarbonChain(_newAddress: Address): boolean {
    let result = super.call(
      "setCarbonChain",
      "setCarbonChain(address):(bool)",
      [ethereum.Value.fromAddress(_newAddress)]
    );

    return result[0].toBoolean();
  }

  try_setCarbonChain(_newAddress: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "setCarbonChain",
      "setCarbonChain(address):(bool)",
      [ethereum.Value.fromAddress(_newAddress)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  setFeeAmount(_amount: BigInt): boolean {
    let result = super.call("setFeeAmount", "setFeeAmount(uint256):(bool)", [
      ethereum.Value.fromUnsignedBigInt(_amount)
    ]);

    return result[0].toBoolean();
  }

  try_setFeeAmount(_amount: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall("setFeeAmount", "setFeeAmount(uint256):(bool)", [
      ethereum.Value.fromUnsignedBigInt(_amount)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  setMasterAggregator(_newAddress: Address): boolean {
    let result = super.call(
      "setMasterAggregator",
      "setMasterAggregator(address):(bool)",
      [ethereum.Value.fromAddress(_newAddress)]
    );

    return result[0].toBoolean();
  }

  try_setMasterAggregator(_newAddress: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "setMasterAggregator",
      "setMasterAggregator(address):(bool)",
      [ethereum.Value.fromAddress(_newAddress)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  setPoolRouter(_poolToken: Address, _router: Address): boolean {
    let result = super.call(
      "setPoolRouter",
      "setPoolRouter(address,address):(bool)",
      [
        ethereum.Value.fromAddress(_poolToken),
        ethereum.Value.fromAddress(_router)
      ]
    );

    return result[0].toBoolean();
  }

  try_setPoolRouter(
    _poolToken: Address,
    _router: Address
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "setPoolRouter",
      "setPoolRouter(address,address):(bool)",
      [
        ethereum.Value.fromAddress(_poolToken),
        ethereum.Value.fromAddress(_router)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
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

  get _router(): Address {
    return this._call.inputValues[1].value.toAddress();
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

export class RetireMossCall extends ethereum.Call {
  get inputs(): RetireMossCall__Inputs {
    return new RetireMossCall__Inputs(this);
  }

  get outputs(): RetireMossCall__Outputs {
    return new RetireMossCall__Outputs(this);
  }
}

export class RetireMossCall__Inputs {
  _call: RetireMossCall;

  constructor(call: RetireMossCall) {
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

  get _retiree(): Address {
    return this._call.inputValues[7].value.toAddress();
  }
}

export class RetireMossCall__Outputs {
  _call: RetireMossCall;

  constructor(call: RetireMossCall) {
    this._call = call;
  }
}

export class SetCarbonChainCall extends ethereum.Call {
  get inputs(): SetCarbonChainCall__Inputs {
    return new SetCarbonChainCall__Inputs(this);
  }

  get outputs(): SetCarbonChainCall__Outputs {
    return new SetCarbonChainCall__Outputs(this);
  }
}

export class SetCarbonChainCall__Inputs {
  _call: SetCarbonChainCall;

  constructor(call: SetCarbonChainCall) {
    this._call = call;
  }

  get _newAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetCarbonChainCall__Outputs {
  _call: SetCarbonChainCall;

  constructor(call: SetCarbonChainCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class SetFeeAmountCall extends ethereum.Call {
  get inputs(): SetFeeAmountCall__Inputs {
    return new SetFeeAmountCall__Inputs(this);
  }

  get outputs(): SetFeeAmountCall__Outputs {
    return new SetFeeAmountCall__Outputs(this);
  }
}

export class SetFeeAmountCall__Inputs {
  _call: SetFeeAmountCall;

  constructor(call: SetFeeAmountCall) {
    this._call = call;
  }

  get _amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetFeeAmountCall__Outputs {
  _call: SetFeeAmountCall;

  constructor(call: SetFeeAmountCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class SetMasterAggregatorCall extends ethereum.Call {
  get inputs(): SetMasterAggregatorCall__Inputs {
    return new SetMasterAggregatorCall__Inputs(this);
  }

  get outputs(): SetMasterAggregatorCall__Outputs {
    return new SetMasterAggregatorCall__Outputs(this);
  }
}

export class SetMasterAggregatorCall__Inputs {
  _call: SetMasterAggregatorCall;

  constructor(call: SetMasterAggregatorCall) {
    this._call = call;
  }

  get _newAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetMasterAggregatorCall__Outputs {
  _call: SetMasterAggregatorCall;

  constructor(call: SetMasterAggregatorCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class SetPoolRouterCall extends ethereum.Call {
  get inputs(): SetPoolRouterCall__Inputs {
    return new SetPoolRouterCall__Inputs(this);
  }

  get outputs(): SetPoolRouterCall__Outputs {
    return new SetPoolRouterCall__Outputs(this);
  }
}

export class SetPoolRouterCall__Inputs {
  _call: SetPoolRouterCall;

  constructor(call: SetPoolRouterCall) {
    this._call = call;
  }

  get _poolToken(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _router(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class SetPoolRouterCall__Outputs {
  _call: SetPoolRouterCall;

  constructor(call: SetPoolRouterCall) {
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
