const stripe = require('stripe')(
  'sk_test_51GrMwNHWj5wEAALnURS7rzQup0FH1hZCv0A5k37nYsTpRMu7tJAUaDgWCaHWPCSujqDObZbprIy4fQ1g6j9xVtUv00uM2Szr6H'
);
const uuid = require('uuid/v4');
exports.makePayment = (req, res) => {
  const { products, token } = req.body;
  console.log('products', products);
  let amount = 0;
  products.map((p) => {
    amount = amount + p.price;
  });
  const idempotencyKey = uuid();
  return stripe.customers
    .create({
      email: token.email,
      source: token.id,
    })
    .then((customer) => {
      stripe.charges
        .create(
          {
            amount: amount * 100,
            currency: 'usd',
            customer: customer.id,
            receipt_email: token.email,
            shipping: {
              name: token.card.name,
            },
          },
          { idempotencyKey }
        )
        .then((result) => res.status(200).json(result))
        .catch((err) => console.log(err));
    });
};
