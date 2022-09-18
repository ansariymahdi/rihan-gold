import { toFixFloat } from "./main";

export const createCards = (cards) => {
  const createConsts = (currency) => {
    switch (currency) {
      case "Toman":
        return {
          title: "موجودی تومان",
          measurment: "تومان",
          currency: "Toman",
        };

      case "Tether":
        return {
          title: "موجودی تتر",
          measurment: "USDT",
          currency: "tether",
          currencyDir: "ltr",
        };

      default:
        break;
    }
  };
  return cards?.length > 0
    ? cards.map(({ balance, wallet_name, wallet_address, on_order }) => ({
        amount:
          wallet_name == "Toman" ? parseInt(balance) : toFixFloat(balance, 2),
        available: toFixFloat(balance - on_order, 2),
        ...createConsts(wallet_name),
        wallet_address,
      }))
    : [
        {
          title: "موجودی تتر",
          measurment: "USDT",
          currency: "tether",
          currencyDir: "ltr",
          available: 0,
          amount: 0,
        },
        {
          title: "موجودی تومان",
          measurment: "تومان",
          currency: "Toman",
          amount: 0,
          available: 0,
        },
      ];
};
