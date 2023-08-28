import { Order } from "./generated/graphql";

export const orders: Omit<Order, "totalSum">[] = [
  {
    customerId: "customer-1",
    products: [
      { ean: "2000570800008", amount: 3 },
      { ean: "2000609200007", amount: 1 },
      { ean: "2000632900004", amount: 7 },
    ],
  },
  {
    customerId: "customer-2",
    products: [
      { ean: "2000559900002", amount: 12 },
      { ean: "2005029300009", amount: 10 },
    ],
  },
  {
    customerId: "customer-1",
    products: [
      { ean: "2000519200005", amount: 8 },
      { ean: "2000503700009", amount: 6 },
      { ean: "2000632900004", amount: 1 },
      { ean: "2005029300009", amount: 4 },
    ],
  },
];
