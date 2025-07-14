const speakeasy = require('speakeasy');

export default function handler(req, res) {
  const token = speakeasy.totp({
    secret: 'LQH6QYAJGPN5LPAY',
    encoding: 'base32'
  });
  res.status(200).json({ code: token });
}
