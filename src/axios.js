import axios from 'axios';

export default function() {
  const instance = axios.create({
    headers: {
      Authorization: 'Bearer BQCxKPprOO8RhCGyVmu8Aq8fwfzj1l9JeFAIO4lM7xqiRxOnkJfy7Gk9ipxN9O2SobgsYAY669z7oitFzFo'
    }
  });

  return instance;
}
