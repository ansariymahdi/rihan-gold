export function validateWalletAddress(address: string) {
  const isTrc = address.toLowerCase().startsWith("t") && address.length === 34;
  const isErc = address.toLowerCase().startsWith("0x") && address.length === 42;

  return isTrc || isErc;
}
