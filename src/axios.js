import axios from 'axios';

export default function() {
  const instance = axios.create({
    headers: {
      Authorization: 'Bearer BQDywG-LuWM7Pf0wbBAodmqUcYwB6iftl1N4wV7st7fahJeGmcvMzkzNesnxaf5E5pvbmDDCI0RukZpsk-A'
    }
  });

  return instance;
}
